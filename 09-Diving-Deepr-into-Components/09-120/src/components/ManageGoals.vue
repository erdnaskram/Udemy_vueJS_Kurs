<template>
    <section>
        <h2>Manage Goals</h2>
        <input v-model="enteredValue" type="text" />
        <button @click="addGoal">Add Goal</button>
        <teleport to="body">
            <error-alert v-if="inputIsInValid">
                <h2>Invalid Input</h2>
                <p>Please enter a valid goal!</p>
                <button @click="confirmError()">Close</button>
            </error-alert>
        </teleport>
    </section>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: { ErrorAlert },
    data() {
        return {
            enteredValue: '',
            inputIsInValid: false,
        };
    },
    methods: {
        addGoal() {
            if (this.enteredValue === "") {
                this.inputIsInValid = true;
            }
        },
        confirmError() {
            this.inputIsInValid = false;
        },
    },

}
</script>

<style></style>