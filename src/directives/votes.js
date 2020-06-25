import template from "../templates/votes.html";

export function votes_def() {
  var votes = {
    controller: votes_ctrl,
    controllerAs: "vvm",
    scope: false,
    template: template
  };
  votes_ctrl.$inject = ["$scope", "voteService", "questionService"];
  function votes_ctrl($scope, voteService, questionService) {
    var vvm = this;
    //Directive Data
    for (var param in $scope.vm) vvm[param] = $scope.vm[param];
    vvm.type = vvm.answer_id ? "answer" : "question";
    var id = vvm.type === "question" ? vvm.question_id : vvm.answer_id;

    //On question update save data
    questionService.subscribe(function (data) {
      if (data && data.question_id == id) {
        vvm.votes = data.votes;
        vvm.starred = data.starred;
      }
    });

    //Vote in a direction
    vvm.vote = function (dir) {
      vvm.votes += dir - vvm.direction;
      vvm.direction = dir;
      voteService.vote(dir, id, vvm.type);
    };

    //Handle vote changes
    voteService.get(id, vvm.type);
    voteService.subscribe(function (data) {
      if (data.id === id) vvm.direction = data.dir;
    });

    if (vvm.type == "question") {
      //Handle Star clicked
      vvm.toggleStarred = function () {
        vvm.starred = !vvm.starred;
        questionService.toggleStarred(vvm.starred, id);
      };
    } else {
      //Handle best answer marking
      var parent = $scope.$parent.vm;
      vvm.markBestAnswer = function (type) {
        questionService
          .markBestAnswer(parent.question_id, vvm.answer_id, type)
          .then(function () {
            questionService.get(parent.question_id);
          });
      };
      vvm.best_answer = parent.best_answer === vvm.answer_id;
      vvm.best_answer_type = parent.best_answer_type;
      vvm.question_author = parent.author == g_user.getFullName();
    }
  }

  return votes;
}
