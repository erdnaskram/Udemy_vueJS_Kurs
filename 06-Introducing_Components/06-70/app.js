const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "john",
          name: "John Doe",
          phone: "+49 151 12345678",
          email: "john.doe@gmail.com",
        },
        {
          id: "jane",
          name: "Jane Smith",
          phone: "+49 157 23456789",
          email: "jane.smith@yahoo.com",
        },
        {
          id: "bob",
          name: "Bob Johnson",
          phone: "+49 160 34567890",
          email: "bob.johnson@hotmail.com",
        },
        {
          id: "susan",
          name: "Susan Lee",
          phone: "+49 162 45678901",
          email: "susan.lee@outlook.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
