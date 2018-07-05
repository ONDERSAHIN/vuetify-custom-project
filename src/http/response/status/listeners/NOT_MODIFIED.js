import HttpStatusEventBus from '../httpStatusEventBus'
import {NOT_MODIFIED} from 'http-status-codes'
import EventBus from '../../../../bus/eventBus'
function not_modified(){
  HttpStatusEventBus.$on(NOT_MODIFIED.toString(),(response)=>{
    let notification_credentials = {
      text: HttpStatusEventBus.$vuetify.t('this_record_is_not_available'),
      color: HttpStatusEventBus.$vuetify.theme.warning
    }
    EventBus.$emit('snack-bar-notification', notification_credentials)
  });
}
export default not_modified();
