<template>
  <div class="app">
    <h1>Futurama Characters</h1>
    <p v-if="characters.length === 0">Carregando personagens...</p>
    
    <div class="cards-container">
      <FuturamaCard 
        v-for="character in characters" 
        :key="character.id" 
        :character="character"
      />
    </div>
  </div>
</template>

<script>
import { getCharacters } from "./http/index";
import FuturamaCard from "./components/FuturamaCard.vue";

export default {
  components: {
    FuturamaCard,
  },
  
  data() {
    return {
      characters: [],
    };
  },

  async created() {
    try {
      const data = await getCharacters();
      this.characters = data;
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  },
};
</script>

<style scoped>
.app {
  text-align: center;
  font-family: Arial, sans-serif;
}

h1{
  font-size: 1.8rem;
  font-weight: 900;
  color: purple;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  grid-template-rows: repeat(3, auto);  /* 3 linhas */
  gap: 20px;
  padding: 20px;
}
</style>
