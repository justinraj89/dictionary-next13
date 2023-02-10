import axios from "axios";
//===========================

const fetchSearchWord = async (search) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
  try {
    const response = await axios.get(url);
    const wordData = response.data;
    console.log(wordData[0].word,'WORD DATA')
    return wordData;
  } catch (err) {
    console.log(err);
  }
};

export default fetchSearchWord;
