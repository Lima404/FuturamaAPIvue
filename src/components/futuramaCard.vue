<template>
  <div class="card">
    <img :src="character.image" :alt="character.name" />
    <h2>{{ character.name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
  
  created() {
    // console.log("Recebendo personagem no FuturamaCard:", this.character);
  }
};
</script>

<style scoped>
.card {
  width: 150px;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.card img {
  width: 150px;
  height: 150px;
}

.card h2 {
  font-size: 1rem;
  font-weight: 900;
  color: purple;
  margin: 0;
  text-align: start;
}
</style>
