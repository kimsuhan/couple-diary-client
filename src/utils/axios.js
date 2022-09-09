import axios from 'axios';
import store from '@/store';
import { computed } from 'vue';

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
            }).then(data => resolve(data)).catch(err => reject(err));
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
    async getData(url, param, header){
        header = setAuthToken(header);
        axios.defaults.baseURL = process.env.VUE_APP_DEFAULT_URL;

        let data = await axios({
                        url: url,
                        method: "GET",
                        params: param,
                        headers: header
                    })

                    return data;
    }
}

export default dataUtils;
