Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{ propsdata }}</p>",
});

// mission #1
// sibling-component를 이름으로 하는 새로운 component 등록
// options: props, template
Vue.component("sibling-component", {
  props: ["propsdata"],
  template: "<p>{{ propsdata}}</p>",
});

new Vue({
  el: "#app",
  data: {
    message: "Hello vue! passed from parent Component!",
    // mission #2
    anotherMaeesage: "This is another message!",
  },
  methods: {
    getData1() {
      return this.message;
    },
    getData2() {
      return this.anotherMaeesage;
    },
  },
});
