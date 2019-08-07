import template from '../templates/viewAsk.html';

export function ask_view_def() {
    var ask = {
        template: template,
        controller: ask_ctrl,
        controllerAs: "vm",
        scope: false,
        url: '/ask'
    };
    ask_ctrl.$inject = ['$transitions', '$state', '$element', '$scope', 'createService', 'tagsService'];
    function ask_ctrl($transitions, $state, $element, $scope, createService, tagsService) {
        var vm = this;
        vm.tagList = [];
        vm.addedTag = "";
        vm.author = g_user.getFullName();
        vm.time = new Date();
        vm.review = false;

        var questionLoad = false;
        $transitions.onStart({
            from: 'ask'
        }, function () {
            if (!questionLoad && (vm.editorText != '' || vm.newQuestionTitle != undefined)) {
                return confirm("Are you sure you would like to leave? Changes will not be saved");
            }
        });

        //Post logic, go into review mode before posting to table
        vm.postNewQuestion = function () {
            if (vm.editorText.length < 10) alert("Description length must be at least 10 characters");
            else if (vm.editorText.length > 5000) alert("Description length must be less than 5000 characters. Current length is " + vm.editorText.length + " characters");
            else {
                if (vm.review) {
                    createService.createQuestion(vm.newQuestionTitle, vm.editorText, vm.tagList)
                        .then(function (id) {
                            questionLoad = true;
                            $state.go('question', {
                                id: id
                            });
                        });
                }
                vm.review = true;
            }
        };

        //All of the below functions are for the tag input box. Autofill list
        //and logic to finish the tag when you click out or enter
        vm.autofillList = [];
        tagsService.autoSubscribe(function (tags) {
            tags.forEach(function (tag) {
                if (vm.autofillList.indexOf(tag.name) == -1) vm.autofillList.push(tag.name);
            });
        });

        $scope.$watch('vm.addedTag', function (newVal) {
            if (newVal != '') tagsService.autofillTags(newVal);
        });

        $element[0].querySelector('.tags-input').on('blur', function () {
            vm.addTag();
        });

        vm.addTag = function () {
            if (vm.addedTag.length > 0) {
                vm.tagList.push(vm.addedTag);
                vm.tagList = vm.tagList.filter(function (item, pos) {
                    return vm.tagList.indexOf(item) == pos;
                });
                vm.addedTag = "";
                vm.autofillList = [];
            }
        };

        vm.testAddTag = function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                vm.addTag();
            }
        };

        vm.removeTag = function (tag) {
            vm.tagList.splice(vm.tagList.indexOf(tag), 1);
        };
    }

    return ask;
}