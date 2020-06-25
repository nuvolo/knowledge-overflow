import template from "../templates/viewQuestion.html";
export function question_view_def() {
  var summary = {
    template: template,
    controller: summary_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/questions/{id}"
  };
  summary_ctrl.$inject = [
    "$transitions",
    "$stateParams",
    "questionService",
    "createService",
    "adminService"
  ];
  function summary_ctrl(
    $transitions,
    $stateParams,
    questionService,
    createService,
    adminService
  ) {
    var vm = this;
    vm.question_id = $stateParams.id;
    vm.noQuestion = false;

    $transitions.onStart(
      {
        from: "question"
      },
      function () {
        if (vm.editorText != "") {
          return confirm(
            "Are you sure you would like to leave? Changes will not be saved"
          );
        }
      }
    );

    questionService.get(vm.question_id);
    questionService.subscribe(function (data) {
      if (data === undefined) vm.noQuestion = true;
      else {
        Object.assign(vm, data);
        sortAnswers();
        vm.editorText = "";
      }
    });

    vm.postNewAnswer = function () {
      if (vm.editorText.length < 10)
        alert("Answer length must be at least 10 characters");
      else if (vm.editorText.length > 5000)
        alert(
          "Answer length must be less than 5000 characters. Current length is " +
            vm.editorText.length +
            " characters"
        );
      else {
        createService
          .createAnswer(vm.editorText, vm.question_id)
          .then(function (data) {
            vm.editorText = "";
            vm.mde.value("");
            vm.answers = data.answers;
            sortAnswers();
          });
      }
    };

    vm.makeInternal = function () {
      adminService.makeInternal(vm.question_id).then(() => {
        window.location.reload();
      });
    };

    vm.deleteQuestion = function () {
      if (confirm("Are you sure you would like to delete this question?")) {
        adminService.deleteQuestion(vm.question_id).then(() => {
          alert("Question deleted");
        });
      }
    };

    function sortAnswers() {
      //Answer sort hierarchy: best answer => votes => oldest
      vm.answers.sort(function (a, b) {
        if (a.answer_id == vm.best_answer) return -1;
        if (b.answer_id == vm.best_answer) return 1;
        if (a.votes !== b.votes) return b.votes - a.votes;
        return new Date(a.time) - new Date(b.time);
      });
    }
  }

  return summary;
}
