import { path } from "./path";
import f from "./functions";

export function create_service_def($http) {
  var publicApi = {
    createAnswer: createAnswer,
    createQuestion: createQuestion,
    createComment: createComment,
    updateQuestion: updateQuestion,
    updateAnswer: updateAnswer
  };

  function createAnswer(answer, question_id) {
    var queryString = f.buildQueryString({
      qid: question_id,
      answer: answer
    });
    return $http
      .post(path.createAnswer + queryString)
      .then(f.transformResponse);
  }

  function createQuestion(question, description, tags, internal) {
    var queryString = f.buildQueryString({
      question: question,
      description: description,
      tags: tags,
      internal: internal
    });
    return $http
      .post(path.createQuestion + queryString)
      .then(f.transformResponse);
  }

  function createComment(param, id, comment) {
    var queryString = f.buildQueryString({
      param: param,
      id: id,
      comment: comment
    });
    return $http
      .post(path.createComment + queryString)
      .then(f.transformResponse);
  }

  function updateQuestion(qid, question, description, tags, internal) {
    var queryString = f.buildQueryString({
      qid: qid,
      question: question,
      description: description,
      tags: tags,
      internal: internal
    });
    return $http.post(path.updateQuestion + queryString);
  }

  function updateAnswer(aid, answer) {
    var queryString = f.buildQueryString({
      aid: aid,
      answer: answer
    });
    return $http.post(path.updateAnswer + queryString);
  }

  return publicApi;
}
