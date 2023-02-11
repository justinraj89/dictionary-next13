import axios from "axios";
//===========================

const fetchSearchWord = async (search) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
  try {
    const response = await axios.get(url);
    const wordData = response.data[0];
    return wordData;
  } catch (err) {
    throw new Error
  }
};

export default fetchSearchWord;
