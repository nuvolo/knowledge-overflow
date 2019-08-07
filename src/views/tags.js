import template from '../templates/viewTags.html';
export function tags_view_def() {
    var view = {
        template:template,
        controller: tags_ctrl,
        controllerAs: "vm",
        scope: true,
        url: '/tags'
    };

    tags_ctrl.$inject = ['$scope', 'tagsService'];
    function tags_ctrl($scope, tagsService) {
        var vm = this;
        vm.tagList = [];

        //Functions for searching using filter box
        tagsService.autoSubscribe(function (tags) {
            vm.tagList = tags;
        });
        vm.filter = '';
        $scope.$watch('vm.filter', function (newVal) {
            if (newVal != '') tagsService.autofillTags(newVal, true);
            else getTop();
        });

        function getTop() {
            tagsService.getTopTags(true).then(function (data) {
                vm.tagList = data;
            });
        }
        getTop();

    }

    return view;
}