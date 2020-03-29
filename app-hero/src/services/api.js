import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const api = axios.create({
    baseURL: 'https://backend-hero.herokuapp.com'
});

export default api;