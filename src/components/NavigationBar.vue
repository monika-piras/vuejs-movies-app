<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      style="font-size: 1.15rem"
    >
      <b-navbar-brand router-link to="/" class="title"
        >Vue Movies</b-navbar-brand
      >
      <b-navbar-toggle
        target="nav-collapse"
        class="nav-pages-style"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/">Home</b-nav-item>
          <b-nav-item router-link to="/movie">Movie List</b-nav-item>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>Categories</em>
            </template>
            <b-dropdown-item
              class="dropdownmenu-mobile"
              v-for="option in options"
              router-link
              v-bind:to="option.value"
              >{{ option.text }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              v-model="title"
              size="sm"
              class="mr-sm-2 margin-bottom"
              placeholder="Search Movie"
            >
            </b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              v-on:click="search()"
            >
              <b-icon-search></b-icon-search>&nbsp;Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      title: null,
      selected: "",
      options: [
        { text: "Comedy", value: "/categories/Comedy" },
        { text: "Romantic", value: "/categories/Romance" },
        { text: "Adventure", value: "/categories/Adventure" },
        { text: "Favourites", value: "/favourites" },
      ],
    };
  },
  methods: {
    search() {
      this.$router.push("/movie/" + this.title);
    },
  },
};
</script>

<style scoped >
.nav-link.active {
  border-bottom: 1px solid red;
}

.title {
  font-weight: 700;
  font-size: 1.45rem;
  padding-bottom: 2px;
  border-bottom: 3px solid red;
}
.nav-pages-style {
  font-weight: 400;
}
/deep/ .dropdown-menu {
  border-radius: 0;
  background: #343a40;
  color: #fff;
  border: 0;
}
/deep/ .dropdown-item {
  color: #fff;
}
/deep/ .dropdown-item:hover {
  color: #212529;
}

@media only screen and (max-width: 992px) {
  .dropdownmenu-mobile {
    text-align: center;
  }
  .form-inline {
    display: block;
    max-width: 70%;
    margin: auto;
  }
  .margin-bottom {
    margin-bottom: 0.5rem;
  }
}
</style>