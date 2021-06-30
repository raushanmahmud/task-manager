import axios from 'axios';
import qs from 'qs';
import { handleResponse, handleError } from './response';

const BASE_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

const get = (resource, params) => {
    return axios
        .get(`${BASE_URL}${resource}?developer=Raushan`, {params})
        .then(handleResponse)
        .catch(handleError);
};

const post = (resource, data) => {
    return axios
        .post(`${BASE_URL}${resource}?developer=Raushan`, data)
        .then(handleResponse)
        .catch(handleError);
};

const encodedPost = (resource, data) => {
    const url = `${BASE_URL}${resource}?developer=Raushan`
    return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(handleResponse)
        .catch(handleError);
};

export const client = {
    get,
    post,
    encodedPost
};