import template from "../templates/banner.html";
export function banner_def() {
  var banner = {
    template: template,
    scope: true,
    controller: banner_ctrl,
    controllerAs: "vm"
  };
  banner_ctrl.$inject = ["$scope", "$state", "notificationService"];
  function banner_ctrl($scope, $state, notificationService) {
    var vm = this;
    vm.initials = g_user.firstName.slice(0, 1) + g_user.lastName.slice(0, 1);
    vm.unread = 0;
    vm.showNotifications = false;

    //Bring you to the originating question when you click on a notification
    vm.clickNotification = function (event, id) {
      if (!event.target.parentNode.classList.contains("delete")) {
        vm.showNotifications = false;
        $state.go("question", {
          id: id
        });
      }
    };

    notificationService.get().then(function (data) {
      vm.unread = 0;
      data.forEach(function (notification) {
        if (!notification.read) vm.unread++;
      });
      vm.notifications = data;
    });

    vm.deleteNotification = function (id) {
      for (var i = 0; i < vm.notifications.length; i++) {
        notificationService.remove(id);
        if (vm.notifications[i].id == id) vm.notifications.splice(i, 1);
      }
    };

    vm.openNotifications = function () {
      vm.showNotifications = !vm.showNotifications;
      if (vm.unread > 0) {
        notificationService.markRead();
        vm.unread = 0;
      }
    };

    //If you click outside the notification box, close the window.
    window.onclick = function (event) {
      if (vm.showNotifications && event.srcElement.id != "notification-bell") {
        vm.showNotifications = false;
        $scope.$apply();
      }
    };
  }

  return banner;
}
