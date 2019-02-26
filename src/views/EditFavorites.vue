<template>
  <div class="editFavorites">
    <button v-on:click="login" class='loginLogout' v-if="!username">Login</button>
    <button v-on:click="logout" class='loginLogout' v-if="username">Logout</button>
    <div class='main' :style="'width: ' + mainWidth">
      <Movie :title="title" :year="year" :poster="poster" />
      <div>
        <img class="rating" v-on:click="setRating(n)" v-for="n in rating" src="@/assets/star.png" :id="'star'+n" />
        <img class="rating" v-on:click="setRating(rating+n)" v-for="n in 5-rating" src="@/assets/emptyStar.png" :id="'star'+n" />
        <br/>
        <input class="comment" type="text" name="comment" v-model="comment" placeholder="Write comment here..." />
      </div>
      <button class="add" v-on:click="add">Add</button>
    </div>
    <FavoriteMovies class="favoriteMovies" v-if="username" :username='username'/>
  </div>
</template>

<script>
// @ is an alias to /src
import FavoriteMovies from '@/components/FavoriteMovies.vue'
import Movie from '@/components/Movie.vue'
import FavoriteMoviesApi from '@/api/FavoriteMovies'

export default {
  name: 'editFavorites',
  components: {
    FavoriteMovies,
    Movie
  },
  data () {
    return {
      username: this.$route.query.username,
      mainWidth: '100%',
      mId: this.$route.query.mId,
      title: '',
      year: 0,
      poster: '',
      rating: 0,
      comment: ''
    }
  },

  created () {
    if (this.username) {
      this.mainWidth = '80%';
    }

    if (!this.rating) {
      this.rating = 1;
    }

    if(!this.comment) {
      this.comment = '';
    }
    
    FavoriteMoviesApi.getMovie(this.mId)
      .then(movie => {
        this.title = movie.data.Title;
        this.year = parseInt(movie.data.Year);
        this.poster = movie.data.Poster;
        })
        .catch(error => console.log(error));
  },

  methods: {
    logout: function() {
      this.username = "";
      this.mainWidth = '100%';
    },

    login: function() {
      this.username = "tester";
      this.mainWidth = "80%"
    },

    add: function () {
      FavoriteMoviesApi.addFavorite(this.username, this.title, this.year, this.poster, this.rating, this.comment)
      .then(resp => {
        this.$router.push({
          name: 'home',
          params: {
            username: this.username
          }
        })
      })
      .catch(error => console.log(error))
    },

    setRating: function(newRating) {
      this.rating = newRating;
    }
  }
}
</script>

<style scoped>
.rating {
  width: 25px;
  height: 25px;
  margin: 2px;
}
.home {
	height: 100%;
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
 .main {
  height: 100%;
  max-height: 100%;
  overflow: scroll;
  z-index: 0;
  position: absolute;
}
.add {
  font-size: 18pt;
  border-style: none;
}
.comment {
  margin: 2%;
  font-size: 14pt;
  width: 400px;
}
</style>