const app = Vue.createApp({
  data() {
    return {
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
  methods: {},
});

app.component("friend-contact", {
  template: `
    <li :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "susan",
        name: "Susan Lee",
        phone: "+49 162 45678901",
        email: "susan.lee@outlook.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
