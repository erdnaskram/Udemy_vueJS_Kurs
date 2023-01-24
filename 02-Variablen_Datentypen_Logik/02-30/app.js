const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value){
      if(value > 50)
      setTimeout(() => {
        this.counter = 0;
      }, 200);
    },
    // name(value) {
    //   if (this.name != "")
    //     this.fullName = value + " " + this.lastName;
    //     else
    //       this.fullName = ""
    // },
    // lastName(value) {
    //   if (this.lastName != "")
    //     this.fullName = this.name + " " + value;
    //     else
    //       this.fullName = ""
    // },
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
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
