const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      //console.dir(this.$refs.userText);
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
  <input type="text" @input="saveInput2">
  <button @click="setText2">Set Text</button>
  <p>{{ message }}</p>
  `,
  data() {
    return {
      currentUserInput2: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput2(event) {
      this.currentUserInput2 = event.target.value;
    },
    setText2() {
      this.message = this.currentUserInput2;
    },
  },
});

app2.mount("#app2");

const data = {
  message: "Hello",
  longMessage: "Hello You",
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if ((key = "message")) {
      target.longMessage = value + " World";
    }
    target.message = value;
    console.log(target);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "tester";
