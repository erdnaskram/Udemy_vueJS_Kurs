const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(){
        console.log(this.counter)
        const that = this;
        setTimeout(() => {
            that.counter = 0;
        }, 5000);
    }
  },
  computed: {
    result() {
      switch (true) {
        case this.counter < 37:
          return "Not there yet";
        case this.counter === 37:
          return this.counter;
        case this.counter > 37:
          return "Too much!";
      }
    },
  },
  methods: {
    add(number) {
      this.counter += number;
    },
  },
});
app.mount("#app");
