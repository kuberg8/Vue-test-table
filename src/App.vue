<template>
  <div id="app">
    <h1>Тест</h1>
    <section>
      <h2>Выберите набор данных</h2>
      <div class="myBtn">
        <button class="btn btn-outline-primary" @click="getData('small')">
          Маленький набор
        </button>
        <button class="btn btn-outline-primary" @click="getData('big')">
          Большой набор
        </button>
      </div>
    </section>

    <Table v-if="items.length && !loading" :initItems="items" />
    <img v-if="loading" :src="preloder" />
  </div>
</template>

<script>
import Table from "@/components/Table";
import preloder from "@/assets/preloder.svg";

export default {
  components: {
    Table,
  },
  data() {
    return {
      dataSize: null,
      loading: false,
      items: [],
      preloder,
    };
  },
  methods: {
    async getData(size = "small") {
      if (this.dataSize == size) return;
      this.dataSize = size;

      let url;

      switch (size) {
        case "small":
          url =
            "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
          break;
        case "big":
          url =
            "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
          break;
      }

      this.loading = true;
      try {
        let response = await fetch(url);
        this.items = await response.json();
      } catch (e) {
        alert(e);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
body {
  text-align: center;
  background: #f8f9fa;
}

.myBtn {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin: 0 auto;
}

img {
  margin-top: 40px;
}
</style>
