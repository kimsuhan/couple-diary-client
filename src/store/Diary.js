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
            axios.getData('/v1/diary', [], true).then((response) => {
                if(response) {
                    context.commit('setData', response.data);
                }
            });
        }
    }
}