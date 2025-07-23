<template>
  <div>
    <h4 class="font-sizeh4-mobile style-h4" v-if="title">
      {{ title }}
      <router-link
        :to="{ path: '/categories/' + this.category }"
        class="router-link-style"
        >Explore</router-link
      >
    </h4>

    <div class="scroll-parent">
      <button
        class="move-left"
        @click="less()"
        v-bind:class="{ showButton: isButtonLeftActive }"
      >
        <b-icon-chevron-left></b-icon-chevron-left>
      </button>
      <ul class="scrollable padding-mobile">
        <li v-for="film in this.filmsToDisplay" class="relative">
          <star
            class="star"
            v-bind:class="{ isPreferred: film.prefer }"
            v-model="film.prefer"
          />
          <img
            v-bind:src="film.image.medium"
            @click="directDetails(film.id)"
            alt="Image Film"
          />
        </li>
      </ul>
      <button class="move-right" @click="more()">
        <b-icon-chevron-right></b-icon-chevron-right>
      </button>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star.vue";
export default {
  name: "CategorySlider",
  components: {
    Star,
  },
  props: {
    title: String,
    category: String,
  },
  data() {
    return {
      isButtonLeftActive: false,
      filmList: [],
      filmsToDisplay: [],
    };
  },
  created: function () {
    console.log("ON-CREATED FilmList ");
    this.filmList = this.$store.getters["filmsStore/getFilms"];
    this.updateListToDisplay();

    this.$store.watch(
      (state) => {
        return this.$store.getters["filmsStore/getFilms"];
      },
      (newValue, oldValue) => {
        //something changed do something
        this.filmList = newValue;
        this.updateListToDisplay();
      },
      //Optional Deep if you need it
      {
        deep: true,
      }
    );
  },
  methods: {
    more() {
      this.$el.querySelector(".scrollable").scrollLeft += +300;
      if (this.$el.querySelector(".scrollable").scrollLeft != 0) {
        this.isButtonLeftActive = true;
      }
    },
    
    less() {
      this.$el.querySelector(".scrollable").scrollLeft += -300;
    },

    updateListToDisplay() {
      if (this.category) {
        this.filmsToDisplay = this.filmList.filter((item) =>
          item.genres.includes(this.category)
        );
      }
    },

    directDetails(id) {
      this.$router.push("/movieDetails/" + id);
    },
  },
};
</script>
<style scoped>
.style-h4 {
  margin: 20px;
  text-align: left;
}
.router-link-style {
  margin-left: 20px;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.5;
}
.scroll-parent {
  position: relative;
}

.scroll-parent ul {
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  list-style: none;
}

.scroll-parent li {
  margin: 0 0.3rem;
}

.scroll-parent li:hover {
  cursor: pointer;
  position: relative;
}

.relative {
  position: relative;
}

.scroll-parent li:hover .star {
  opacity: 1;
}

.star {
  position: absolute;
  top: 10px;
  right: 15px;
  opacity: 0;
  background-color: rgba(148, 148, 184, 0.8);
  z-index: 2;
}

.isPreferred {
  opacity: 1 !important;
}

.scroll-parent li > img {
  margin: 0;
  height: 300px;
  width: 200px;
}

.scroll-parent:first-child {
  margin-left: 50px;
}

.move-right {
  position: absolute;
  height: 100%;
  width: 50px;
  top: 0;
  right: 0;
  border: none;
  background-color: #e1e1ea7a;
  z-index: 2;
}

.move-left {
  visibility: hidden;
  position: absolute;
  height: 100%;
  width: 50px;
  top: 0;
  left: 0;
  border: none;
  background-color: #e1e1ea7a;
  z-index: 2;
}

.showButton {
  visibility: visible;
}

button {
  outline: none !important;
}

@media only screen and (max-width: 576px) {
  .font-sizeh4-mobile {
    font-size: 1.2rem;
    margin: 20px 10px;
  }
  .scroll-parent li > img {
    height: 260px;
    width: 160px;
  }
  .padding-mobile {
    padding: 0 10px;
  }
}
</style>