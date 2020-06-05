import { directiveSetup } from "./directives/index";
import { serviceSetup } from "./services/index";
import { filterSetup } from "./filter";
import routing from "./views/index";
import "./styles/prettify.css";
import "./styles/main.css";
import "./styles/mobile.css";

var mod = angular.module("kmapp", ["ngSanitize", "ui.router"]).config(routing);

directiveSetup(mod);
serviceSetup(mod);
filterSetup(mod);

mod.$inject = ["$http", "$rootScope"];
mod.run(function ($http, $rootScope) {
  $http.defaults.headers.common["X-UserToken"] = g_ck;
  $rootScope.isAdmin = g_user.hasRole("x_nuvo_ko.mod");
  $rootScope.isInternal = g_user.hasRole("x_nuvo_ko.internal");
});

export { mod };
