import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MoviesPage from '../views/MoviesPage.vue'
import MovieDetailsPage from '../views/MovieDetailsPage.vue'
import AddFilmPage from '../views/AddFilmPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
    component: MoviesPage
  },
  {
    path: '/movie/:title',
    name: 'MovieTitle',
    component: MoviesPage
  },
  {
    path: '/categories/:category',
    name: 'MovieCategory',
    component: MoviesPage
  },
  {
    path: '/favourites',
    name: 'MovieFavourites',
    component: MoviesPage,
    props: { isFavourites: true }
  },
  {
    path: '/movieDetails/:id',
    name: 'MovieDetails',
    component: MovieDetailsPage
  },
  {
    path: '/addFilm',
    name: 'addFilm',
    component: AddFilmPage
  }
]

const router = new VueRouter({
  base: '/vuejs-movies-example',
  linkExactActiveClass: "active",
  routes,
  mode: 'hash'
})

export default router