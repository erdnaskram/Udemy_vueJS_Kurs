const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    counter(value){
      const that = this;
      if(value > 50)
      setTimeout(() => {
        that.counter = 0;
      }, 200);
    },
  },
  computed: {
    fullName(){
      console.log("Run again");
      if(this.name != "" && this.lastName !="")
        return this.name + ' ' + this.lastName;
        else
          return ""
    }
  },
  methods: {
    outputFullName() {
      console.log("Run again");
      if (this.name != "") return this.name + " " + "Schwarzmüller";
      else return "";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
