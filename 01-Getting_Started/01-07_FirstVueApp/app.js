
// Importiere Bootstrap und BootstrapVue

import { createApp } from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

// Importiere Bootstrap und BootstrapVue CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//? mit vue
const app = createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
            // antraege: antraege,
            message: "hello world"
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
})


// Verwende BootstrapVue
app.use(BootstrapVue);

// Mounte deine Vue-Anwendung
app.mount("#app");



//! ohne vue

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);