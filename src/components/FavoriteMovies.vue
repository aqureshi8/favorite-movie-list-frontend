<template>
  <div class="favoriteMovies">
    <p class="loading" v-if="loading">loading</p>
    <h1>Favorited movies</h1>
    <div class="movieList">
      <div v-for="movie in favoriteMovies">
        <button v-on:click="removeMovie(movie.title, movie.year)" class="removeButton">X</button>
        <Movie class='center' :title="movie.title" :year="movie.year" :rating="movie.rating" :poster="movie.poster" :comment="movie.comment" />
      </div>
    </div>
  </div>
</template>

<script>
  import FavoriteMoviesApi from '@/api/FavoriteMovies'
  import Movie from '@/components/Movie.vue'
  export default {
    name: 'FavoriteMovies',
    components: {
      Movie
    },
    props: {
      username: String
    },

    data () {
      return {
        loading: true,
        favoriteMovies: []
      }
    },

    created () {
      this.getFavoriteMovies();
    },

    methods: {
      getFavoriteMovies: function() {
        FavoriteMoviesApi.getFavoriteMovies(this.username)
        .then(movies => {
          this.favoriteMovies = movies.data[0].movies;
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.loading = false;
        })
      },

      removeMovie: function (movieTitle, movieYear) {
        FavoriteMoviesApi.removeMovie(this.username, movieTitle, movieYear)
        .then(resp => {
          this.getFavoriteMovies();
        })
        .catch(error => console.log(error));
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.favoriteMovies {
  right: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  max-height: 100%;
}
.movieList {
  overflow: auto;
  height: 85%;
}
.center {
}
.removeButton {
  float: right;
  font-size: 18pt;
  border-style: none;
}
</style>
