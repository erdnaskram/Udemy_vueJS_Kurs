<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="buttonClick(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
  methods: {
    buttonClick(id) {
      console.log(this.selectTopic(id));
    },
  },
};
</script>