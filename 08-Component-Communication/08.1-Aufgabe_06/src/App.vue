<template>
    <section>
        <active-user :user="activeUser" class="activeUser" />
        <user-data @save-data="saveData" class="userData"/>
    </section>
</template>
<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default {
    name: 'App',
    components: {
        ActiveUser,
        UserData
    },
    data() {
        return {
            activeUser: {
                name: '',
                age: 0
            }
        }
    },
    methods: {
        saveData(userData) {
            this.activeUser = userData
        }
    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.activeUser , .userData {
    margin: 10px 0;
    width: 100%;
    max-width: 400px;
}

.us {
    margin-bottom: 10px;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}
</style>