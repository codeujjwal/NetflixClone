const API_KEY = "3e68899b482a72214fa41605e9639780";

const requests = {
  fetchtrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchnetflixorignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchtoprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchactionmovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchcomedymovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchromancemovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchhorrormovies: `/discover/movie?api_key=${API_KEY}&with_genres10749`,
  fetchdocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
