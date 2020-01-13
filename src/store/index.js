import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bpm: 130,
        gridSize: 32,
        audioContext: null
    },
    getters: {
        getBpm: state => {
            return state.bpm;
        },
        getGridSize: state => {
            return state.gridSize;
        },
        getAudioContext: state => {
            if (state.audioContext === null) {
                // for cross browser
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                state.audioContext = new AudioContext();
            }
            return state.audioContext;
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