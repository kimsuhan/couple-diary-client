import axios from 'axios';

const dataUtils = {
    postData(url, body, header){
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
    async getData(url, param){
        axios.defaults.baseURL = process.env.VUE_APP_DEFAULT_URL;

        let data = await axios({
                        url: url,
                        method: "GET",
                        params: param
                    })

                    return data;
    }
}

export default dataUtils;
