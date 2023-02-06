const app = Vue.createApp({
  data() {
    return {
      currentTask: "",
      tasks: [],
      listIsVisible: true,
      textVisibilitySwitch: "Hide List",
    };
  },
  computed: {
    isButtonActive() {
      return this.tasks.length != 0;
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.currentTask);
      this.currentTask = "";
    },
    toggleListVisibility() {
      this.listIsVisible = !this.listIsVisible;

      if (this.listIsVisible)
        this.textVisibilitySwitch = "Hide List";
      else
        this.textVisibilitySwitch = "Show List";
    },
  },
});

app.mount("#assignment");
