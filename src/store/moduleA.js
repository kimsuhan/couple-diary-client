export const moduleA = {
    namespaced: true,
    state : () => ({
        count: 0
    }),
    mutation: {
        increment(state) {
            state.count++;
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    },
    actions: {
        incrementIfOddOnRootSum(state, commit, rootState) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit("increment");
            }
        }
    }
}