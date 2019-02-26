<template>
  <div class="home">
    <button v-on:click="login" class='loginLogout' v-if="!username">Login</button>
    <button v-on:click="logout" class='loginLogout' v-if="username">Logout</button>
    <MovieSearch @clicked="editMovie" :style="'width: ' + searchWidth" class="movieSearch"/>
    <FavoriteMovies class="favoriteMovies" v-if="username" :username='username'/>
  </div>
</template>

<script>
// @ is an alias to /src
import FavoriteMovies from '@/components/FavoriteMovies.vue'
import MovieSearch from '@/components/MovieSearch.vue'
import FavoriteMoviesApi from '@/api/FavoriteMovies'

export default {
  name: 'home',
  components: {
    FavoriteMovies,
    MovieSearch
  },
  data () {
    return {
      username: '',
      searchWidth: '100%'
    }
  },

  created () {
    this.username = this.$route.params.username;

    if (this.username) {
      this.searchWidth = '80%';
    }
  },

  methods: {
    logout: function() {
      this.username = "";
      this.searchWidth = '100%';
    },

    login: function() {
      this.username = "tester";
      this.searchWidth = "80%";
    },

    editMovie: function(movieParams) {
      this.$router.push("editFavorites?mId=" + movieParams.mId + "&username=" + this.username);
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
}
.movieSearch {
  height: 100%;
  max-height: 100%;
  overflow: scroll;
  z-index: 0;
}
.favoriteMovies {
  border-left: solid;
  width: 20%;
  height: 100%;
}
.loginLogout {
  left: 0px;
  margin: 2%;
  position: absolute;
  border-style: none;
  font-size: 14pt;
  z-index: 1;
}
</style>