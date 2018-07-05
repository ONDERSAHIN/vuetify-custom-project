import VueI18n from 'vue-i18n'
import messages from './i18n/en-us'

export default ({ app, Vue }) => {
  Vue.use(VueI18n)
  // Set i18n instance on app
  console.log(messages);
  app.i18n = new VueI18n({
    locale: 'en',
    messages
  })
}
