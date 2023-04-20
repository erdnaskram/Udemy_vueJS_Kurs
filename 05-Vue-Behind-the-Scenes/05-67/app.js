const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "wefwe",
      message: "Vue is wer!",
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
  beforeCreate(){
    console.log("BEFORE")
  },
  created(){
    console.log("Created")
  },
  beforeMount(){
    console.log("BEFOREmounted")
  },
  mounted(){
    console.log("mounted")
  },
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  beforeUnmount(){
    console.log("beforeUnmount")
  },
  unmounted(){
    console.log("unmounted")
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
  <input type="text" @input="saveInput2">
  <button @click="setText2">Set Text</button>
  <p>{{ message }}</p>
  t`,
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
