import Vue from 'vue'
import Vuex from 'vuex'
import filmsStore from './films-store';
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    filmsStore
  }

});
