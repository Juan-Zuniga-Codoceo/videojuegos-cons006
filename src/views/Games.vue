<template>
<div class="margin">
  <div class="game-details">
    <h2 class="title">Detalles del juego:</h2>
    <h3 class="subtitle">{{ game.name }}</h3>
    <img :src="game.background_image" :alt="game.name" class="game-image" v-if="game.background_image">
    <p class="release-year">Año de lanzamiento: {{ game.released }}</p>
    <p class="description">Descripción: {{ game.description_raw }}</p>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GameDetailsView',
  data() {
    return {
      game: null,
    };
  },
  created() {
    this.getGameData();
  },
  methods: {
    getGameData() {
      const gameId = this.$route.params.gameId;
      axios.get(`https://api.rawg.io/api/games/${gameId}`, {
        params: {
          key: 'be0621a7b83e47fd9ef8e34cb2a574f2'
        }
      })
        .then(response => {
          this.game = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.margin{
    margin-top: 100px;
}
.game-details {
  margin-top: 80px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.release-year {
  margin-bottom: 8px;
}

.description {
  margin-top: 20px; /* Ajusta el valor según sea necesario */
  margin-bottom: 20px;
}
</style>



