const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
        return { active: this.boxASelected };
    },
    boxBClasses() {
        return { active: this.boxBSelected };
    },
    boxCClasses() {
        return { active: this.boxCSelected };
    }
  },
  methods: {
    boxSelected(box) {
      switch (box) {
        case 'A':
            this.boxASelected = !this.boxASelected;
          break;
        case 'B':
            this.boxBSelected = !this.boxBSelected;
          break;
        case 'C':
            this.boxCSelected = !this.boxCSelected;
          break;

        default:
          break;
      }
    },
  },
});
app.mount("#app");

