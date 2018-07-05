import axios from 'axios'
// import IdenfitAPI from '../../api'
import { httpEventBus } from '../../event/httpEventBus'
let _axios = null;
export default ({ Vue }) => {
  if(!_axios){
    _axios = axios.create({
      baseURL: '',
      timeout: 5000,
      headers: {
        'organization' :'0',
        'Access-Control-Allow-Origin': '*',
      },
    });

    _axios.interceptors.response.use(function (response) {
      httpEventBus.httpResponse(response);
      return response;
    }, function (error) {
      if (error.response) {
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        httpEventBus.httpResponse(error.response);
      } else {
        error.status = '500'
        httpEventBus.httpResponse(error);
      }
      // Do something with response error
      return Promise.reject(error);
    });

    Vue.prototype.$axios = _axios;
  }
}
