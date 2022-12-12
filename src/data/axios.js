import axios from "axios";

//base url to make request to the movie database

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default instance


// https://api.themoviedb.org/3/discover/tv?api_key=31db78ed4fd8551176f9feee26a88816z&with_networks=213

