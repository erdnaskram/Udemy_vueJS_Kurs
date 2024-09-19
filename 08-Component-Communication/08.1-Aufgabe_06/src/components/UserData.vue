<template>
    <section>
        <h1>Edit User</h1>
        <input type="text" v-model="name" />
        <input type="number" v-model="age" />
        <button @click="saveData">Save</button>
    </section>
</template>
<script>
export default {
    name: 'UserData',
    data() {
        return {
            name: '',
            age: 0
        }
    },
    methods: {
        saveData() {
            if (!this.name) {
            alert('Bitte geben Sie einen Namen ein.');
            return;
            }
            if (this.age < 18 || this.age > 99) {
            alert('Das Alter muss zwischen 18 und 99 Jahren liegen.');
            return;
            }
            const userData = {
            name: this.name,
            age: this.age
            }
            this.$emit('save-data', userData)
        }
    }
}
</script>