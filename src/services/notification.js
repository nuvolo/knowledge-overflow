import { path } from "./path";
import f from "./functions";

export function notification_service_def($http) {
  return {
    remove: function (id) {
      var queryString = f.buildQueryString({
        id: id
      });
      $http.post(path.deleteNotification + queryString);
    },
    markRead: function () {
      $http.post(path.markNotifications);
    },
    get: function () {
      return $http.get(path.getNotifications).then(f.transformResponse);
    }
  };
}
