import axios from "axios";

export const fetchMovies = async (url) => {
  try {
    let { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
