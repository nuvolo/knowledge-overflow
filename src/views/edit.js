import template from "../templates/viewEdit.html";
export function edit_view_def() {
  var edit = {
    template: template,
    controller: edit_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/questions/{qid}/edit?aid"
  };
  edit_ctrl.$inject = [
    "$stateParams",
    "$scope",
    "$element",
    "$state",
    "questionService",
    "createService",
    "tagsService"
  ];
  function edit_ctrl(
    $stateParams,
    $scope,
    $element,
    $state,
    questionService,
    createService,
    tagsService
  ) {
    var vm = this;
    vm.aid = $stateParams.aid;
    vm.qid = $stateParams.qid;
    vm.type = vm.aid === undefined ? "q" : "a";
    vm.noText = false;

    //Load the question or answer data
    questionService.get(vm.qid).then(function (data) {
      if (!data) vm.noText = true;
      else if (vm.type == "a") {
        for (var i = 0; i < data.answers.length; i++) {
          if (data.answers[i].answer_id == vm.aid)
            vm.editorText = data.answers[i].answer;
        }
      } else if (vm.type == "q" && data.question) {
        vm.questionTitle = data.question;
        vm.tagList = data.tags;
        vm.editorText = data.description;
        vm.internal = data.internal;
      }
      if (!vm.editorText) vm.noText = true;
    });

    //Post new data to tables, reload question page
    vm.update = function () {
      function reload() {
        $state.go("question", {
          id: vm.qid
        });
      }
      if (vm.editorText.length < 10)
        alert(
          (vm.type == "q" ? "Description" : "Answer") +
            " length must be at least 10 characters"
        );
      else if (vm.editorText.length > 5000)
        alert(
          (vm.type == "q" ? "Description" : "Answer") +
            " length must be less than 5000 characters. Current length is " +
            vm.editorText.length +
            " characters"
        );
      else {
        if (vm.type == "q") {
          let makeInternal = false;
          if (vm.internal && vm.internal) makeInternal = true;
          createService
            .updateQuestion(
              vm.qid,
              vm.questionTitle,
              vm.editorText,
              vm.tagList,
              makeInternal
            )
            .then(reload);
        } else createService.updateAnswer(vm.aid, vm.editorText).then(reload);
      }
    };

    //Again, logic for a tag input
    vm.autofillList = [];
    tagsService.autoSubscribe(function (tags) {
      tags.forEach(function (tag) {
        if (vm.autofillList.indexOf(tag.name) == -1)
          vm.autofillList.push(tag.name);
      });
    });

    $scope.$watch("vm.addedTag", function (newVal) {
      if (newVal != "") tagsService.autofillTags(newVal);
    });

    $element[0].querySelector(".tags-input").on("blur", function () {
      vm.addTag();
    });

    vm.addTag = function () {
      if (vm.addedTag.length > 0) {
        vm.tagList.push(vm.addedTag);
        vm.tagList = vm.tagList.filter(function (item, pos) {
          return vm.tagList.indexOf(item) == pos;
        });
        vm.addedTag = "";
        vm.autofillList = [];
      }
    };

    vm.testAddTag = function (e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        vm.addTag();
      }
    };

    vm.removeTag = function (tag) {
      vm.tagList.splice(vm.tagList.indexOf(tag), 1);
    };
  }

  return edit;
}
