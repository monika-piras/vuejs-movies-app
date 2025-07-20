import axios from 'axios'

export default {

    namespaced: true,

    state: {
        allFilms: [

        ]
    },

    getters: {
        getFilms: (state) => state.allFilms,

        getFilmDetails: (state) => (filmID) => {
            const filmIndex = state.allFilms.findIndex(x => x.id == filmID);
            return state.allFilms[filmIndex];
        }
    },

    mutations: {
        loadFilmsMutation(state) {
            console.log('Mutation loadFilms');
            axios
                .get('https://api.tvmaze.com/shows')
                .then(response => {
                    const list = response.data;
                    state.allFilms.push(...list);
                    console.log('list', list)
                })
        },
        addFilm(state, filmNew) {
            state.allFilms.push(filmNew);
        }
    },

    actions: {
        loadFilms(context) {
            context.commit('loadFilmsMutation');
        },
        callActionAddFilm(context, filmParam) {
            context.commit('addFilm', filmParam);
        }
    }

};