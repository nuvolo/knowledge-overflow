import template from '../templates/editor.html';

export function editor_def() {
    var editor = {
        template: template,
        controller: editor_ctrl,
        scope: false,
        controllerAs: 'evm'
    };
    editor_ctrl.$inject = ["$scope", "$element", "attachmentService"];

    function editor_ctrl($scope, $element, attachmentService) {
        var evm = this;
        evm.uploadFiles = function(files) {
            for (var i = 0; i < files.length; i++) {
                attachmentService.upload(files.item(i)).then(insertLink);
            }

            function insertLink(data) {
                mde.value(mde.value() + '[' + data.name + '](' + data.link + ') ');
            }
        };

        evm.selectFiles = function() {
            document.querySelector(".input-file").click();
        };
        $scope.vm.editorText = "";
        //Configured drop-in editor from simplemde markdown editor
        var mde = new SimpleMDE({
            element: $element[0].querySelector('.editor'),
            parsingConfig: {
                allowAtxHeaderWithoutSpace: false,
                strikethrough: false
            },
            renderingConfig: {
                singleLineBreaks: true,
                codeSyntaxHighlighting: true
            },
            toolbar: ["bold", "italic", "strikethrough", "|", "heading-1", "heading-2", "|", "code", "quote", "|", "table", "horizontal-rule", "|", "link", "image", {
                name: "upload",
                action: evm.selectFiles,
                className: "fas fa-file-upload",
                title: "Attach Files"
            }, "|", "guide"],
            shortcuts: {
                "toggleSideBySide": null,
                "toggleFullScreen": null,
                "togglePreview": null
            },
            spellChecker: false,
            status: false,
            forceSync: true
        });

        //Force update on the model when typing into the editor
        mde.codemirror.on("change", function() {
            $scope.vm.editorText = mde.value();
            if (!$scope.$$phase) $scope.$apply();
        });

        //Handling copy paste of attachments
        mde.codemirror.on("paste", function(el, event) {
            var items = (event.clipboardData || event.originalEvent.clipboardData).items;

            for (var index in items) {
                var item = items[index];
                if (item.kind === 'file') {
                    event.preventDefault();
                    var blob = item.getAsFile();
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        console.log("success");
                        var encoded_url = event.target.result;
                        attachmentService.uploadImage(encoded_url).then(function(url) {
                            mde.value(mde.value() + '![](' + url + ')');
                        });
                    };
                    reader.readAsDataURL(blob);
                }
            }
        });

        //Allow programatic insertion of text into the editor
        $scope.$watch('$scope.vm.editorText', function(newVal) {
            if (newVal == "" || mde.value() == "") mde.value(newVal);
        });
    }

    return editor;
}