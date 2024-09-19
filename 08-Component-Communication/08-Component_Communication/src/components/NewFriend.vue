<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name"/>
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="text" id="phone" v-model="phone"/>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email"/>
    </div>
    <div>
      <label for="favorite">Is Favorite</label>
      <input type="checkbox" id="favorite" v-model="isFavorite"/>
    </div>
    <div>
      <button type="submit" >Add Friend</button>
    </div>
  </form>
</template>



<script>
export default {
  emits: {
    "add-contact": function (newFriend) {
      if (newFriend) {
        return true;
      }
      console.warn("No new friend provided!");
      return false;
    },
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      isFavorite: false,
    };
  },
  methods: {
    submitData() {
      const newFriend = {
        id: this.name.split(" ")[0].toLowerCase(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      };
      this.$emit("add-contact", newFriend);
    },
  },
};
</script>