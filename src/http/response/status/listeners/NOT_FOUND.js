import HttpStatusEventBus from '../httpStatusEventBus'
import {NOT_FOUND} from 'http-status-codes'
import EventBus from '../../../../bus/eventBus'
function not_found(){
  HttpStatusEventBus.$on(NOT_FOUND.toString(),(response)=>{
    let notification_credentials = {
      text: HttpStatusEventBus.$vuetify.t('resource_is_not_found'),
      color: HttpStatusEventBus.$vuetify.theme.error
    }
    EventBus.$emit('snack-bar-notification', notification_credentials)

  });
}
export default not_found();
