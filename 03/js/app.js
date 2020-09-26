Vue.component("todo-footer", {
  template: "<p>This is another golobal child component</p>",
});

var app = new Vue({
  el: "#app",
  data: {
    message: "this is parent component",
  },
  components: {
    "todo-list": { template: "<p>this is another child component</p>" },
  },
});
