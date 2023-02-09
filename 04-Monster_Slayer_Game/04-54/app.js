function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      specialAttackCoolDown: 0,
      winner: null,
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
      console.log(this.playerBarStyles);
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
      console.log(this.monsterBarStyles);
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.specialAttackCoolDown !== 0;
    },
  },
  methods: {
    increaseRound() {
      this.currentRound++;
      if (this.specialAttackCoolDown > 0) this.specialAttackCoolDown--;
    },
    attackMonster() {
      this.increaseRound();
      const attackValue = getRandomValue(5, 12);

      if (this.monsterHealth - attackValue < 0)
        this.monsterHealth = 0;
      else this.monsterHealth -= attackValue;

      console.log(this.monsterHealth);
      this.attackPlayer();
    },
    specialAttackMonster() {
      this.increaseRound();
      this.specialAttackCoolDown = getRandomValue(2, 5);
      const attackValue = getRandomValue(10, 25);

      if (this.monsterHealth - attackValue < 0)
        this.monsterHealth = 0;
      else this.monsterHealth -= attackValue;

      this.attackPlayer();
    },
    healPlayer() {
      this.increaseRound();
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue <= 100) this.playerHealth += healValue;
      else this.playerHealth = 100;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);

      if (this.playerHealth - attackValue < 0)
        this.playerHealth = 0;
      else this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
