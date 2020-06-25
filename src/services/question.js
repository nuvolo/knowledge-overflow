import { path } from "./path";
import f from "./functions";

export function question_service_def($http) {
  var publicApi = {
    get: get,
    subscribe: subscribe,
    markBestAnswer: markBestAnswer,
    toggleStarred: toggleStarred
  };

  var questionSubscribers = [];

  function subscribe(callback) {
    questionSubscribers.push(callback);
  }

  function get(question_id) {
    var queryString = f.buildQueryString({
      id: question_id
    });
    return $http
      .get(path.getQuestion + queryString)
      .then(f.transformResponse)
      .then(function (result) {
        questionSubscribers.forEach(function (callback) {
          callback(result);
        });
        return result;
      });
  }

  function markBestAnswer(qid, aid, type) {
    var queryString = f.buildQueryString({
      qid: qid,
      aid: aid,
      type: type
    });
    return $http.post(path.markBestAnswer + queryString);
  }

  function toggleStarred(starred, qid) {
    var queryString = f.buildQueryString({
      starred: starred,
      qid: qid
    });
    $http.post(path.toggleStarred + queryString);
  }

  return publicApi;
}
