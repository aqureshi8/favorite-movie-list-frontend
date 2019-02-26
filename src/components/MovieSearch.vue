<template>
  <div class="movieSearch">
    <h1 class="pageHeader">Movie Search</h1>
    <form class="searchForm" method="GET" v-on:submit="search" onsubmit="return false;">
      <input type="text" name="search" v-model="searchQuery" />
    </form>
    <div class="movie" v-for="movie in searchResults" v-bind:key="movie.imdbID">
    	<Movie v-on:click.native="editMovie(movie.imdbID)" :title="movie.Title" :year="parseInt(movie.Year)" :poster="movie.Poster"/>
    </div>
  </div>
</template>
<script>
import FavoriteMoviesApi from '@/api/FavoriteMovies'
import Movie from '@/components/Movie.vue'

export default {
  name: 'MovieSearch',
  props: {
  },
  components: {
    Movie
  },

  data () {
    return {
      searchQuery: '',
      searchResults: ''
    }
  },

  created () {
    if(this.$route.query.search) {
      this.searchQuery = this.$route.query.search;
    }

    if(this.searchQuery) {
      FavoriteMoviesApi.searchMovies(this.searchQuery)
      .then(movies => {
        this.searchResults = movies.data.Search
        })
        .catch(error => console.log(error))
    }
  },

  methods: {
    editMovie: function(movieId) {
      this.$emit('clicked',
      {
        mId: movieId
      });
    },

    search: function() {
      FavoriteMoviesApi.searchMovies(this.searchQuery)
        .then(movies => {
          this.searchResults = movies.data.Search
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false
        });
    }
  }
}
</script>
<style>
	.pageHeader {
		text-align: center;
	}
	.searchForm {
		text-align: center;
	}
	.searchForm input {
		height: 5vh;
		font-size: 18pt;
		border-radius: 10px;
		padding-left: 1%;
	}
  .movieSearch {
    float: left;
    width: 100%;
    position: absolute;
    text-align: left;
  }
  .movie {
    display: inline-block;
    text-align: center;
    margin: 2%;
  }
</style>