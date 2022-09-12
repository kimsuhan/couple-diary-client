import axios from 'axios';
import store from '@/store';
import { computed } from 'vue';
import httpStatus from 'http-status';
import { useRouter } from 'vue-router'
import { notify } from "@kyvg/vue3-notification";

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
    postData(url, body, header){
        header = setAuthToken(header);
        axios.defaults.baseURL = process.env.VUE_APP_DEFAULT_URL;

        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: 'POST',
                data: body,
                headers: header,
            }).then(data => resolve(data))
            .catch((err) =>{
                reject(err)
            });
        });
    },
    putData(url, body, header){
        header = setAuthToken(header);
        axios.defaults.baseURL = process.env.VUE_APP_DEFAULT_URL;

        return new Promise((resolve, reject) => {
            axios({
                url: process.env.VUE_APP_DEFAULT_URL + url,
                method: 'PUT',
                data: body,
                headers: header,
            }).then(data => resolve(data)).catch(err => reject(err));
        });
    },
    async getData(url, param, header) {
        const data = await this.sendData({
            url: url,
            method: "GET",
            params: param,
            headers: header
        });

        return data;
    },

    async sendData(axiosOption) {

        // Auth Token Setting
        axiosOption.headers = setAuthToken(axiosOption.headers);

        // axios default Setting
        axios.defaults.baseURL = process.env.VUE_APP_DEFAULT_URL;

        return new Promise((resolve, reject) => {
            axios(axiosOption).then((data) => {
                resolve(data)
            })
            .catch((e) => {
                const router = useRouter();

                // 토큰 만료시 login Router 이동
                if(e.response.status === httpStatus.UNAUTHORIZED) {
                    store.dispatch("Auth/setAuthToken", undefined);
                    router.push({
                        name: 'login',
                    });
                }
                else if(e.response.data && e.response.data.message) {
                    notify({type: 'error', text: e.response.data.message});
                } else {
                    notify({type: 'error', text: e.message});
                }

                reject(e);
            });
        });
    }
}

export default dataUtils;
