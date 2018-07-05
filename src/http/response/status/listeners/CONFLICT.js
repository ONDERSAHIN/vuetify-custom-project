import HttpStatusEventBus from '../httpStatusEventBus'
// import colors from 'vuetify/es5/util/colors'
import {CONFLICT} from 'http-status-codes'
import EventBus from '../../../../bus/eventBus'
function conflict(){
  HttpStatusEventBus.$on(CONFLICT.toString(),(response)=>{
    let notification_credentials = {
      text: HttpStatusEventBus.$vuetify.t('same_record_exist'),
      color: HttpStatusEventBus.$vuetify.theme.warning
    }
    EventBus.$emit('snack-bar-notification', notification_credentials)
  });
}
export default conflict();
