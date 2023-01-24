const app = Vue.createApp({
    data() {
      return {
        output1 : '',
        output2 : '',
        confirmedOutput2: ''
      };
    },
    methods: {
        showAlert(){
            alert("this is an Assignment!");
        },
        outputFirstInput(event){
            this.output1 = event.target.value;
        },
        saveSecondInput(event){
            this.output2 = event.target.value;
        },
        confirmFirstInput(){
            this.confirmedOutput2 = this.output2;
        }
    }
});

app.mount('#assignment');
