import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const api = axios.create({
    baseURL: 'http://c65e4463.ngrok.io'
});

export default api;