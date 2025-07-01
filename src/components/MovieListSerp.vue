<template>
  <div>
    <ul class="scrollable no-padding" v-if="this.allFilms.length > 0">
      <li v-for="item in this.allFilms">
        <div class="image">
          <star
            class="star"
            v-bind:class="{ isPreferred: item.prefer }"
            v-model="item.prefer"
          />
          <img
            v-bind:src="item.imageCustom ? item.imageCustom : item.image.medium"
            alt="Image Film"
            @click="directDetails(item.id)"
          />
        </div>
      </li>
    </ul>
    <h4 class="no-item-found" v-else>No Item Found😢</h4>
  </div>
</template>

<script>
import Star from "@/components/Star.vue";
export default {
  name: "MovieListSerp",
  components: {
    Star
  },
  props: ["mySearch", "myCategory", "isPrefer"],
  methods: {
    directDetails(id) {
      this.$router.push("/movieDetails/" + id);
    },
  },
  computed: {
    allFilms() {
      if (this.mySearch) {
        return this.$store.getters["filmsStore/getFilms"].filter((item) =>
          item.name.toLowerCase().includes(this.mySearch.toLowerCase())
        );
      } else if (this.myCategory) {
        return this.$store.getters["filmsStore/getFilms"].filter((item) =>
          item.genres.includes(this.myCategory)
        );
      } else if (this.isPrefer) {
        return this.$store.getters["filmsStore/getFilms"].filter(
          (item) => item.prefer == true
        );
      } else {
        return this.$store.getters["filmsStore/getFilms"];
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  margin: 6px 6px;
}
img {
  width: 190px;
  height: 300px;
  position: relative;
  z-index: 1;
}
.no-item-found {
  margin: 14rem 0;
}
.image:hover {
  cursor: pointer;
}

.image:hover .star {
  opacity: 1;
}
.isPreferred {
  opacity: 1 !important;
}
.image {
  position: relative;
}

.star {
  opacity: 0;
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: rgba(148, 148, 184, 0.8);
  z-index: 2;
}
.no-padding {
  padding: 0;
}
</style>