import axios from 'axios'
import store from '../store';

const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'multipart/form-data;';
axios_instance.defaults.headers.post['Accept'] = 'application/json; image/webp';




// const baseUrl = 'http://127.0.0.1:8000/api/'
const baseUrl = 'https://api.omowumiojo.com/api/'
export default { 
  axios_instance,
  baseUrl,
}             