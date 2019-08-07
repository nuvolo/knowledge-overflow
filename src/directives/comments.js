import template from '../templates/comments.html';
export function comments_def() {
    var comments = {
        controller: comments_ctrl,
        controllerAs: 'cvm',
        scope: false,
        template: template
    };
    comments_ctrl.$inject = ["$scope", "questionService", "createService"];
    function comments_ctrl($scope, questionService, createService) {
        var cvm = this;
        //Options toggled on various actions
        cvm.expand = false;
        cvm.minifiedResults = 4;
        cvm.commenting = false;
        cvm.commentText = "";
        //Directive data
        cvm.comments = $scope.vm.comments;
        cvm.type = $scope.vm.answer_id ? 'answer' : 'question';
        cvm.id = (cvm.type === 'question' ? $scope.vm.question_id : $scope.vm.answer_id);

        //On Question update save data to view
        if (cvm.type === 'question') questionService.subscribe(function (data) {
            if (data) {
                cvm.comments = data.comments;
                cvm.commenting = false;
                cvm.commentText = "";
            }
        });

        //Create comment then update the question
        cvm.postComment = function () {
            createService.createComment(cvm.type, cvm.id, cvm.commentText).then(function () {
                if (cvm.type == 'answer') questionService.get($scope.$parent.vm.question_id);
                else questionService.get(cvm.id);
            });
        };
    }

    return comments;
}