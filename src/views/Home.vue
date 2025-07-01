<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="film in this.topRatedFilms">
        <template v-slot:img>
          <img
            @click="directDetails(film.id)"
            style="cursor: pointer"
            class="d-block img-fluid-grow w-100 img-responsive"
            v-bind:src="film.resolutions.original"
            :key="film.id"
            alt="image slot"
          />
          <h1 class="filmTitleStyle">{{ film.title }}</h1>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <category-slider title="Adventure Movies" category="Adventure" />
    <category-slider title="Comedy Movies" category="Comedy" />
    <category-slider title="Romantic Movies" category="Romance" />
  </div>
</template>

<script>
import CategorySlider from "@/components/CategorySlider.vue";

export default {
  name: "Home",
  components: {
    CategorySlider,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      moviesRatingAverage: [],
      bannersFound: [],
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    directDetails(id) {
      this.$router.push("/movieDetails/" + id);
    },

    getMoviesRatingAverage() {
      return this.moviesRatingAverage.push(
        this.$store.getters["filmsStore/getFilms"].filter(
          (item) => item.rating.average === 7.4
        )
      );
    },

    getMoviesAllData() {
      this.getMoviesRatingAverage();
      console.log("MoviesRatingAverage-->>", this.MoviesRatingAverage);

      for (const x of this.moviesRatingAverage) {
        for (const i of x) {
          //  console.log('MoviesRatingAverage-->', i.id)

          fetch(`https://api.tvmaze.com/shows/${i.id}/images`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const moviesAllData = data;
              console.log("MoviesAllData", moviesAllData);

              const moviesDataBanners = [];
              for (const x of moviesAllData) {
                if (x.type === "banner") {
                  moviesDataBanners.push(x);
                }
              }

              console.log("MoviesDataBanners-->", moviesDataBanners);
              const firstBannerOccurance = moviesDataBanners.find(function (
                item
              ) {
                return item.type === "banner";
              });

              console.log("firstBannerOccurance--->", firstBannerOccurance);

              this.bannersFound.push(firstBannerOccurance);
              console.log("bannersFound-->>", this.bannersFound);
            })

            .catch(function (error) {
              console.log(error);
            });
        }
      }
      return;
    },

    getMoviesDataBanners() {
      this.getMoviesAllData();
      return;
    },
  },

  computed: {
    topRatedFilms() {
      this.getMoviesDataBanners();
      return;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.img-responsive {
  max-width: 100%;
  min-height: 115px;
}
.filmTitleStyle {
  position: absolute;
  top: 7rem;
  left: 13rem;
}

@media only screen and (max-width: 992px) {
  .filmTitleStyle {
    font-size: 1rem;
    top: 2rem;
    left: 4rem;
  }
}
</style>