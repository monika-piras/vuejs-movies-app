<template>
  <div>
    <b-carousel
      v-if="this.bannersFound && this.bannersFound.length > 0"
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
      <b-carousel-slide v-for="film in this.bannersFound">
        <template v-slot:img>
          <img
            class="d-block img-fluid-grow w-100 img-responsive"
            v-bind:src="film.resolutions.original.url"
            :key="film.id"
            alt="image slot"
          />
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
  mounted() {
  //  console.log("mounted");
    this.getMoviesAllData();
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    getMoviesRatingAverage() {
      return this.moviesRatingAverage.push(
        this.$store.getters["filmsStore/getFilms"]
          .filter((item) => item.rating.average >= 8)
          .slice(0, 6)
      );
    },

    getMoviesAllData() {
      this.getMoviesRatingAverage();
      console.log("MoviesRatingAverage-->>", this.moviesRatingAverage);

      for (const x of this.moviesRatingAverage) {
        for (const i of x) {
          //  console.log('MoviesRatingAverage-->', i.id)

          fetch(`https://api.tvmaze.com/shows/${i.id}/images`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const moviesAllData = data;
              //  console.log("MoviesAllData", moviesAllData);
              const moviesDataBanners = [];
              for (const x of moviesAllData) {
                if (x.type === "banner") {
                  moviesDataBanners.push(x);
                }
              }
              //  console.log("MoviesDataBanners-->", moviesDataBanners);
              const firstBannerOccurance = moviesDataBanners.find(function (
                item
              ) {
                return item.type === "banner";
              });

              //  console.log("firstBannerOccurance--->", firstBannerOccurance);
              if (firstBannerOccurance) {
                this.bannersFound.push(firstBannerOccurance);
              }
              //  console.log("bannersFound-->>", this.bannersFound);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
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
  height: 400px;
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