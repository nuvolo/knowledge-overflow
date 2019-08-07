import template from '../templates/viewProfile.html';
export function profile_view_def() {
    var profile = {
        template: template,
        controller: profile_ctrl,
        controllerAs: "vm",
        scope: true,
        url: '/profile?tab?filter'
    };

    profile_ctrl.$inject = ["$stateParams"];
    function profile_ctrl($stateParams) {
        var vm = this;
        vm.tab = $stateParams.tab || 'questions';

        vm.resultsMethod = "profile";
        vm.params = {
            type: vm.tab
        };
    }

    return profile;
}