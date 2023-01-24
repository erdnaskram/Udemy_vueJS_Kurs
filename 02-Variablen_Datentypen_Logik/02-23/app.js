const app = Vue.createApp({
  data() {
    return {
      counter: 54,
    };
  },
  methods: {
    add(num){
      this.counter += num;
    },
    remove(num){
      this.counter -= num;
    }
  }
});

app.mount('#events');
