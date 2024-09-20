<template>
  <section>
    <the-header title="RememberMe"></the-header>
    <stored-resources :courses="courses" />
  </section>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue'
export default {
  components: {
    StoredResources
  },
  data() {
    return {
      courses: [
        { id: "oficial-guide", title: "Official Guide", description: "The official guide to the learning resource app", link: "https://vuejs.org" },
        { id: "vue-mastery", title: "Vue Mastery", description: "The official guide to the learning resource app", link: "https://vue-mastery.com" },
        { id: "vue-school", title: "Vue School", description: "The official guide to the learning resource app", link: "https://vue-school.com" },
        { id: "google", title: "Google", description: "The official guide to the learning resource app", link: "https://google.com" },
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>