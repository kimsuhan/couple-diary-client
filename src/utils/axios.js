import axios from 'axios';
import store from '@/store';
import { computed } from 'vue';
import httpStatus from 'http-status';
import { useRouter } from 'vue-router'
// import { notify } from "@kyvg/vue3-notification";
import alert from './alert';

const setAuthToken = (header) => {
    if(!header) {
        header = {};
    }

    const token = computed(() => store.getters["Auth/getToken"]);
	if (token.value) {
        header.Authorization = `Bearer ${token.value}`;
	}

    return header;
}

const dataUtils = {
    async postData(url, body, header){
        header = setAuthToken(header);

        const data = await this.sendData({
            url: url,
            method: 'POST',
            data: body,
            headers: header
        });

        return data;
    },
    putData(url, body, header){
        header = setAuthToken(header);

        return new Promise((resolve, reject) => {
            axios({
                url: process.env.VUE_APP_DEFAULT_URL + url,
                method: 'PUT',
                data: body,
                headers: header,
            }).then(data => resolve(data)).catch(err => reject(err));
        });
    },
    async getData(url, param, alertSimple) {
        const data = await this.sendData({
            url: url,
            method: "GET",
            params: param,
        }, alertSimple);

        return data;
    },

    async sendData(axiosOption, simple) {
        // Alert 이 보일때에는 Request를 보내지 않음.
        const alertShow = computed(() => store.getters['Alert/getShow']);
        if(alertShow.value) {
            return;
        }

        simple ? alert.showSimple() : alert.showLoading();

        // Axios Deafult Setting
        axios.defaults.baseURL = process.env.VUE_APP_DEFAULT_URL;

        // Auth Token Setting
        axiosOption.headers = setAuthToken(axiosOption.headers);

        let returnData = {
            data: undefined,
            status: 0
        };

        try {
            returnData = await axios(axiosOption);
            alert.hideAlert();
        }
        catch (e) {
            returnData = e.response;
            let errorMessage;

            // 토큰 만료시 login Router 이동
            if(e.response.status === httpStatus.UNAUTHORIZED) {
                const router = useRouter();

                store.dispatch("Auth/setAuthToken", undefined);
                router.push({
                    name: 'login',
                });
            }
            else if(e.response.data && e.response.data.message) {
                errorMessage = e.response.data.message;
            } else {
                errorMessage = e.message;
            }

            alert.showError(errorMessage);
        }

        return returnData;
    }
}

export default dataUtils;
