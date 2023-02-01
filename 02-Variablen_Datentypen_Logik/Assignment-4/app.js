const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      showParagraph: true,
      userColor: "#8ddba4",
    };
  },
  computed: {
    paragraphClasses() {
      let classlist = [];

      if (!this.showParagraph) classlist.push("hidden");
      else classlist.push("visible");

      switch (this.userInput) {
        case "user1":
          classlist.push("user1");
          break;
        case "user2":
          classlist.push("user2");
          break;
      }

      return classlist;
    },
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  },
});
app.mount("#app");
