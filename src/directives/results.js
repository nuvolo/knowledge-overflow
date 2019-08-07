import template from '../templates/results.html';
export function results_def() {
    var results = {
        template: template,
        scope: true,
        controller: results_ctrl,
        controllerAs: 'vm'
    };
    results_ctrl.$inject = ["$stateParams", "$scope", "resultsService"];
    function results_ctrl($stateParams, $scope, resultsService) {
        var vm = this;
        /*
        When using this results directive, method must be set in parent directive/view
        Method defines function to use when querying search results, params defines any additional
        data you wish to pass to the query
        */
        vm.method = $scope.$parent.vm.resultsMethod;
        vm.params = $scope.$parent.vm.params || {};


        vm.filter = $stateParams.filter || (vm.method == 'search' ? 'relevance' : 'newest');
        vm.page = 1;

        vm.update = function () {
            resultsService.query(vm.method, vm.filter, vm.page, vm.params)
                .then(function (data) {
                    vm.previews = data.previews;
                    vm.results = data.results;
                    vm.totalPages = Math.ceil(vm.results / data.pageSize);
                    vm.type = data.type;
                });
        };
        vm.update();

        vm.nextPage = function () {
            vm.page++;
            vm.update();
        };
        vm.lastPage = function () {
            vm.page--;
            if (vm.page < 1) vm.page = 1;
            vm.update();
        };
    }

    return results;
}
