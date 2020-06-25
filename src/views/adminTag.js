import template from "../templates/viewAdminTag.html";
export function admin_tag_view_def() {
  var view = {
    template: template,
    scope: true,
    controller: view_ctrl,
    controllerAs: "vm",
    url: "/admin/tags"
  };

  view_ctrl.$inject = ["$scope", "adminService", "tagsService"];
  function view_ctrl($scope, adminService, tagsService) {
    var vm = this;
    vm.sort = "newest";
    vm.page = 1;
    vm.filter = "";

    vm.list = [];

    vm.nextPage = function () {
      vm.page++;
      updateList();
    };
    vm.lastPage = function () {
      vm.page--;
      if (vm.page < 1) vm.page = 1;
      updateList();
    };

    adminService.subscribe(function (data) {
      vm.list = data.data;
      vm.results = data.results;
      vm.totalPages = Math.ceil(vm.results / data.pageSize);
    });

    function updateList() {
      adminService.getTags(vm.sort, vm.page, vm.filter);
    }

    $scope.$watch("vm.filter", function () {
      vm.page = 1;
      updateList();
    });
    $scope.$watch("vm.sort", function () {
      vm.page = 1;
      updateList();
    });

    vm.state = "view";

    vm.rename = function (tid, tag) {
      vm.updateName = tag;
      vm.editTag = {
        name: tag,
        tid: tid
      };
      vm.state = "rename";
    };

    vm.remap = function (tid, tag) {
      vm.editTag = {
        name: tag,
        tid: tid
      };
      vm.state = "remap";
    };

    vm.saveRename = function () {
      adminService
        .renameTag(vm.editTag.tid, vm.updateName)
        .then(function (status) {
          if (status == "fail") alert("Tag renaming failed");
          else window.location.reload();
        });
    };

    vm.remapList = [];
    vm.remapVal = "";

    tagsService.autoSubscribe(function (tags) {
      tags.forEach(function (tag) {
        if (vm.remapList.indexOf(tag.name) == -1) vm.remapList.push(tag.name);
      });
    });

    $scope.$watch("vm.remapVal", function (newVal) {
      if (newVal != "") tagsService.autofillTags(newVal);
    });

    vm.saveRemap = function () {
      var oldTag = vm.editTag.name;
      var newTag = vm.remapVal;
      if (
        window.confirm(
          'This will remap the tag "' +
            oldTag +
            '" to "' +
            newTag +
            '". This cannot be undone. Are you sure you wish to proceed?'
        )
      ) {
        adminService.remapTag(vm.editTag.tid, newTag).then(function (status) {
          if (status == "fail") alert("Tag remapping failed");
          else window.location.reload();
        });
      }
    };
  }

  return view;
}
