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
            return 132;
        },
        getGridSize: () => {
            return 16;
        }
    };
    store = new Vuex.Store({
        getters
    })
})

describe('PlaybackController.vue', () => {
    it('renders the value of $store.getters.getBpm', () => {
        const width = '16'
        const height = '16'
        const wrapper = shallowMount(PlaybackControls, {
            propsData: { width, height },
            store,
            localVue
        })
        expect(wrapper.vm.$el.children[0].children[0].children[1].children[1].value).to.equal("132");
    })

    it('renders the value of $store.getters.getGridSize', () => {
        const width = '16'
        const height = '16'
        const wrapper = shallowMount(PlaybackControls, {
            propsData: { width, height },
            store,
            localVue
        })
        expect(wrapper.vm.$el.children[0].children[0].children[2].children[1].value).to.equal("16");
    })
})