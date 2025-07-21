<template>
  <div class="container">
    <div
      v-if="filmDetail"
      class="dark movie-details bg"
      :style="{ backgroundImage: 'url(' + backgroundImageFunc(filmDetail) + ')' }"
    >
      <div class="row">
        <div class="col style-col">
          <h1>{{ filmDetail.name }}</h1>
          <p id="description">{{ filmDetail.summary.replace(/<\/?[^>]+(>|$)/g, "") }}</p>
          <div class="row runtime">
            <div class="col-2">RUNTIME:</div>
            <div class="col-10"> <span style="margin-left: 50px">{{ filmDetail.runtime }}min</span></div>
            <div class="col-2">CATEGORY:</div>
            <div class="col-10">
              <a
                href=""
                v-for="(item, index) in filmDetail.genres"
                :key="item"
                class="capitalize categories"
              >
                {{ item }}
                <span v-if="index + 1 < filmDetail.genres.length">, </span>
              </a>
            </div>
            <div class="col-2">LANGUAGE:</div>
            <div class="col-10 span-remove">
              <span style="margin-left: 50px"></span>{{ filmDetail.language }}
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <img
              v-bind:src="filmDetail.imageCustom ? filmDetail.imageCustom : filmDetail.image.medium"
              width="200"
              height=""
              class="mediaImg"
            />
          </div>
          <div class="buttonTrailer">
            <b-button btn btn-primary v-b-modal.modal-1>
              <b-icon-play-fill></b-icon-play-fill>TRAILER</b-button
            >
            <b-modal id="modal-1" hide-footer>
              <iframe
                width="100%"
                height="315"
                v-bind:src="filmDetail.trailerPath"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </b-modal>
          </div>
          <div class="buttonPreferiti">
            <button
              class="btn btn-primary display-style"
              v-on:click="toggleFavourite()"
            >
              <star v-model="filmDetail.prefer"></star>FAVOURITE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star.vue";
export default {
  name: "MovieDetailsPage",
  components: {
    Star,
  },

  methods: {
    goBack() {
      this.$router.push("../");
    },
    toggleFavourite() {
      this.filmDetail.prefer = !this.filmDetail.prefer;
    },
    backgroundImageFunc(filmDetail){
      return filmDetail.imageCustom ? filmDetail.imageCustom : filmDetail.image.medium;
    },
  },

  computed: {
    paramID() {
      return this.$route.params.id;
    },
    filmDetail() {
      return this.$store.getters["filmsStore/getFilmDetails"](this.paramID);
    }
  },
};
</script>

<style scoped>
@media only screen and (max-width: 992px) {
  .col {
    text-align: left !important;
  }
  .col-10 {
    margin-left: 0.05rem;
  }
  .col-10 a:first-child {
    margin-left: 0;
  }
  .col-10 span {
    margin-left: 0 !important;
  }
  .mediaImg {
    margin-top: 20px;
  }
}

.container {
  min-height: 100%;
  margin-top: 30px;
}

.style-col {
  text-align: justify;
}

.col-2,
.col-10 {
  margin-top: 20px;
}

.categories {
  text-decoration: none;
  color: #79b8f3;
  font-weight: bold;
}
a:first-child {
  margin-left: 50px;
}

#description {
  margin-top: 30px;
}

.runtime {
  margin-top: 30px;
  
}

.dark:before {
  background: linear-gradient(
    to right bottom,
    rgba(26, 26, 26, 0.8),
    rgba(89, 89, 89, 0.8)
  );

  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
.buttonTrailer,
.buttonPreferiti {
  margin-top: 30px;
}

.display-style {
  display: inline-flex;
}

.movie-details {
  padding: 3rem 2rem;
}

.bg {
  background-size: cover;
  height: 100%;
  background-position: top;
  position: relative;
  z-index: 0;
}

.capitalize {
  text-transform: capitalize;
}
</style>