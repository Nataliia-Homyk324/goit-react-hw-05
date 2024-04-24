import axios from "axios";
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjM5OTIwNWVkZDNkZDI1MDI1NjBmMTE1NjZmMGRkYiIsInN1YiI6IjY2MjM5N2Y1MmRkYTg5MDE4N2UwYTUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YqSBTQa8ETMPXoF18r5TyD1xMFNihscfnC-lwqvmVqw';

export const getFilmsTrendingAccess = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
    const params = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    }
    try {
        const respons = await axios.get(url, params);
        // console.log(respons)
        return respons.data.results;
    } catch (error) {
        console.log(error.message);
    }
}

export const getFilmsDetails = async (id, codeWord = '') => {
    const url = `https://api.themoviedb.org/3/movie/${id}${codeWord}?language=en-US`;
    const params = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    }
    try {
        const respons = await axios.get(url, params);
        console.log(respons.data)

        return respons.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const getFilmsSearch = async (query, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
    const params = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    }
    try {
        const respons = await axios.get(url, params);
        console.log(respons)
        return respons.data;

    } catch (error) {
        console.log(error.message);
    }
}

// Trending movies  https://api.themoviedb.org/3/trending/movie/day?language=en-US
// Search movie     https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1

// Movie details    https://api.themoviedb.org/3/movie/movie_id?language=en-US
// Movie reviews    https://api.themoviedb.org/3/movie/792307/reviews?language=en-US&page=1
// Movie credits    https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US