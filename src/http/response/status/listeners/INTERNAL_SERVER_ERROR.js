import HttpStatusEventBus from '../httpStatusEventBus'
import {INTERNAL_SERVER_ERROR} from 'http-status-codes'
import EventBus from '../../../../bus/eventBus'
function internal_server_error(){
  HttpStatusEventBus.$on(INTERNAL_SERVER_ERROR.toString(),(response)=>{
    let notification_credentials = {
      text: HttpStatusEventBus.$vuetify.t('server_error'),
      color: HttpStatusEventBus.$vuetify.theme.error
    }
    EventBus.$emit('snack-bar-notification', notification_credentials)
  });
}
export default internal_server_error();
