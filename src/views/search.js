import template from "../templates/viewSearch.html";
export function search_view_def() {
  var page = {
    template: template,
    controller: page_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/search?q?filter"
  };

  page_ctrl.$inject = ["$stateParams"];
  function page_ctrl($stateParams) {
    var vm = this;
    vm.searchPhrase = $stateParams.q;
    vm.resultsMethod = "search";
    vm.params = {
      phrase: vm.searchPhrase
    };
  }

  return page;
}
