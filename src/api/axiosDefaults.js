import axios from 'axios';

axios.defaults.baseURL = 'https://ci-drf-api-heroku-7a39d4afbfbb.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;