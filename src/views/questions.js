export function questions_view_def() {
    var results = {
        template: '<results></results>',
        scope: false,
        url: '/questions?filter',
        controller: questions_ctrl,
        controllerAs: 'vm'
    };

    function questions_ctrl() {
        var vm = this;
        vm.resultsMethod = 'all';
    }

    return results;
}