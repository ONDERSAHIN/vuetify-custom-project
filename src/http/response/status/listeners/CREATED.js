import HttpStatusEventBus from '../httpStatusEventBus'
import {CREATED} from 'http-status-codes'
import EventBus from '../../../../bus/eventBus'
function created(){
  HttpStatusEventBus.$on(CREATED.toString(),(response)=>{
    let notification_credentials = {
      text: HttpStatusEventBus.$vuetify.t('saved_successfuly'),
      color: HttpStatusEventBus.$vuetify.theme.tertiary,
    }
    EventBus.$emit('snack-bar-notification', notification_credentials)
  });
}
export default created();
