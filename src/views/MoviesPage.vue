<template>
  <div class="movies-page">
    <h2 v-if="searchValue">RESULTS for "{{ searchValue }}":</h2>
    <h2 v-else-if="searchCategory">MOVIE CATEGORY: {{ searchCategory }}</h2>
    <h2 v-else-if="isFavourites">FAVOURITE MOVIES: {{ searchCategory }}</h2>
    <h2 v-else>ALL MOVIES</h2>

    <movie-list-serp
      v-bind:mySearch="searchValue"
      v-bind:isPrefer="isFavourites"
      v-bind:myCategory="searchCategory"
      style="margin-top: 100px"
    />

    <button class="add-button" @click="goToAddFilmPage()">
      <b-icon-plus class="icon-size"></b-icon-plus>
      <span class="add-movie-label">ADD MOVIE</span>
    </button>
  </div>
</template>

<script>
import MovieListSerp from "@/components/MovieListSerp.vue";

export default {
  name: "MoviesPage",
  components: {
    MovieListSerp,
  },
  props: ["isFavourites"],
  methods: {
    goToAddFilmPage() {
      this.$router.push("/addFilm");
    },
  },
  computed: {
    searchValue() {
      return this.$route.params.title;
    },

    searchCategory() {
      return this.$route.params.category;
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 30px;
  margin-bottom: 40px;
}
.add-button {
  font-size: 1.5rem;
  color: #fff;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 3;
  border: 0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #6f6c6fd6;
  background-color: red;
  outline: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-button:hover {
  background-color: #9c9a9c;
}
.add-button:active {
  background-color: #808280;
  box-shadow: 0 5px #777575;
  transform: translateY(4px);
}
.movies-page {
  min-height: 100%;
}

.icon-size {
  font-size: 3rem;
}

@media only screen and (max-width: 576px) {
  .add-button {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  .icon-size {
    font-size: 2rem;
  }
  .add-movie-label {
    display: none;
  }
}
</style>