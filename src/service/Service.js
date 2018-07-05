// import Connector from '../http/api/connector/index'
// import API from '../api'
//
// class Service {
//
//   static all () {
//     return Connector.axios.get(API.get_api_by_name(Service.service_name)().get())
//   }
//   static save (data) {
//     if (!data.id) {
//       return Connector.axios.post(API.get_api_by_name(Service.service_name)().get(),data)
//     } else {
//       return Service.update(data)
//     }
//   }
//   static update (data) {
//     return Connector.axios.put(API.get_api_by_name(Service.service_name)().id(data.id).get(),data)
//   }
//   static delete (id) {
//     return Connector.axios.delete(API.get_api_by_name(Service.service_name)().id(id).get());
//   }
//   static count () {
//     return Connector.axios.get(API.get_api_by_name(Service.service_name)().count.get())
//   }
//   static getPaginated (page = 0, size = 10) {
//     return Connector.axios.request(API.get_api_by_name(Service.service_name)().paginate.get(),{params:{page:page,size:size}});
//   }
//   static getPaginatedAndSorted (page = 0, size = 10, descending = '', sortBy = '') {
//     return Connector.axios.get(API.get_api_by_name(Service.service_name)().paginate.sort.get(),{params:{
//         page: page,
//         size: size,
//         descending: descending,
//         sortBy: sortBy,
//       }});
//   }
//   static find (id) {
//     return Connector.axios.get(API.get_api_by_name(Service.service_name)().id(id).get())
//   }
//   static getByUrl (url) {
//     return Connector.axios.get(url);
//   }
//   static get connector () {
//     return Connector.axios
//   }
// }
//
// Service.service_name = ''
// export default Service
