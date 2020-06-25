import template from "../templates/viewAdminWebhook.html";

export function admin_webhook_view_def() {
  var view = {
    template: template,
    scope: true,
    controller: view_ctrl,
    controllerAs: "vm",
    url: "/admin/webhooks"
  };

  view_ctrl.$inject = [
    "$scope",
    "adminService",
    "tagsService",
    "$element",
    "$timeout"
  ];
  function view_ctrl($scope, adminService, tagsService, $element, $timeout) {
    var vm = this;
    vm.state = "view";
    vm.instructions = false;
    vm.webhooks = [];

    function refresh() {
      adminService.getWebhooks().then(function (data) {
        vm.state = "view";
        vm.webhooks = data;
      });
    }
    refresh();

    vm.edit = function (hook) {
      //Copy object by value
      vm.hook = {
        url: hook.url,
        id: hook.id,
        channel: hook.channel,
        tags: hook.tags.slice(0)
      };
      vm.state = "edit";
    };

    vm.updateWebhook = function () {
      adminService
        .updateWebhook(vm.hook.id, vm.hook.channel, vm.hook.url, vm.hook.tags)
        .then(refresh);
    };

    vm.newHook = function () {
      vm.state = "create";
      vm.hook = {
        url: "",
        channel: "",
        tags: []
      };
    };

    vm.createWebhook = function () {
      adminService
        .createWebhook(vm.hook.channel, vm.hook.url, vm.hook.tags)
        .then(refresh);
    };

    vm.delete = function (hook) {
      adminService.deleteWebhook(hook.id).then(refresh);
    };

    vm.removeTag = function (tag) {
      vm.hook.tags.splice(vm.hook.tags.indexOf(tag), 1);
    };

    vm.autofillList = [];
    tagsService.autoSubscribe(function (tags) {
      tags.forEach(function (tag) {
        if (vm.autofillList.indexOf(tag.name) == -1)
          vm.autofillList.push(tag.name);
      });
    });

    $scope.$watch("vm.newTag", function (newVal) {
      if (newVal != "") tagsService.autofillTags(newVal);
    });

    $element[0].querySelector(".tags-input").on("blur", function () {
      vm.addTag(undefined, true);
    });

    vm.addTag = function (e, force) {
      if (force || e.keyCode == 13) {
        if (e) e.preventDefault();

        if (vm.newTag.length > 0) {
          vm.hook.tags.push(vm.newTag);
          vm.hook.tags = vm.hook.tags.filter(function (item, pos) {
            return vm.hook.tags.indexOf(item) == pos;
          });
          vm.newTag = "";
          vm.autofillList = [];
        }
        //need to force update to make sure new tags are rendered
        $timeout(function () {
          $scope.$apply();
        });
      }
    };
  }
  return view;
}
