
// import antraege from './data/antraege.json' assert {type: 'json'};
// console.log(antraege);


//? mit vue
Vue.createApp({
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
}).mount("#app");




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