import HttpStatusEventBus from './status/httpStatusEventBus'
import { httpEventBus } from '../event/httpEventBus'
function http_response_listener(){
  httpEventBus.$on('http-response',(response)=>{
      HttpStatusEventBus.$emit(response.status.toString(),response);
  });
}
export default http_response_listener();
