import axios from "axios";

const API_URL = "https://futuramaapi.com/api/characters/?size=9";

export const getCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Personagens:", response.data.items);
    return response.data.items;
  } catch (error) {
    console.error("Erro ao buscar os personagens:", error);
    return [];
  }
};


