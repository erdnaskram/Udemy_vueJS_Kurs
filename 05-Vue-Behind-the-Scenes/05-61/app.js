const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


const data = {
  message: 'Hello',
  longMessage: 'Hello You'
};

const handler ={
  set(target, key, value){
    console.log(target);
    console.log(key);
    console.log(value);
    if(key = 'message'){
      target.longMessage = value + ' World'
    }
    target.message = value;
    console.log(target);
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'tester';