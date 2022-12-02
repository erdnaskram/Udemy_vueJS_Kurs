const app = Vue.createApp( {
    data() {
        return {
            coursesGoal1: "Finish the course!",
            coursesGoal2: "Drink some beer!",
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.coursesGoal1;
            } else {
                return this.coursesGoal2;
            }
        }
    }
}).mount('#user-goal');