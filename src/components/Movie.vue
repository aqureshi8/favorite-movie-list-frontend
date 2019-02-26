<template>
  <div class="movie">
    <h2>{{ title }}</h2>
    <img class="poster" :src="poster" v-if="poster != 'N/A' && poster != null"/>
    <img class="poster" src="@/assets/posterPlaceholder.png" v-if="poster == 'N/A' || poster == null"/>
    <p>Released {{ year }}</p>
    <img class="rating" v-for="n in rating" src="@/assets/star.png" :id="'star'+n"/>
    <p>{{comment}}</p>
  </div>
</template>

<script>
  import FavoriteMoviesApi from '@/api/FavoriteMovies'
  export default {
    name: 'Movie',
    props: {
      title: String,
      year: Number,
      rating: Number,
      plot: String,
      comment: String,
      poster: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rating {
    width: 25px;
    height: 25px;
    margin: 2px;
  }
  p {
    margin: 10px;
  }
  .movie {
    left: 0px;
    right: 0px;
    max-width: 200px;
  }
  .poster {
    width: 150px;
  }
</style>
