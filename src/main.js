// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VeeValidate);
Vue.config.productionTip = false
Vue.config.devtools = true;

import http from './http'
http.registerListeners();
http.registerStatusListeners();

/* eslint-disable no-new */
const app = {
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
}


import api_connector from './http/api/connector'
api_connector({Vue});
// import i18n from './internalization/i18n'
// i18n({app,Vue});


import VueI18n from 'vue-i18n'
Vue.use(VueI18n)


const messages = {
  en: {
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Items per page:',
        rowsPerPageAll: 'All',
        pageText: '{0}-{1} of {2}',
        noResultsText: 'No matching records found',
        nextPage: 'Next page',
        prevPage: 'Previous page'
      },
      dataTable: {
        rowsPerPageText: 'Rows per page:'
      },
      noDataText: 'No data available',
    },
    message: {
      failed: 'Action failed',
      success: 'Action was successful',
      dashboard: 'Dashboard',
      job_info: 'Job Info',
      terminal: 'Terminal',
      definitions: 'Definitions',
      are_you_sure: 'Are you sure ?',
      required_fields: '* Required fields',
      deleting: 'Deleting...Please wait',
      operation_successful: 'Operation Successful',
      saved_successfully: 'Saved Successfully',
      updated_successfully: 'Updated Successfully',
      deleted_successfully: 'Deleted Successfully',
      resource_not_found: 'Sorry ,this record is not found ! It could be deleted before',
      same_record_exist: 'The record which you try to save is already exist!',
      something_went_wrong: 'Sorry, something went wrong',
      end_date_cannot_smaller: 'Sorry, End date can not be less than or equal to begin date',
      overtime_break: 'Overtime break',
      breaks: 'Break',
      created: 'Created',
      updated: 'Updated',
      date: 'Date',
      define: 'Define',
      save: 'Save',
      add: 'Add',
      create: 'Create',
      deletes: 'Delete',
      update: 'Update',
      cancel: 'Cancel',
      close: 'Close',
      sort: 'sort',
      description: 'Description',
      name: 'Name',
      time: 'Time',
      begin: 'Begin',
      end: 'End',
      color: 'Color',
      min: 'Minimum',
      max: 'Maximum',
      overtime: 'Overtime',
      brand: 'Brand',
      model: 'Model',
      job: 'Job',
      leave_type: 'Leave Type',
      serial_number: 'Serial Number',
      department: 'Department',
      google_map: 'Google Map',
      HOURLY: 'HOURLY',
      DAILY: 'DAILY',
      WEEKLY: 'WEEKLY',
      YEARLY: 'YEARLY',
      HOUR: 'HOUR',
      DAY: 'DAY',
      WEEK: 'WEEK',
      YEAR: 'YEAR',
      code: 'Code',
      timeUnit: 'Time Unit',
      paid_or_unpaid: 'Paid / Unpaid',
      shift: 'Shift',
      holiday: 'Holiday',
      annual: 'Annual',
      priority: 'Priority',
      count: 'Count',
      leave: 'Leave',
      location: 'Location',
      server_error: 'Server Error',
      this_record_is_not_available: 'This record is not available',
      resource_is_not_found: 'Resource is not found!'
    }
  },
  sv: {
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Element per sida:',
        pageText: '{0}-{1} av {2}'
      }
    },
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.use(Vuetify, {
  theme: {
    primary: '#FF0000',
    secondary: '#26A69A',
    tertiary  : "#555",
    neutral  : "#E0E1E2",
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
});


new Vue(app)
