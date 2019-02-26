import axios from 'axios'

export default {
	getFavoriteMovies (user) {
		return axios.post('/api/favorites', {username: user})
	},

	searchMovies (movieTitle) {
		return axios.post('/api/search', {title: movieTitle})
	},

	addFavorite(user, movieTitle, movieYear, moviePoster, movieRating, movieComment) {
		return axios.post('/api/addFavorite', {
			username: user, 
			title: movieTitle,
			year: movieYear,
			poster: moviePoster,
			rating: movieRating,
			comment: movieComment
		});
	},

	getMovie(movieId) {
		return axios.post('/api/getMovie', {id: movieId});
	},

	removeMovie(user, movieTitle, movieYear) {
		return axios.post('/api/removeMovie', {username: user, title: movieTitle, year: movieYear})
	}
}