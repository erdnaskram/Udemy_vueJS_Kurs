const app = Vue.createApp({
  data() {
    return {
      counter: 54,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert("submitted");
    },
    setName(event, name) {
      this.name = event.target.value + " " + name;
    },
    add(num){
      this.counter += num;
    },
    remove(num){
      this.counter -= num;
    }
  }
});

app.mount('#events');
