export const Auth = {
    namespaced: true,
    state: () => ({
        token: undefined,
    }),
    getters: {
        getToken(state) {
            return state.token;
        }
    },
    mutations: {
        setToken(state, value) {
            state.token = value;
        }
    },
    actions: {
        setAuthToken(context, token) {
            context.commit('setToken', token);
        }
    }
}