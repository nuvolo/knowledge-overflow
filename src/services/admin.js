import { path } from "./path";
import f from "./functions";

export function admin_service_def($http) {
  var publicApi = {
    getTags: getTags,
    subscribe: subscribe,
    renameTag: renameTag,
    remapTag: remapTag,
    getWebhooks: getWebhooks,
    deleteWebhook: deleteWebhook,
    createWebhook: createWebhook,
    updateWebhook: updateWebhook,
    makeInternal: makeInternal,
    deleteQuestion: deleteQuestion
  };

  function deleteWebhook(hid) {
    var queryString = f.buildQueryString({
      hid: hid
    });
    return $http
      .post(path.deleteWebhook + queryString)
      .then(f.transformResponse);
  }

  function createWebhook(channel, url, tags) {
    var queryString = f.buildQueryString({
      channel: channel,
      url: url,
      tags: tags
    });
    return $http
      .post(path.createWebhook + queryString)
      .then(f.transformResponse);
  }

  function updateWebhook(hid, channel, url, tags) {
    var queryString = f.buildQueryString({
      hid: hid,
      channel: channel,
      url: url,
      tags: tags
    });
    return $http
      .post(path.updateWebhook + queryString)
      .then(f.transformResponse);
  }

  var subscribers = [];

  function subscribe(callback) {
    subscribers.push(callback);
  }

  function getTags(sort, page, search) {
    var queryString = f.buildQueryString({
      sort: sort,
      page: page,
      search: search
    });

    $http
      .post(path.adminGetTags + queryString)
      .then(f.transformResponse)
      .then(function (result) {
        subscribers.forEach(function (callback) {
          callback(result);
        });
      });
  }

  function renameTag(tid, newName) {
    var queryString = f.buildQueryString({
      tid: tid,
      newName: newName
    });
    return $http
      .post(path.adminRenameTag + queryString)
      .then(f.transformResponse);
  }

  function remapTag(tid, mapTag) {
    var queryString = f.buildQueryString({
      tid: tid,
      mapTag: mapTag
    });
    return $http
      .post(path.adminRemapTag + queryString)
      .then(f.transformResponse);
  }

  function getWebhooks() {
    return $http.get(path.adminGetWebhooks).then(f.transformResponse);
  }

  function makeInternal(qid) {
    var queryString = f.buildQueryString({
      qid: qid
    });
    return $http
      .post(path.adminMakeInternal + queryString)
      .then(f.transformResponse);
  }

  function deleteQuestion(qid) {
    var queryString = f.buildQueryString({
      qid: qid
    });
    return $http
      .post(path.adminDeleteQuestion + queryString)
      .then(f.transformResponse);
  }

  return publicApi;
}
