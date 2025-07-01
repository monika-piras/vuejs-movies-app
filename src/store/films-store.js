import axios from 'axios'

export default {

    namespaced: true,

    state: {
        allFilms: [

        ],

        allFilmsBanners: [

        ],

    /*    allCastLists: [

        ]   */


    },

    getters: {
        getFilms: (state) => state.allFilms,

    //    getCastList: (state) => state.allCastLists,

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
                    console.log('list',list)
                })

    /*        axios    
                .get(`'https://api.tvmaze.com/shows/${id}/images'`)
                .then(response => {
                    const listBanners = response.data
                    state.allFilms.push(...listBanners);
                    console.log('list banner', listBanners)
                })       */

        /*    axios
                .get(`'https://api.tvmaze.com/shows/${id}?embed=cast'`)
                .then(response => {
                    const castList = response.data
                    state.allCastLists.push(...castList);
                    console.log('castList->', castList)
                }) */
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