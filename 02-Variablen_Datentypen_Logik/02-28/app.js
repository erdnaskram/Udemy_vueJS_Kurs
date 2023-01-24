const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullName(){
      console.log("Runn again");
      if(this.name != "")
        return this.name + ' ' + 'Schwarzmüller';
        else
          return ""
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name="";
    },
  }
});

app.mount('#events');
