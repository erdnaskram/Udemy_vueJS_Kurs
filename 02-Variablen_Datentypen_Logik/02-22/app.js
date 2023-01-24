const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(){
      this.counter ++;
    },
    remove(){
      this.counter --;
    }
  }
});rr

app.mount('#events');
