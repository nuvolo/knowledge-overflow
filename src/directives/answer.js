import template from "../templates/answer.html";

export function answer_def() {
  var answer = {
    template: template,
    controller: answer_ctrl,
    controllerAs: "vm",
    scope: false
  };
  answer_ctrl.$inject = ["$scope"];

  function answer_ctrl($scope) {
    //Extract answer data and question ID from parent question
    var vm = this;
    for (var param in $scope.answer) vm[param] = $scope.answer[param];
    vm.question_id = $scope.$parent.vm.question_id;
  }

  return answer;
}
