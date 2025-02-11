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
    console.log("Recebendo personagem no FuturamaCard:", this.character);
  }
};
</script>

<style scoped>
.card {
  width: 250px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: #f8f8f8;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.card h2 {
  font-size: 1.2rem;
  margin: 10px 0;
}
</style>
