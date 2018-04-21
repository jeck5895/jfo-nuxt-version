import Vuex from 'vuex'
import * as easings from 'vuetify/es5/util/easing-patterns'

const createStore = () => {
    return new Vuex.Store({
        state: {
            prevEl: null,
            options: {
                duration: 1000,
                offset: 5,
                easing: 'easeInOutCubic',
                easings: Object.keys(easings)
            }
        },
        getters: {
            getPrevEl: state => {
                return state.prevEl;
            },
            getOptions: state => {
                return state.options;
            },
        },
        mutations: { // mutation =  commit //action = dispatch
            clearPrevEl: state => {
                state.prevEl = null;
            },
            setPrevEl: (state, payload) => {
                state.prevEl = payload;
            }
        }
    })
}

export default createStore
