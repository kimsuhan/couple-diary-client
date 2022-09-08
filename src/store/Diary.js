import axios from '@/utils/axios.js';

export const Diary = {
    namespaced: true,
    state: () => ({
        data:[]
    }),
    getters: {
        getData(state) {
            return state.data;
        }
    },
    mutations: {
        setData(state, value) {
            state.data = value;
        }
    },
    actions: {
        getServerData(context) {
            axios.getData('/v1/diary').then((data) => {
                context.commit('setData', data.data);
            });
        }
    }
}