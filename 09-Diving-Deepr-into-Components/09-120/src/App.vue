<template>
  <div>
    <TheHeader/>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"/>
    <manage-goals v-if="selectedComponent === 'manage-goals'"/> -->
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: 'active-goals',
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>