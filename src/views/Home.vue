<template>
  <div class="game-list">
    <div class="card-container">
      <div v-for="game in games" :key="game.id" class="card" @click="redirect(game.id)">
        <img :src="game.background_image" alt="Game Image" class="card-image">
        <div class="card-content">
          <h3 class="card-title">{{ game.name }}</h3>
          <p class="card-description">{{ game.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      games: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('https://api.rawg.io/api/games', {
        params: {
          key: 'be0621a7b83e47fd9ef8e34cb2a574f2',
          dates: '2019-09-01,2019-09-30',
          platforms: '18,1,7'
        }
      })
        .then(response => {
          this.games = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },
    redirect(gameId) {
      this.$router.push({ name: 'game-details', params: { gameId: gameId } });
    },
  },
};
</script>

<style scoped>
.game-list {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 80px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 300px;
  margin-bottom: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Agregamos estilo de cursor al hacer hover */
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  line-height: 1.5;
}
</style>


