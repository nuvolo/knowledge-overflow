import template from '../templates/viewHome.html';
export function home_view_def() {
    var summary = {
        template: template,
        controller: summary_ctrl,
        controllerAs: "vm",
        scope: true,
        url: '/home'
    };
    summary_ctrl.$inject = ["tagsService", "resultsService"];
    function summary_ctrl(tagsService, resultsService) {
        var vm = this;

        //Most popular tags (top 1/2 of page)
        tagsService.getTopTags()
            .then(function(data) {
                vm.allTags = data;
            });

        //recent questions (bottom 1/2 of page)
        resultsService.query('all', 'newest', '1', {})
            .then(function(data) {
                vm.recents = data.previews;
            });
    }
    return summary;
}