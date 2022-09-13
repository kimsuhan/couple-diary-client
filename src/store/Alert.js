export const Alert = {
    namespaced: true,
    state: () => ({
        status: '',
        show: false,
        message: '',
        next: '',
    }),
    getters: {
        getStatus(state) {
            return state.status;
        },
        getShow(state) {
            return state.show;
        },
        getMessage(state) {
            return state.message;
        },
        getNext(state) {
            return state.next;
        },
    },
    mutations: {
        setStatus(state, value) {
            state.status = value;
        },
        setMessage(state, value) {
            state.message = value;
        },
        setNext(state, value) {
            state.next = value;
        },
        visibleAlert(state) {
            state.show = true;
        },
        hideAlert(state) {
            state.show = false;
        }
    }
}