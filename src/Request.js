const API_KEY = "57b2b6edab44d61e74d3a2a60a4a58cf"; // need to acces themoviedb database
const requests = {
    fetchTreding:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginals:`/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en_US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumenttaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default requests