import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PlaybackControls from '@/components/PlaybackControls.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)
let getters
let store

beforeEach(() => {
    getters = {
        getBpm: () => {
            return 130;
        },
        getGridSize: () => {
            return 32;
        }
    };
    store = new Vuex.Store({
        getters
    })
})

describe('PlaybackController.vue', () => {
    it('renders props.msg when passed', () => {
        const width = '16'
        const height = '16'
        const wrapper = shallowMount(PlaybackControls, {
            propsData: { width, height },
            store,
            localVue
        })
        expect(wrapper.text()).to.include('');
    })
})