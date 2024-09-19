<template>
  <ul>
    <li v-for="course in courses" :key="course.id">{{ course.title }}</li>
  </ul>
</template>

<script>
export default {
    data()  {
        return {
            courses: [
                {id: "oficial-guide", title: "Official Guide", description: "The official guide to the learning resource app", link:"https://vuejs.org"},
                {id: "vue-mastery", title: "Vue Mastery", description: "The official guide to the learning resource app", link:"https://vue-mastery.com"},
                {id: "vue-school", title: "Vue School", description: "The official guide to the learning resource app", link:"https://vue-school.com"},
                {id: "google", title: "Google", description: "The official guide to the learning resource app", link:"https://google.com"},
            ]
        }
    }
}
</script>

<style>

</style>