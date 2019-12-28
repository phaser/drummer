import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bpm: 130,
        gridSize: 32
    },
    getters: {
        getBpm: state => {
            return state.bpm;
        },
        getGridSize: state => {
            return state.gridSize;
        }
    },
    mutations: {
        setBpm: (state, value) => {
            state.bpm = value;
        },
        setGridSize: (state, value) => {
            state.gridSize = value;
        }
    },
    actions: {
        // increment: context => {
        //     context.commit('increment');
        // },
        // decrement: context => {
        //     context.commit('decrement');
        // }
    }
});