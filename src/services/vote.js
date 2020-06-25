import { path } from "./path";
import f from "./functions";

export function vote_service_def($http) {
  var publicApi = {
    vote: vote,
    get: get,
    subscribe: subscribe
  };

  function vote(dir, id, param) {
    var queryString = f.buildQueryString({
      dir: dir,
      id: id,
      param: param
    });
    $http.post(path.vote + queryString);
  }

  function get(id, param) {
    var queryString = f.buildQueryString({
      id: id,
      param: param
    });
    $http
      .get(path.vote + queryString)
      .then(f.transformResponse)
      .then(function (result) {
        subscribers.forEach(function (callback) {
          callback(result);
        });
      });
  }

  var subscribers = [];

  function subscribe(callback) {
    subscribers.push(callback);
  }

  return publicApi;
}
