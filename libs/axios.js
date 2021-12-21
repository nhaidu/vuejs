import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_HOST,
    headers: {
        'content-type': 'application/json',
    },
});

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }

    return '';
};

if (process.browser === true) {
    instance.defaults.baseURL = `${process.env.appUrl}/${process.env.apiPath}`;
    instance.interceptors.request.use((config) => {
        const token = getCookie('auth._token.local');
        config.headers.Authorization = decodeURI(token);

        return config;
    });
}

export default instance;
