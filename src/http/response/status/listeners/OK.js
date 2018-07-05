import HttpStatusEventBus from '../httpStatusEventBus'
import { OK } from 'http-status-codes'
import EventBus from '../../../../bus/eventBus'
function ok () {
  HttpStatusEventBus.$on(OK.toString(), (response) => {



    if (response.config.method == 'put') {
      let notification_credentials = {
        text: HttpStatusEventBus.$vuetify.t('updated_successfuly'),
        color: HttpStatusEventBus.$vuetify.theme.tertiary,
      }
      EventBus.$emit('snack-bar-notification', notification_credentials)
    }
  })
}
export default ok()
