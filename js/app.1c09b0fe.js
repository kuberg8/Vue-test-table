(function(t){function e(e){for(var r,a,o=e[0],u=e[1],c=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/test1/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"3af3":function(t,e,n){},"568e":function(t,e,n){"use strict";var r=n("5d59"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("99af"),n("4de4"),n("ac1f"),n("5319"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Тест")]),n("section",[n("h2",[t._v("Выберите набор данных")]),n("div",{staticClass:"myBtn"},[n("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.getData("small")}}},[t._v(" Маленький набор ")]),n("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.getData("big")}}},[t._v(" Большой набор ")])])]),t.items.length&&!t.loading?n("Table",{attrs:{initItems:t.items}}):t._e(),t.loading?n("img",{attrs:{src:t.preloder}}):t._e()],1)},s=[],a=(n("d3b7"),n("96cf"),n("1da1")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.modal?n("Modal",{attrs:{width:"50%"},on:{close:t.closeModal}},[n("form",{staticStyle:{width:"100%"},on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[t._l(t.fields,(function(e,r){return n("div",{key:r,staticClass:"user__block-item"},[n("b",[n("span",[t._v(t._s(e))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.$v.user[e].$dirty&&t.$v.user[e].$error,expression:"$v.user[item].$dirty && $v.user[item].$error"}],staticClass:"error__text"},[t._v(t._s(t.errorText(e)))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user[e],expression:"user[item]"}],class:{error:t.$v.user[e].$dirty&&t.$v.user[e].$error},attrs:{readonly:t.readonly,type:"text",placeholder:"Введите id"},domProps:{value:t.user[e]},on:{input:function(n){n.target.composing||t.$set(t.user,e,n.target.value)}}})])})),t.readonly?t._e():n("button",{staticClass:"btn btn-primary",staticStyle:{"margin-top":"20px",width:"100%"}},[t._v(" Добавить ")])],2)]):t._e(),n("div",{staticClass:"controls"},[n("div",{staticClass:"input-group input-group-lg controls__item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.searchFilter]}}),n("button",{staticClass:"input-group-text",on:{click:t.searchFilter}},[t._v("Поиск")])]),n("div",{staticClass:"controls__item"},[n("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:function(e){t.modal=!0}}},[t._v(" Добавить ")]),n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.switchPortion(-1)}}},[n("span",{staticClass:"page-link"},[t._v("«")])]),t._l(t.pagesOfPortion,(function(e,r){return n("li",{key:r,staticClass:"page-item",staticStyle:{cursor:"pointer"},on:{click:function(n){t.page=e}}},[n("span",{class:["page-link",{"page_link-active":e==t.page}]},[t._v(t._s(e))])])})),n("li",{staticClass:"page-item",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.switchPortion(1)}}},[n("span",{staticClass:"page-link"},[t._v("»")])])],2)]),n("span",{staticStyle:{display:"flex"}},[n("h6",[t._v("Строк на странице:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.pageSize,expression:"pageSize"}],staticClass:"form-select form-select-lg mb-3",staticStyle:{"max-width":"100px",margin:"0 20px"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.pageSize=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:""},domProps:{value:5}},[t._v("5")]),n("option",{domProps:{value:15}},[t._v("15")]),n("option",{domProps:{value:50}},[t._v("50")])]),n("h6",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(t.from)+" - "+t._s(t.to>t.totalCount?t.totalCount:t.to)+" из "+t._s(t.totalCount)+" ")])])])]),n("table",{staticClass:"table"},[n("tr",t._l(t.headers,(function(e,r){return n("th",{key:r,style:e.notSortble?null:"cursor: pointer",on:{click:function(n){return t.sortByName(e)}}},[n("span",[t._v(t._s(e.name)+" "),e.notSortble?t._e():n("i",{staticClass:"fas fa-sort-up",style:e.descending?"transform: rotate(180deg)":null})])])})),0),t._l(t.sortedItems,(function(e,r){return n("tr",{key:r,on:{click:function(n){return t.showUserInfo(e)}}},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.firstName))]),n("td",[t._v(t._s(e.lastName))]),n("td",[t._v(t._s(e.email))]),n("td",[t._v(t._s(t._f("phone")(e.phone)))]),n("td",{attrs:{align:"left"}},[n("div",[t._v("streetAddress - "+t._s(e.address.streetAddress))]),n("div",[t._v("city - "+t._s(e.address.city))]),n("div",[t._v("state - "+t._s(e.address.state))]),n("div",[t._v("zip - "+t._s(e.address.zip))])]),n("td",{attrs:{width:"30%"}},[t._v(t._s(e.description))])])}))],2)],1)},u=[],c=(n("a4d3"),n("e01a"),n("caad"),n("b0c0"),n("25f0"),n("2532"),n("841c"),n("2909")),l=n("5530"),d=n("d4ec"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"field",on:{click:function(e){return e.stopPropagation(),t.$emit("close")}}}),n("div",{staticClass:"window",style:t.windowStyle},[t._t("default")],2)])},m=[],h={props:{height:{type:String,default:"fit-content"},width:{type:String,default:"fit-content"}},computed:{windowStyle:function(){return{width:this.width,height:this.height}}}},f=h,v=(n("cf0a"),n("2877")),g=Object(v["a"])(f,p,m,!1,null,"9e16ed4e",null),b=g.exports,_=n("b5ae"),y=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(d["a"])(this,t),this.id=e.id||"",this.firstName=e.firstName||"",this.lastName=e.lastName||"",this.email=e.email||"",this.phone=e.phone||"",this.address=e.address||{streetAddress:"1600 Amphitheatre Parkway",city:"Mountain View",state:"CA",zip:"94043"},this.description=e.description||"Заполню поле за вас :)"},w=function(t){return/\+7\s\(\d{3}\)\s\d{3}\s\d{2}(\s|-)\d{2}/g.test(t)},x={components:{Modal:b},props:{initItems:{type:Array,default:function(){return[]}}},data:function(){return{search:"",items:this.initItems,page:1,pageSize:5,portionNumber:1,user:new y,headers:[{name:"id",descending:!1},{name:"firstName",descending:!1},{name:"lastName",descending:!1},{name:"email",descending:!1},{name:"phone",descending:!1},{name:"address",descending:!1,notSortble:!0},{name:"description",descending:!1}],fields:["id","firstName","lastName","email","phone"],modal:!1,readonly:!1}},methods:{searchFilter:function(){var t=this;this.search?this.items=this.initItems.filter((function(e){for(var n in e)if(e[n].toString().toLowerCase().includes(t.search.toLowerCase()))return!0})):this.items=this.initItems},switchPortion:function(t){var e=this.portionNumber+t;e>0&&e<=this.portionsCount&&(this.portionNumber=e)},sortByName:function(t){t.descending=!t.descending;var e=t.name,n=t.descending;this.items=n?this.items.sort((function(t,n){return t[e]<n[e]?1:t[e]==n[e]?0:t[e]>n[e]?-1:void 0})):this.items.sort((function(t,n){return t[e]>n[e]?1:t[e]==n[e]?0:t[e]<n[e]?-1:void 0}))},closeModal:function(){this.$v.$reset(),this.modal=!1,this.readonly=!1,this.user=new y},showUserInfo:function(t){this.readonly=!0,this.user=Object(l["a"])({},t),this.user.phone=this.$options.filters.phone(t.phone),this.modal=!0},add:function(){this.$v.user.$invalid?this.$v.$touch():(this.user.phone=this.user.phone.replace(/[^0-9]/g,"").substr(1),this.items=[new y(this.user)].concat(Object(c["a"])(this.items)),this.user=new y,this.modal=!1,this.$v.$reset())}},validations:{user:{id:{required:_["required"],numeric:_["numeric"]},firstName:{required:_["required"],alpha:_["alpha"]},lastName:{required:_["required"],alpha:_["alpha"]},email:{required:_["required"],email:_["email"]},phone:{required:_["required"],isPhone:w}}},computed:{totalCount:function(){return this.items.length},sortedItems:function(){var t=this;return this.items.filter((function(e,n){return n+1>=t.from&&n<t.to}))},pageCount:function(){return Math.ceil(this.totalCount/this.pageSize)},pagesOfPortion:function(){for(var t=this,e=[],n=1;n<=this.pageCount;n++)e.push(n);return e.filter((function(e){return e>=t.leftPageNumber&&e<=t.rightPageNumber}))},leftPageNumber:function(){return 3*(this.portionNumber-1)+1},rightPageNumber:function(){return 3*this.portionNumber},portionsCount:function(){return Math.ceil(this.pageCount/3)},from:function(){return 1+this.pageSize*(this.page-1)},to:function(){return this.pageSize+this.pageSize*(this.page-1)},errorText:function(){var t=this;return function(e){return t.$v.user[e].required?"id"!=e||t.$v.user.id.numeric?("firstName"!=e||t.$v.user.firstName.alpha)&&("lastName"!=e||t.$v.user.lastName.alpha)?"email"!=e||t.$v.user.email.email?"phone"!=e||t.$v.user.phone.isPhone?void 0:"+7 (999) 999 99 99":"Невалидный email":"Только латинские буквы":"Только цифры":"Поле обязательно"}}},watch:{pageSize:function(){this.page=1,this.portionNumber=1},totalCount:function(){this.page=1,this.portionNumber=1}}},C=x,N=(n("568e"),Object(v["a"])(C,o,u,!1,null,"ec606506",null)),S=N.exports,$=n("853c"),k=n.n($),P={components:{Table:S},data:function(){return{dataSize:null,loading:!1,items:[],preloder:k.a}},methods:{getData:function(){var t=arguments,e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:"small",e.dataSize!=r){n.next=3;break}return n.abrupt("return");case 3:e.dataSize=r,n.t0=r,n.next="small"===n.t0?7:"big"===n.t0?9:11;break;case 7:return i="http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",n.abrupt("break",11);case 9:return i="http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",n.abrupt("break",11);case 11:return e.loading=!0,n.prev=12,n.next=15,fetch(i);case 15:return s=n.sent,n.next=18,s.json();case 18:e.items=n.sent,n.next=24;break;case 21:n.prev=21,n.t1=n["catch"](12),alert(n.t1);case 24:e.loading=!1;case 25:case"end":return n.stop()}}),n,null,[[12,21]])})))()}}},O=P,j=(n("034f"),Object(v["a"])(O,i,s,!1,null,null,null)),D=j.exports,B=n("1dce"),z=n.n(B);r["a"].config.productionTip=!1,r["a"].use(z.a),r["a"].filter("phone",(function(t){t=t.replace(/[^0-9]/g,"");var e="+7",n=t.substr(0,3),r=t.substr(3,3),i=t.substr(6,2),s=t.substr(8,2);return"".concat(e," (").concat(n,") ").concat(r," ").concat(i,"-").concat(s)})),new r["a"]({render:function(t){return t(D)}}).$mount("#app")},"5d59":function(t,e,n){},"853c":function(t,e,n){t.exports=n.p+"img/preloder.269d221e.svg"},"85ec":function(t,e,n){},cf0a:function(t,e,n){"use strict";var r=n("3af3"),i=n.n(r);i.a}});
//# sourceMappingURL=app.1c09b0fe.js.map