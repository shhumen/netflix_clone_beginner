const API_KEY = "31db78ed4fd8551176f9feee26a88816";

const requests = {
    fetchHistoryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests

