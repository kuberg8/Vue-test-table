<template>
  <div>
    <Modal v-if="modal" width="50%" @close="closeModal">
      <form @submit.prevent="add" style="width: 100%">
        <div
          v-for="(item, index) in fields"
          :key="index"
          class="user__block-item"
        >
          <b>
            <span>{{ item }}</span>
            <span
              v-show="$v.user[item].$dirty && $v.user[item].$error"
              class="error__text"
              >{{ errorText(item) }}</span
            >
          </b>
          <input
            v-model="user[item]"
            :readonly="readonly"
            type="text"
            placeholder="Введите id"
            :class="{ error: $v.user[item].$dirty && $v.user[item].$error }"
          />
        </div>
        <button
          v-if="!readonly"
          class="btn btn-primary"
          style="margin-top: 20px; width: 100%;"
        >
          Добавить
        </button>
      </form>
    </Modal>

    <div class="controls">
      <div class="input-group input-group-lg controls__item">
        <input
          v-model="search"
          type="text"
          class="form-control"
          @input="searchFilter"
        />
        <button class="input-group-text" @click="searchFilter">Поиск</button>
      </div>

      <div class="controls__item">
        <button
          @click="modal = true"
          type="button"
          class="btn btn-primary btn-lg"
        >
          Добавить
        </button>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class="page-item"
              @click="switchPortion(-1)"
              style="cursor: pointer"
            >
              <span class="page-link">&laquo;</span>
            </li>
            <li
              v-for="(item, index) in pagesOfPortion"
              :key="index"
              class="page-item"
              style="cursor: pointer"
              @click="page = item"
            >
              <span
                :class="['page-link', { 'page_link-active': item == page }]"
                >{{ item }}</span
              >
            </li>
            <li
              class="page-item"
              @click="switchPortion(1)"
              style="cursor: pointer"
            >
              <span class="page-link">&raquo;</span>
            </li>
          </ul>
        </nav>

        <span style="display: flex">
          <h6>Строк на странице:</h6>
          <select
            v-model="pageSize"
            class="form-select form-select-lg mb-3"
            style="max-width: 100px; margin: 0 20px"
          >
            <option selected :value="5">5</option>
            <option :value="15">15</option>
            <option :value="50">50</option>
          </select>
          <h6 style="white-space: nowrap;">
            {{ from }}
            -
            {{ to > totalCount ? totalCount : to }}
            из
            {{ totalCount }}
          </h6>
        </span>
      </div>
    </div>

    <table class="table">
      <tr>
        <th
          v-for="(item, index) in headers"
          :key="index"
          @click="sortByName(item)"
          :style="!item.notSortble ? 'cursor: pointer' : null"
        >
          <span
            >{{ item.name }}
            <i
              v-if="!item.notSortble"
              :style="item.descending ? 'transform: rotate(180deg)' : null"
              class="fas fa-sort-up"
            ></i
          ></span>
        </th>
      </tr>
      <tr
        v-for="(item, index) in sortedItems"
        :key="index"
        @click="showUserInfo(item)"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone | phone }}</td>
        <td align="left">
          <div>streetAddress - {{ item.address.streetAddress }}</div>
          <div>city - {{ item.address.city }}</div>
          <div>state - {{ item.address.state }}</div>
          <div>zip - {{ item.address.zip }}</div>
        </td>
        <td width="30%">{{ item.description }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { required, numeric, alpha, email } from "vuelidate/lib/validators";

class User {
  constructor(user = {}) {
    this.id = user.id || "";
    this.firstName = user.firstName || "";
    this.lastName = user.lastName || "";
    this.email = user.email || "";
    this.phone = user.phone || "";
    this.address = user.address || {
      streetAddress: "1600 Amphitheatre Parkway",
      city: "Mountain View",
      state: "CA",
      zip: "94043",
    };
    this.description = user.description || "Заполню поле за вас :)";
  }
}

const isPhone = (value) =>
  /\+7\s\(\d{3}\)\s\d{3}\s\d{2}(\s|-)\d{2}/g.test(value);

export default {
  components: {
    Modal,
  },
  props: {
    initItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      search: "",
      items: this.initItems,
      page: 1,
      pageSize: 5,
      portionNumber: 1,
      user: new User(),
      headers: [
        { name: "id", descending: false },
        { name: "firstName", descending: false },
        { name: "lastName", descending: false },
        { name: "email", descending: false },
        { name: "phone", descending: false },
        { name: "address", descending: false, notSortble: true },
        { name: "description", descending: false },
      ],
      fields: ["id", "firstName", "lastName", "email", "phone"],
      modal: false,
      readonly: false,
    };
  },
  methods: {
    searchFilter() {
      if (this.search) {
        this.items = this.initItems.filter((item) => {
          for (let key in item) {
            if (
              item[key]
                .toString()
                .toLowerCase()
                .includes(this.search.toLowerCase())
            )
              return true;
          }
        });
      } else {
        this.items = this.initItems;
      }
    },
    switchPortion(portion) {
      const result = this.portionNumber + portion;
      if (result > 0 && result <= this.portionsCount) {
        this.portionNumber = result;
      }
    },
    sortByName(item) {
      item.descending = !item.descending;
      let { name, descending } = item;

      if (!descending) {
        this.items = this.items.sort((a, b) => {
          if (a[name] > b[name]) return 1;
          if (a[name] == b[name]) return 0;
          if (a[name] < b[name]) return -1;
        });
      } else {
        this.items = this.items.sort((a, b) => {
          if (a[name] < b[name]) return 1;
          if (a[name] == b[name]) return 0;
          if (a[name] > b[name]) return -1;
        });
      }
    },
    closeModal() {
      this.$v.$reset();
      this.modal = false;
      this.readonly = false;
      this.user = new User();
    },
    showUserInfo(item) {
      this.readonly = true;
      this.user = { ...item };
      this.user.phone = this.$options.filters.phone(item.phone);
      this.modal = true;
    },
    add() {
      if (this.$v.user.$invalid) {
        this.$v.$touch();
        return;
      }

      this.user.phone = this.user.phone.replace(/[^0-9]/g, "").substr(1);
      this.items = [new User(this.user), ...this.items];
      this.user = new User();
      this.modal = false;
      this.$v.$reset();
    },
  },
  validations: {
    user: {
      id: { required, numeric },
      firstName: { required, alpha },
      lastName: { required, alpha },
      email: { required, email },
      phone: { required, isPhone },
    },
  },
  computed: {
    totalCount() {
      return this.items.length;
    },
    sortedItems() {
      return this.items.filter(
        (item, index) => index + 1 >= this.from && index < this.to
      );
    },
    pageCount() {
      return Math.ceil(this.totalCount / this.pageSize);
    },
    pagesOfPortion() {
      let pageMas = [];
      for (var i = 1; i <= this.pageCount; i++) {
        pageMas.push(i);
      }
      return pageMas.filter(
        (p) => p >= this.leftPageNumber && p <= this.rightPageNumber
      );
    },
    leftPageNumber() {
      return (this.portionNumber - 1) * 3 + 1;
    },
    rightPageNumber() {
      return this.portionNumber * 3;
    },
    portionsCount() {
      return Math.ceil(this.pageCount / 3);
    },
    from() {
      return 1 + this.pageSize * (this.page - 1);
    },
    to() {
      return this.pageSize + this.pageSize * (this.page - 1);
    },
    errorText() {
      return (field) => {
        if (!this.$v.user[field].required) return "Поле обязательно";
        if (field == "id" && !this.$v.user.id.numeric) return "Только цифры";
        if (field == "firstName" && !this.$v.user.firstName.alpha)
          return "Только латинские буквы";
        if (field == "lastName" && !this.$v.user.lastName.alpha)
          return "Только латинские буквы";
        if (field == "email" && !this.$v.user.email.email)
          return "Невалидный email";
        if (field == "phone" && !this.$v.user.phone.isPhone)
          return "+7 (999) 999 99 99";
      };
    },
  },
  watch: {
    pageSize: function() {
      this.page = 1;
      this.portionNumber = 1;
    },
    totalCount: function() {
      this.page = 1;
      this.portionNumber = 1;
    },
  },
};
</script>

<style scoped>
.table {
  width: 98%;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
}
th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}
td {
  border: 1px solid #dddddd;
  padding: 5px;
}
tr {
  transition: background 0.2s linear;
}
tr:not(:first-child):hover {
  background: #efefef;
  cursor: pointer;
}

.controls {
  max-width: 80%;
  margin: 40px auto;
}

.controls__item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
}

.page-link:active {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}
.page_link-active {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

i {
  transition: transform 0.1s linear;
}

.user__block-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.user__block-item input {
  outline: none;
  margin-bottom: 5px;
  font-size: 14px;
  padding: 8px 12px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 8px;
  transition: border 0.2s linear;
}

.user__block-item input[readonly] {
  border: none;
  cursor: auto;
}

.error {
  border: 1px solid red !important;
  animation: error 0.2s linear;
}

@keyframes error {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-10px);
  }
  70% {
    transform: translateX(10px);
  }
}

.error__text {
  position: absolute;
  font-size: 14px;
  color: red;
  right: 40px;
  animation: showErrorText 0.2s linear;
}

@keyframes showErrorText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
