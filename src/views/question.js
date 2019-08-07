import template from '../templates/viewQuestion.html';
export function question_view_def() {
    var summary = {
        template: template,
        controller: summary_ctrl,
        controllerAs: "vm",
        scope: true,
        url: '/questions/{id}'
    };
    summary_ctrl.$inject = ["$transitions", "$stateParams", "questionService", "createService"];
    function summary_ctrl($transitions, $stateParams, questionService, createService) {
        var vm = this;
        vm.question_id = $stateParams.id;
        vm.noQuestion = false;


        $transitions.onStart({
            from: 'question'
        }, function () {
            if (vm.editorText != '') {
                return confirm("Are you sure you would like to leave? Changes will not be saved");
            }
        });


        questionService.get(vm.question_id);
        questionService.subscribe(function (data) {
            if (data === undefined) vm.noQuestion = true;
            else {
                Object.assign(vm, data);
                sortAnswers();
                vm.editorText = "";
            }
        });

        vm.postNewAnswer = function () {
            if (vm.editorText.length < 10) alert("Answer length must be at least 10 characters");
            else if (vm.editorText.length > 5000) alert("Answer length must be less than 5000 characters. Current length is " + vm.editorText.length + " characters");
            else {
                createService.createAnswer(vm.editorText, vm.question_id)
                    .then(function (data) {
                        vm.editorText = "";
                        vm.answers = data.answers;
                        sortAnswers();
                    });
            }
        };

        function sortAnswers() {
            //Answer sort hierarchy: best answer => votes => oldest
            vm.answers.sort(function (a, b) {
                if (a.answer_id == vm.best_answer) return -1;
                if (b.answer_id == vm.best_answer) return 1;
                if (a.votes !== b.votes) return b.votes - a.votes;
                return new Date(a.time) - new Date(b.time);
            });
        }
    }

    return summary;
}