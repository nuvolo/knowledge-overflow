import template from "../templates/answerPreview.html";
export function answer_preview_def() {
    var preview = {
        controller: preview_ctrl,
        controllerAs: 'vm',
        scope: false,
        template: template
    };
    preview_ctrl.$inject = ['$scope'];
    function preview_ctrl($scope) {
        var vm = this;
        for (var param in $scope.preview) vm[param] = $scope.preview[param];
    }

    return preview;
}