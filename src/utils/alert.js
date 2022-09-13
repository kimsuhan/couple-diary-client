import store from '@/store';

const showSimple = () => {
    store.commit("Alert/visibleAlert");
    store.commit("Alert/setStatus", 'simple');
    store.commit("Alert/setMessage", '');
    store.commit("Alert/setNext", '');
}

const showLoading = (message) => {
    store.commit("Alert/visibleAlert");
    store.commit("Alert/setStatus", 'loading');
    store.commit("Alert/setMessage", message ? message : '잠시만 기다려주세요.');
    store.commit("Alert/setNext", '');
}

const showSuccess = (message, next) => {
    store.commit("Alert/visibleAlert");
    store.commit("Alert/setStatus", 'success');
    store.commit("Alert/setMessage", message ? message : '성공했습니다!');
    if(next) {
        store.commit("Alert/setNext", next);
    }
}

const showError = (message) => {
    store.commit("Alert/visibleAlert");
    store.commit("Alert/setStatus", 'error');
    store.commit("Alert/setMessage", message ? message : '알 수 없는 오류가 발생하였습니다.');
    store.commit("Alert/setNext", '');
}

const hideAlert = () => {
    store.commit("Alert/hideAlert");
    store.commit("Alert/setStatus", '');
    store.commit("Alert/setNext", '');
}

export default {
    showSimple,
    showLoading,
    showSuccess,
    showError,
    hideAlert,
}