<template>
    <ul>
      <learning-resource-item v-for="course in courses" :key="course.id" :id="course.id" :title="course.title"
        :description="course.description" :link="course.link">
      </learning-resource-item>
    </ul>
</template>

<script>
import LearningResourceItem from './LearningResourceItem.vue';

export default {
    components: {
        LearningResourceItem
    },
    inject: {
        courses: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
</style>