import HttpStatusEventBus from '../httpStatusEventBus'
import {NO_CONTENT} from 'http-status-codes'
import EventBus from '../../../../bus/eventBus'
function no_content(){
  HttpStatusEventBus.$on(NO_CONTENT.toString(),(response)=>{
    if(response.config.method == 'delete') {
      let notification_credentials = {
        text: HttpStatusEventBus.$vuetify.t('deleted_successfuly'),
        color: HttpStatusEventBus.$vuetify.theme.tertiary
      }
      EventBus.$emit('snack-bar-notification', notification_credentials)
      EventBus.$emit('delete-dialog-close');
    }
    });
}
export default no_content();
