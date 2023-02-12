import axios from "axios";
//==========================

const API = {

  fetchSearchWord: async (search) => {
    try {
      const res = await axios.get(
        `https://wordsapiv1.p.rapidapi.com/words/${search}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "e1e1943383mshed83535e7e6f9b9p169243jsn615910eeded7",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },

  //----------------------------------------------------------------
  fetchSynonyms: async (word) => {
    try {
      const res = await axios.get(
        `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
        {
          headers: {
            "X-RapidAPI-Key":
              "e1e1943383mshed83535e7e6f9b9p169243jsn615910eeded7",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        }
      );               
      return res.data.synonyms;
    } catch (err) {
      console.log(err);
    }
  },
};

export default API;
