import template from "../templates/viewTag.html";
export function tag_view_def() {
  var page = {
    url: "/tag/:tag?filter",
    template: template,
    controller: page_ctrl,
    controllerAs: "vm",
    scope: true
  };

  page_ctrl.$inject = ["$stateParams", "tagsService"];
  function page_ctrl($stateParams, tagsService) {
    var vm = this;
    vm.tag = $stateParams.tag;
    vm.watched = false;

    vm.resultsMethod = "tagSearch";
    vm.params = {
      tag: vm.tag
    };

    tagsService.isWatched(vm.tag).then(function (data) {
      vm.watched = data;
    });

    vm.watch = function (watch) {
      tagsService.watchTag(vm.tag, watch);
      vm.watched = watch;
    };
  }
  return page;
}
