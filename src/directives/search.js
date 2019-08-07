import template from "../templates/search.html";

export function search_def() {
    var search = {
        template: template,
        controller: search_ctrl,
        controllerAs: "vm",
        scope: true
    };
    search_ctrl.$inject = ["$state"];

    function search_ctrl($state) {
        var vm = this;
        vm.search = function() {
            $state.go('search', {
                q: vm.searchText
            });
        };
        vm.searchText = "";
    }

    return search;
}