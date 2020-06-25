/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony import */ var _directives_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _styles_prettify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var _styles_prettify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_prettify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_mobile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var _styles_mobile_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_mobile_css__WEBPACK_IMPORTED_MODULE_6__);








var mod = angular.module("kmapp", ["ngSanitize", "ui.router"]).config(_views_index__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(_directives_index__WEBPACK_IMPORTED_MODULE_0__["directiveSetup"])(mod);
Object(_services_index__WEBPACK_IMPORTED_MODULE_1__["serviceSetup"])(mod);
Object(_filter__WEBPACK_IMPORTED_MODULE_2__["filterSetup"])(mod);

mod.$inject = ["$http", "$rootScope"];
mod.run(function ($http, $rootScope) {
  $http.defaults.headers.common["X-UserToken"] = g_ck;
  $rootScope.isAdmin = g_user.hasRole("x_nuvo_ko.mod");
  $rootScope.isInternal = g_user.hasRole("x_nuvo_ko.internal");
});




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directiveSetup", function() { return directiveSetup; });
/* harmony import */ var _answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _answerPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _questionPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _votes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);












function directiveSetup(mod) {
  mod.directive("answer", _answer__WEBPACK_IMPORTED_MODULE_0__["answer_def"]);
  mod.directive("answerpreview", _answerPreview__WEBPACK_IMPORTED_MODULE_1__["answer_preview_def"]);
  mod.directive("banner", _banner__WEBPACK_IMPORTED_MODULE_2__["banner_def"]);
  mod.directive("comments", _comments__WEBPACK_IMPORTED_MODULE_3__["comments_def"]);
  mod.directive("editor", _editor__WEBPACK_IMPORTED_MODULE_4__["editor_def"]);
  mod.directive("main", _main__WEBPACK_IMPORTED_MODULE_5__["main_def"]);
  mod.directive("questionpreview", _questionPreview__WEBPACK_IMPORTED_MODULE_6__["question_preview_def"]);
  mod.directive("results", _results__WEBPACK_IMPORTED_MODULE_7__["results_def"]);
  mod.directive("search", _search__WEBPACK_IMPORTED_MODULE_8__["search_def"]);
  mod.directive("tag", _tag__WEBPACK_IMPORTED_MODULE_9__["tag_def"]);
  mod.directive("votes", _votes__WEBPACK_IMPORTED_MODULE_10__["votes_def"]);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answer_def", function() { return answer_def; });
/* harmony import */ var _templates_answer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _templates_answer_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_answer_html__WEBPACK_IMPORTED_MODULE_0__);


function answer_def() {
  var answer = {
    template: _templates_answer_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: answer_ctrl,
    controllerAs: "vm",
    scope: false
  };
  answer_ctrl.$inject = ["$scope"];

  function answer_ctrl($scope) {
    //Extract answer data and question ID from parent question
    var vm = this;
    for (var param in $scope.answer) vm[param] = $scope.answer[param];
    vm.question_id = $scope.$parent.vm.question_id;
  }

  return answer;
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-horizontal answer\">\n  <votes></votes>\n\n  <div class=\"answer-container wrapper-vertical\">\n    <div ng-bind-html=\"vm.answer | renderHtml\"></div>\n    <div class=\"info\">\n      <span>Answered by</span>\n      <span class=\"user\">{{vm.author}}</span>\n      <span>on</span>\n      <span class=\"time\" ng-bind=\"vm.time | formatDate\"></span>\n    </div>\n\n    <div class=\"info edit-button\" ng-class='{\"hide\":!vm.isAuthor}'>\n      <span>\n        <a\n          class=\"ui-link\"\n          ui-sref='edit({qid:\"{{vm.question_id}}\",aid:\"{{vm.answer_id}}\"})'\n          >Edit</a\n        >\n      </span>\n    </div>\n\n    <comments></comments>\n  </div>\n</div>\n";

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answer_preview_def", function() { return answer_preview_def; });
/* harmony import */ var _templates_answerPreview_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _templates_answerPreview_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_answerPreview_html__WEBPACK_IMPORTED_MODULE_0__);

function answer_preview_def() {
  var preview = {
    controller: preview_ctrl,
    controllerAs: "vm",
    scope: false,
    template: _templates_answerPreview_html__WEBPACK_IMPORTED_MODULE_0___default.a
  };
  preview_ctrl.$inject = ["$scope"];
  function preview_ctrl($scope) {
    var vm = this;
    for (var param in $scope.preview) vm[param] = $scope.preview[param];
  }

  return preview;
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-horizontal\" style=\"align-items: center;\">\n  <div class=\"wrapper-vertical\">\n    <div class=\"question\">\n      <a ui-sref='question({id:\"{{vm.question_id}}\"})' class=\"ui-link\">\n        <h4 class=\"question-title\">Q: {{vm.question}}</h4>\n      </a>\n    </div>\n    <div class=\"wrapper-horizontal\">\n      <div ng-repeat=\"tag in vm.tags\">\n        <tag></tag>\n      </div>\n    </div>\n\n    <div class=\"wrapper-horizontal\">\n      <div class=\"community-info\">\n        <div class=\"info-container\">\n          <div class=\"value\">{{vm.votes}}</div>\n          <div>votes</div>\n        </div>\n      </div>\n      <div class=\"wrapper-vertical\" style=\"justify-content: center;\">\n        <div>\n          <div ng-bind-html=\"vm.answer | renderHtml\"></div>\n        </div>\n        <div>\n          <span>You answered: </span>\n          <span class=\"time\" ng-bind=\"vm.time | formatDate\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner_def", function() { return banner_def; });
/* harmony import */ var _templates_banner_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _templates_banner_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_banner_html__WEBPACK_IMPORTED_MODULE_0__);

function banner_def() {
  var banner = {
    template: _templates_banner_html__WEBPACK_IMPORTED_MODULE_0___default.a,
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"mobile-menu\"\n  ng-class='{\"hide\":!mobile.menu}'\n  ng-click=\"mobile.menu = false\"\n>\n  <div class=\"mobile-menu-item\">\n    <a ui-sref=\"home\" class=\"ui-link\">\n      <div>Home</div>\n    </a>\n  </div>\n  <div class=\"mobile-menu-item\">\n    <a ui-sref=\"ask\" class=\"ui-link\">\n      <div>New Question</div>\n    </a>\n  </div>\n  <div class=\"mobile-menu-item\">\n    <a ui-sref=\"questions\" class=\"ui-link\">\n      <div>Questions</div>\n    </a>\n  </div>\n  <div class=\"mobile-menu-item\">\n    <a ui-sref=\"tags\" class=\"ui-link\">\n      <div>Tags</div>\n    </a>\n  </div>\n  <div class=\"mobile-menu-item\">\n    <a ui-sref=\"profile\" class=\"ui-link\">\n      <div>Profile</div>\n    </a>\n  </div>\n</div>\n<div class=\"banner wrapper-horizontal centered\">\n  <div class=\"menu mobile\">\n    <button ng-click=\"mobile.menu = mobile.menu == true? false:true\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n  </div>\n  <a ui-sref=\"home\" class=\"ui-link banner-btn mobile-hide\">\n    <i class=\"fa fa-lg fa-home\"></i>\n  </a>\n  <a ui-sref=\"ask\" class=\"ui-link banner-btn mobile-hide\">\n    <span><i class=\"fa fa-pen\"></i></span>\n    <span class=\"small-hide\">Ask a Question</span>\n  </a>\n\n  <div class=\"center-width wrapper-horizontal centered search-container\">\n    <search class=\"search\"></search>\n  </div>\n  <a ui-sref=\"profile\" class=\"ui-link banner-btn profile-btn mobile-hide\">\n    <div>{{vm.initials}}</div>\n  </a>\n  <i\n    class=\"fa fa-bell menu-btn mobile-hide\"\n    style=\"font-size: 1.7em;\"\n    ng-click=\"vm.openNotifications()\"\n    id=\"notification-bell\"\n  >\n    <div class=\"notifications-num\" ng-show=\"vm.unread&gt;0\">{{vm.unread}}</div>\n    <div\n      class=\"notifications-container\"\n      ng-click=\"$event.stopPropagation()\"\n      ng-show=\"vm.showNotifications\"\n    >\n      <div\n        class=\"ko-notification\"\n        ng-class='{\"unread\": !notification.read}'\n        ng-click=\"vm.clickNotification($event, notification.qid)\"\n        ng-repeat=\"notification in vm.notifications\"\n      >\n        <div class=\"notification-title\">{{notification.title}}</div>\n        <div class=\"notification-content\">{{notification.question}}</div>\n        <div\n          class=\"notification-time\"\n          ng-bind-html=\"notification.time | formatDate\"\n        ></div>\n        <div class=\"delete\" ng-click=\"vm.deleteNotification(notification.id)\">\n          <i class=\"fa fa-times\"></i>\n        </div>\n      </div>\n    </div>\n  </i>\n  <span style=\"width: 40px;\"></span>\n</div>\n";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comments_def", function() { return comments_def; });
/* harmony import */ var _templates_comments_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _templates_comments_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_comments_html__WEBPACK_IMPORTED_MODULE_0__);

function comments_def() {
  var comments = {
    controller: comments_ctrl,
    controllerAs: "cvm",
    scope: false,
    template: _templates_comments_html__WEBPACK_IMPORTED_MODULE_0___default.a
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
    cvm.type = $scope.vm.answer_id ? "answer" : "question";
    cvm.id =
      cvm.type === "question" ? $scope.vm.question_id : $scope.vm.answer_id;

    //On Question update save data to view
    if (cvm.type === "question")
      questionService.subscribe(function (data) {
        if (data) {
          cvm.comments = data.comments;
          cvm.commenting = false;
          cvm.commentText = "";
        }
      });

    //Create comment then update the question
    cvm.postComment = function () {
      createService
        .createComment(cvm.type, cvm.id, cvm.commentText)
        .then(function () {
          if (cvm.type == "answer")
            questionService.get($scope.$parent.vm.question_id);
          else questionService.get(cvm.id);
        });
    };
  }

  return comments;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-vertical comment-container\">\n  <div ng-repeat=\"comment in cvm.comments\">\n    <div\n      class=\"comment\"\n      ng-class=\"{'hide': !cvm.expand &amp;&amp; {{$index+1}} > cvm.minifiedResults}\"\n    >\n      <span ng-bind-html=\"comment.comment\"></span>\n      <span>-</span>\n      <span class=\"user\">{{comment.author}}</span>\n      <span>on</span>\n      <span class=\"time\" ng-bind=\"comment.time | formatDate\"></span>\n    </div>\n  </div>\n</div>\n\n<div ng-class=\"{hide : cvm.commenting == false}\">\n  <form ng-submit=\"cvm.postComment()\" class=\"wrapper-vertical\">\n    <textarea\n      ng-model=\"cvm.commentText\"\n      class=\"comment-input\"\n      rows=\"2\"\n      placeholder=\"Add a comment...\"\n      required=\"true\"\n      minlength=\"5\"\n      maxlength=\"500\"\n    ></textarea>\n    <div class=\"post-wrapper\">\n      <button type=\"submit\" class=\"comment-submit\">Post</button>\n    </div>\n  </form>\n</div>\n\n<div class=\"comments-actions\">\n  <div\n    ng-click=\"cvm.expand = true\"\n    ng-class=\"{hide : cvm.expand == true || cvm.comments.length &lt;= cvm.minifiedResults}\"\n  >\n    Show more comments\n  </div>\n  <div\n    ng-click=\"cvm.commenting = !cvm.commenting\"\n    ng-class=\"{hide : cvm.commenting == true || (cvm.expand == false &amp;&amp; cvm.comments.length &gt; cvm.minifiedResults)}\"\n  >\n    Add a comment\n  </div>\n</div>\n";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editor_def", function() { return editor_def; });
/* harmony import */ var _templates_editor_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _templates_editor_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_editor_html__WEBPACK_IMPORTED_MODULE_0__);


function editor_def() {
  var editor = {
    template: _templates_editor_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: editor_ctrl,
    scope: false,
    controllerAs: "evm"
  };
  editor_ctrl.$inject = ["$scope", "$element", "attachmentService"];

  function editor_ctrl($scope, $element, attachmentService) {
    var evm = this;
    evm.uploadFiles = function (files) {
      for (var i = 0; i < files.length; i++) {
        attachmentService.upload(files.item(i)).then(insertLink);
      }

      function insertLink(data) {
        mde.value(mde.value() + "[" + data.name + "](" + data.link + ") ");
      }
    };

    evm.selectFiles = function () {
      document.querySelector(".input-file").click();
    };
    $scope.vm.editorText = "";
    //Configured drop-in editor from simplemde markdown editor
    var mde = new SimpleMDE({
      element: $element[0].querySelector(".editor"),
      parsingConfig: {
        allowAtxHeaderWithoutSpace: false,
        strikethrough: false
      },
      renderingConfig: {
        singleLineBreaks: true,
        codeSyntaxHighlighting: true
      },
      toolbar: [
        "bold",
        "italic",
        "strikethrough",
        "|",
        "heading-1",
        "heading-2",
        "|",
        "code",
        "quote",
        "|",
        "table",
        "horizontal-rule",
        "|",
        "link",
        "image",
        {
          name: "upload",
          action: evm.selectFiles,
          className: "fas fa-file-upload",
          title: "Attach Files"
        },
        "|",
        "guide"
      ],
      shortcuts: {
        toggleSideBySide: null,
        toggleFullScreen: null,
        togglePreview: null
      },
      spellChecker: false,
      status: false,
      forceSync: true
    });

    //Force update on the model when typing into the editor
    mde.codemirror.on("change", function () {
      $scope.vm.editorText = mde.value();
      if (!$scope.$$phase) $scope.$apply();
    });

    //Handling copy paste of attachments
    mde.codemirror.on("paste", function (el, event) {
      var items = (event.clipboardData || event.originalEvent.clipboardData)
        .items;

      for (var index in items) {
        var item = items[index];
        if (item.kind === "file") {
          event.preventDefault();
          var blob = item.getAsFile();
          var reader = new FileReader();
          reader.onload = function (event) {
            var encoded_url = event.target.result;
            attachmentService.uploadImage(encoded_url).then(function (url) {
              mde.value(mde.value() + "![](" + url + ")");
            });
          };
          reader.readAsDataURL(blob);
        }
      }
    });

    //Allow programatic insertion of text into the editor
    $scope.$watch("$scope.vm.editorText", function (newVal) {
      if (newVal == "" || mde.value() == "") mde.value(newVal);
    });
  }

  return editor;
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class='editor-container'>\n    <textarea class='editor' ng-model='vm.newQuestionDescription'></textarea>\n</div>\n<input type=\"file\" class=\"input-file\" multiple=\"true\"\n    onchange=\"angular.element(this).scope().evm.uploadFiles(this.files)\" ng-model='evm.files'></input>";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main_def", function() { return main_def; });
/* harmony import */ var _templates_main_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _templates_main_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_main_html__WEBPACK_IMPORTED_MODULE_0__);


function main_def() {
  return {
    template: _templates_main_html__WEBPACK_IMPORTED_MODULE_0___default.a
  };
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-horizontal\" style=\"min-height: 100%;\">\n  <div class=\"left-sidebar\">\n    <div ui-sref-active=\"active\" class=\"tab\">\n      <a ui-sref=\"home\" class=\"ui-link\">\n        <div class=\"tab-text\">Home</div>\n      </a>\n    </div>\n    <div ui-sref-active=\"active\" class=\"tab\">\n      <a ui-sref=\"questions\" class=\"ui-link\">\n        <div class=\"tab-text\">Questions</div>\n      </a>\n    </div>\n    <div ui-sref-active=\"active\" class=\"tab\">\n      <a ui-sref=\"tags\" class=\"ui-link\">\n        <div class=\"tab-text\">Tags</div>\n      </a>\n    </div>\n    <div ui-sref-active=\"active\" class=\"tab\" ng-class='{\"hide\": !isAdmin}'>\n      <a ui-sref=\"admin\" class=\"ui-link\">\n        <div class=\"tab-text\">Admin</div>\n      </a>\n    </div>\n  </div>\n  <div class=\"center-width mainbar\">\n    <ui-view></ui-view>\n  </div>\n  <div class=\"right-sidebar\"></div>\n</div>\n";

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "question_preview_def", function() { return question_preview_def; });
/* harmony import */ var _templates_questionPreview_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _templates_questionPreview_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_questionPreview_html__WEBPACK_IMPORTED_MODULE_0__);


function question_preview_def() {
  var preview = {
    controller: preview_ctrl,
    controllerAs: "vm",
    scope: false,
    template: _templates_questionPreview_html__WEBPACK_IMPORTED_MODULE_0___default.a
  };
  preview_ctrl.$inject = ["$scope"];
  function preview_ctrl($scope) {
    var vm = this;
    for (var param in $scope.preview) vm[param] = $scope.preview[param];
  }

  return preview;
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-horizontal\" style=\"align-items: center;\">\n  <div class=\"wrapper-horizontal community-info\">\n    <div class=\"info-container\">\n      <div class=\"value\">{{vm.votes}}</div>\n      <div>votes</div>\n    </div>\n    <div\n      class=\"info-container\"\n      ng-class=\"{'info-solid': vm.best_answer != null, 'info-highlight':vm.answers>0}\"\n    >\n      <div class=\"value\">{{vm.answers}}</div>\n      <div>answers</div>\n    </div>\n    <div class=\"info-container\">\n      <div class=\"value\">{{vm.views}}</div>\n      <div>views</div>\n    </div>\n  </div>\n  <div class=\"wrapper-vertical\" style=\"width: 100%;\">\n    <div class=\"question\">\n      <a ui-sref='question({id:\"{{vm.id}}\"})' class=\"ui-link\">\n        <h4 class=\"question-title\">{{vm.question}}</h4>\n      </a>\n    </div>\n    <div class=\"wrapper-horizontal\">\n      <div ng-repeat=\"tag in vm.tags\">\n        <tag></tag>\n      </div>\n    </div>\n    <div style=\"display: flex;\">\n      <span ng-class=\"{hide:!vm.internal}\" style=\"color: #ea940f;\"\n        >Internal Question</span\n      >\n      <span style=\"flex: 1;\"></span>\n      <div class=\"info\">\n        <span style=\"flex: 1;\"></span>\n        <span>Asked by</span>\n        <span class=\"user\">{{vm.author}}</span>\n        <span>on</span>\n        <span class=\"time\" ng-bind=\"vm.time | formatDate\"></span>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "results_def", function() { return results_def; });
/* harmony import */ var _templates_results_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _templates_results_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_results_html__WEBPACK_IMPORTED_MODULE_0__);

function results_def() {
  var results = {
    template: _templates_results_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    scope: true,
    controller: results_ctrl,
    controllerAs: "vm"
  };
  results_ctrl.$inject = ["$stateParams", "$scope", "resultsService"];
  function results_ctrl($stateParams, $scope, resultsService) {
    var vm = this;
    /*
        When using this results directive, method must be set in parent directive/view
        Method defines function to use when querying search results, params defines any additional
        data you wish to pass to the query
        */
    vm.method = $scope.$parent.vm.resultsMethod;
    vm.params = $scope.$parent.vm.params || {};

    vm.filter =
      $stateParams.filter || (vm.method == "search" ? "relevance" : "newest");
    vm.page = 1;

    vm.update = function () {
      resultsService
        .query(vm.method, vm.filter, vm.page, vm.params)
        .then(function (data) {
          vm.previews = data.previews;
          vm.results = data.results;
          vm.totalPages = Math.ceil(vm.results / data.pageSize);
          vm.type = data.type;
        });
    };
    vm.update();

    vm.nextPage = function () {
      vm.page++;
      vm.update();
    };
    vm.lastPage = function () {
      vm.page--;
      if (vm.page < 1) vm.page = 1;
      vm.update();
    };
  }

  return results;
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-tabs wrapper-horizontal\">\n  <div class=\"tab-spacer\"></div>\n  <button\n    ui-sref='{filter:\"relevance\"}'\n    class=\"btn\"\n    ng-class='{active: vm.filter == \"relevance\", \"hide\":vm.method!=\"search\"}'\n  >\n    Relevance\n  </button>\n  <button\n    ui-sref='{filter:\"newest\"}'\n    class=\"btn\"\n    ng-class='{active: vm.filter == \"newest\"}'\n  >\n    Newest\n  </button>\n  <button\n    ui-sref='{filter:\"unanswered\"}'\n    class=\"btn\"\n    ng-class='{active: vm.filter == \"unanswered\", \"hide\":vm.type==\"answer\"}'\n  >\n    Unanswered\n  </button>\n  <button\n    ui-sref='{filter:\"top\"}'\n    class=\"btn\"\n    ng-class='{active: vm.filter == \"top\"}'\n  >\n    Top\n  </button>\n  <div class=\"tab-spacer\" style=\"max-width: 20px;\"></div>\n</div>\n<div>\n  <div>Found {{vm.results}} {{vm.type}}s</div>\n  <div ng-class='{\"hide\":vm.results==0}'>\n    Page {{vm.page}} of {{vm.totalPages}}\n  </div>\n</div>\n<div class=\"wrapper-vertical\">\n  <div ng-class='{\"hide\":vm.type!=\"question\"}' class=\"wrapper-vertical\">\n    <questionpreview\n      ng-repeat=\"preview in vm.previews\"\n      class=\"preview\"\n    ></questionpreview>\n  </div>\n  <div ng-class='{\"hide\":vm.type!=\"answer\"}' class=\"wrapper-vertical\">\n    <answerpreview\n      ng-repeat=\"preview in vm.previews\"\n      class=\"preview\"\n    ></answerpreview>\n  </div>\n</div>\n<div\n  class=\"wrapper-horizontal\"\n  style=\"margin-top: 10px;\"\n  ng-class='{\"hide\":vm.results==0}'\n>\n  <button ng-click=\"vm.lastPage()\">Last</button>\n  <div style=\"flex: 1;\"></div>\n  <button ng-click=\"vm.nextPage()\" ng-disabled=\"vm.page == vm.totalPages\">\n    Next\n  </button>\n</div>\n";

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search_def", function() { return search_def; });
/* harmony import */ var _templates_search_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _templates_search_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_search_html__WEBPACK_IMPORTED_MODULE_0__);


function search_def() {
  var search = {
    template: _templates_search_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: search_ctrl,
    controllerAs: "vm",
    scope: true
  };
  search_ctrl.$inject = ["$state"];

  function search_ctrl($state) {
    var vm = this;
    vm.search = function () {
      $state.go("search", {
        q: vm.searchText
      });
    };
    vm.searchText = "";
  }

  return search;
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<form ng-submit=\"vm.search()\">\n  <div class=\"wrapper-horizontal centered\">\n    <input\n      type=\"text\"\n      placeholder=\"Search: \"\n      id=\"search-input\"\n      ng-model=\"vm.searchText\"\n      class=\"search-input\"\n    />\n    <button class=\"banner-btn\">\n      <i class=\"fa fa-search\"></i> <span class=\"small-hide\">Search</span>\n    </button>\n  </div>\n</form>\n";

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag_def", function() { return tag_def; });
/* harmony import */ var _templates_tag_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _templates_tag_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_tag_html__WEBPACK_IMPORTED_MODULE_0__);


function tag_def() {
  return {
    template: _templates_tag_html__WEBPACK_IMPORTED_MODULE_0___default.a
  };
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<a class=\"ui-link\" ui-sref='tag({tag:\"{{tag}}\"})'>\n  <span class=\"ko-tag\">\n    {{tag}}\n  </span>\n</a>\n";

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "votes_def", function() { return votes_def; });
/* harmony import */ var _templates_votes_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _templates_votes_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_votes_html__WEBPACK_IMPORTED_MODULE_0__);


function votes_def() {
  var votes = {
    controller: votes_ctrl,
    controllerAs: "vvm",
    scope: false,
    template: _templates_votes_html__WEBPACK_IMPORTED_MODULE_0___default.a
  };
  votes_ctrl.$inject = ["$scope", "voteService", "questionService"];
  function votes_ctrl($scope, voteService, questionService) {
    var vvm = this;
    //Directive Data
    for (var param in $scope.vm) vvm[param] = $scope.vm[param];
    vvm.type = vvm.answer_id ? "answer" : "question";
    var id = vvm.type === "question" ? vvm.question_id : vvm.answer_id;

    //On question update save data
    questionService.subscribe(function (data) {
      if (data && data.question_id == id) {
        vvm.votes = data.votes;
        vvm.starred = data.starred;
      }
    });

    //Vote in a direction
    vvm.vote = function (dir) {
      vvm.votes += dir - vvm.direction;
      vvm.direction = dir;
      voteService.vote(dir, id, vvm.type);
    };

    //Handle vote changes
    voteService.get(id, vvm.type);
    voteService.subscribe(function (data) {
      if (data.id === id) vvm.direction = data.dir;
    });

    if (vvm.type == "question") {
      //Handle Star clicked
      vvm.toggleStarred = function () {
        vvm.starred = !vvm.starred;
        questionService.toggleStarred(vvm.starred, id);
      };
    } else {
      //Handle best answer marking
      var parent = $scope.$parent.vm;
      vvm.markBestAnswer = function (type) {
        questionService
          .markBestAnswer(parent.question_id, vvm.answer_id, type)
          .then(function () {
            questionService.get(parent.question_id);
          });
      };
      vvm.best_answer = parent.best_answer === vvm.answer_id;
      vvm.best_answer_type = parent.best_answer_type;
      vvm.question_author = parent.author == g_user.getFullName();
    }
  }

  return votes;
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vote-container wrapper-vertical\">\n  <div class=\"arrow\">\n    <i\n      class=\"fa fa-2x fa-chevron-up vote-clickable\"\n      ng-click=\"vvm.vote(vvm.direction==1?0:1)\"\n      ng-class='{\"vote-active\": vvm.direction == 1}'\n    ></i>\n  </div>\n\n  <div style=\"text-align: center;\">{{vvm.votes}}</div>\n\n  <div class=\"arrow\">\n    <i\n      class=\"fa fa-2x fa-chevron-down vote-clickable\"\n      ng-click=\"vvm.vote(vvm.direction==-1?0:-1)\"\n      ng-class='{\"vote-active\": vvm.direction == -1}'\n    ></i>\n  </div>\n\n  <div\n    class=\"best-answer wrapper-vertical centered\"\n    ng-class='{\"hide\": vvm.type !== \"answer\"}'\n  >\n    <i\n      class=\"fa fa-2x fa-check\"\n      title=\"The question owner accepted this as the best answer\"\n      ng-class=\"{hide : vvm.best_answer_type !== 'accepted' || !vvm.best_answer}\"\n    ></i>\n    <i\n      class=\"fa fa-2x fa-check-circle\"\n      title=\"A moderator marked this as the best answer\"\n      ng-class=\"{hide : vvm.best_answer_type !== 'moderator' || !vvm.best_answer}\"\n    ></i>\n    <i\n      class=\"fa fa-2x fa-users\"\n      title=\"The community has voted this as the best answer\"\n      ng-class=\"{hide : vvm.best_answer_type !== 'community' || !vvm.best_answer}\"\n    ></i>\n\n    <div class=\"select-answer wrapper-horizontal\">\n      <i\n        class=\"fa fa-2x fa-check\"\n        title=\"Accept this answer\"\n        ng-class=\"{hide : (vvm.best_answer_type === 'moderator' || vvm.best_answer_type === 'community' || vvm.best_answer || !vvm.question_author) }\"\n        ng-click=\"vvm.markBestAnswer('accepted')\"\n      ></i>\n      <i\n        class=\"fa fa-2x fa-check-circle\"\n        title=\"Mark this as best answer as moderator\"\n        ng-class=\"{hide : !isAdmin || (vvm.best_answer_type == 'moderator' &amp;&amp; vvm.best_answer)}\"\n        ng-click=\"vvm.markBestAnswer('moderator')\"\n      ></i>\n    </div>\n  </div>\n\n  <div\n    class=\"star vote-clickable\"\n    ng-class='{\"active\": vvm.starred, \"hide\": vvm.type != \"question\"}'\n  >\n    <i ng-click=\"vvm.toggleStarred()\" class=\"fa fa-star\"></i>\n  </div>\n</div>\n";

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceSetup", function() { return serviceSetup; });
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _vote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var _attachment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34);









function serviceSetup(mod) {
  mod.service("voteService", _vote__WEBPACK_IMPORTED_MODULE_3__["vote_service_def"]);
  mod.service("createService", _create__WEBPACK_IMPORTED_MODULE_4__["create_service_def"]);
  mod.service("questionService", _question__WEBPACK_IMPORTED_MODULE_1__["question_service_def"]);
  mod.service("tagsService", _tag__WEBPACK_IMPORTED_MODULE_2__["tags_service_def"]);
  mod.service("resultsService", _results__WEBPACK_IMPORTED_MODULE_5__["results_service_def"]);
  mod.service("adminService", _admin__WEBPACK_IMPORTED_MODULE_6__["admin_service_def"]);
  mod.service("attachmentService", _attachment__WEBPACK_IMPORTED_MODULE_7__["attachment_service_def"]);
  mod.service("notificationService", _notification__WEBPACK_IMPORTED_MODULE_0__["notification_service_def"]);
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notification_service_def", function() { return notification_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function notification_service_def($http) {
  return {
    remove: function (id) {
      var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
        id: id
      });
      $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].deleteNotification + queryString);
    },
    markRead: function () {
      $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].markNotifications);
    },
    get: function () {
      return $http.get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].getNotifications).then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
    }
  };
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
var path = {
  searchQuestion: "/api/x_nuvo_ko/portal/search_question",
  searchTag: "/api/x_nuvo_ko/portal/search_tag",
  getTopTags: "/api/x_nuvo_ko/portal/get_top_tags",
  autofillTags: "/api/x_nuvo_ko/portal/autofill_tags",
  getQuestion: "/api/x_nuvo_ko/portal/get_question",
  vote: "/api/x_nuvo_ko/portal/vote",
  toggleStarred: "/api/x_nuvo_ko/portal/toggle_starred",
  createAnswer: "/api/x_nuvo_ko/portal/create_answer",
  createQuestion: "/api/x_nuvo_ko/portal/create_question",
  createComment: "/api/x_nuvo_ko/portal/create_comment",
  markBestAnswer: "/api/x_nuvo_ko/portal/mark_best_answer",
  getRecentQuestions: "/api/x_nuvo_ko/portal/get_recent_questions",
  getProfile: "/api/x_nuvo_ko/portal/get_profile",
  watchTag: "/api/x_nuvo_ko/portal/watch_tag",
  queryQuestions: "/api/x_nuvo_ko/portal/query_questions",
  tagIsWatched: "/api/x_nuvo_ko/portal/tag_is_watched",
  updateQuestion: "/api/x_nuvo_ko/portal/update_question",
  updateAnswer: "/api/x_nuvo_ko/portal/update_answer",
  adminGetTags: "/api/x_nuvo_ko/portal/admin_get_tags",
  adminRenameTag: "/api/x_nuvo_ko/portal/rename_tag",
  adminRemapTag: "/api/x_nuvo_ko/portal/remap_tag",
  adminGetWebhooks: "/api/x_nuvo_ko/portal/admin_get_webhooks",
  deleteWebhook: "/api/x_nuvo_ko/portal/delete_webhook",
  updateWebhook: "/api/x_nuvo_ko/portal/update_webhook",
  createWebhook: "/api/x_nuvo_ko/portal/create_webhook",
  createAttachment: "/api/now/table/x_nuvo_ko_attachments",
  eccQueue: "/api/now/table/ecc_queue",
  attachmentApi: "/api/now/v1/attachment",
  fileApi: "/api/now/v1/attachment/file",
  getNotifications: "/api/x_nuvo_ko/portal/get_notifications",
  markNotifications: "/api/x_nuvo_ko/portal/mark_notifications_read",
  deleteNotification: "/api/x_nuvo_ko/portal/delete_notification",
  adminMakeInternal: "/api/x_nuvo_ko/portal/admin_make_internal",
  adminDeleteQuestion: "/api/x_nuvo_ko/portal/admin_delete_question"
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  buildQueryString: function (params) {
    //Build the query string with template '?param1=val1&param2=val2...'
    var esc = encodeURIComponent;
    var query = Object.keys(params)
      .map(function (k) {
        return esc(k) + "=" + esc(params[k]);
      })
      .join("&");
    return "?" + query;
  },

  transformResponse: function (res) {
    return res.data.result;
  }
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "question_service_def", function() { return question_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function question_service_def($http) {
  var publicApi = {
    get: get,
    subscribe: subscribe,
    markBestAnswer: markBestAnswer,
    toggleStarred: toggleStarred
  };

  var questionSubscribers = [];

  function subscribe(callback) {
    questionSubscribers.push(callback);
  }

  function get(question_id) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      id: question_id
    });
    return $http
      .get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].getQuestion + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
      .then(function (result) {
        questionSubscribers.forEach(function (callback) {
          callback(result);
        });
        return result;
      });
  }

  function markBestAnswer(qid, aid, type) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      qid: qid,
      aid: aid,
      type: type
    });
    return $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].markBestAnswer + queryString);
  }

  function toggleStarred(starred, qid) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      starred: starred,
      qid: qid
    });
    $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].toggleStarred + queryString);
  }

  return publicApi;
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tags_service_def", function() { return tags_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function tags_service_def($http) {
  var publicApi = {
    autofillTags: autofillTags,
    getTopTags: getTopTags,
    watchTag: watchTag,
    isWatched: isWatched,
    autoSubscribe: autoSubscribe
  };

  function autofillTags(input, fullView) {
    var query = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      input: input,
      full: fullView
    });
    return $http
      .get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].autofillTags + query)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
      .then(autoTagsCallback);
  }
  var autoTagsCallback;

  function autoSubscribe(callback) {
    autoTagsCallback = callback;
  }

  function getTopTags(fullView) {
    var query = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      full: fullView
    });
    return $http.get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].getTopTags + query).then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function watchTag(tag, watch) {
    var query = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      tag: tag,
      watch: watch
    });
    return $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].watchTag + query).then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function isWatched(tag) {
    var query = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      tag: tag
    });
    return $http.get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].tagIsWatched + query).then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  return publicApi;
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vote_service_def", function() { return vote_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function vote_service_def($http) {
  var publicApi = {
    vote: vote,
    get: get,
    subscribe: subscribe
  };

  function vote(dir, id, param) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      dir: dir,
      id: id,
      param: param
    });
    $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].vote + queryString);
  }

  function get(id, param) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      id: id,
      param: param
    });
    $http
      .get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].vote + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
      .then(function (result) {
        subscribers.forEach(function (callback) {
          callback(result);
        });
      });
  }

  var subscribers = [];

  function subscribe(callback) {
    subscribers.push(callback);
  }

  return publicApi;
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_service_def", function() { return create_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function create_service_def($http) {
  var publicApi = {
    createAnswer: createAnswer,
    createQuestion: createQuestion,
    createComment: createComment,
    updateQuestion: updateQuestion,
    updateAnswer: updateAnswer
  };

  function createAnswer(answer, question_id) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      qid: question_id,
      answer: answer
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].createAnswer + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function createQuestion(question, description, tags, internal) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      question: question,
      description: description,
      tags: tags,
      internal: internal
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].createQuestion + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function createComment(param, id, comment) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      param: param,
      id: id,
      comment: comment
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].createComment + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function updateQuestion(qid, question, description, tags, internal) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      qid: qid,
      question: question,
      description: description,
      tags: tags,
      internal: internal
    });
    return $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].updateQuestion + queryString);
  }

  function updateAnswer(aid, answer) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      aid: aid,
      answer: answer
    });
    return $http.post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].updateAnswer + queryString);
  }

  return publicApi;
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "results_service_def", function() { return results_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function results_service_def($http) {
  return {
    query: function (method, filter, page, obj) {
      obj.filter = filter;
      obj.page = page;

      var suffix = (function () {
        switch (method) {
          case "all":
            return "queryQuestions";
          case "profile":
            return "getProfile";
          case "tagSearch":
            return "searchTag";
          case "search":
            return "searchQuestion";
          default:
            return "queryQuestions";
        }
      })();
      return $http
        .get(_path__WEBPACK_IMPORTED_MODULE_0__["path"][suffix] + _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(obj))
        .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
    }
  };
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin_service_def", function() { return admin_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function admin_service_def($http) {
  var publicApi = {
    getTags: getTags,
    subscribe: subscribe,
    renameTag: renameTag,
    remapTag: remapTag,
    getWebhooks: getWebhooks,
    deleteWebhook: deleteWebhook,
    createWebhook: createWebhook,
    updateWebhook: updateWebhook,
    makeInternal: makeInternal,
    deleteQuestion: deleteQuestion
  };

  function deleteWebhook(hid) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      hid: hid
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].deleteWebhook + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function createWebhook(channel, url, tags) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      channel: channel,
      url: url,
      tags: tags
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].createWebhook + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function updateWebhook(hid, channel, url, tags) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      hid: hid,
      channel: channel,
      url: url,
      tags: tags
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].updateWebhook + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  var subscribers = [];

  function subscribe(callback) {
    subscribers.push(callback);
  }

  function getTags(sort, page, search) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      sort: sort,
      page: page,
      search: search
    });

    $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].adminGetTags + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
      .then(function (result) {
        subscribers.forEach(function (callback) {
          callback(result);
        });
      });
  }

  function renameTag(tid, newName) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      tid: tid,
      newName: newName
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].adminRenameTag + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function remapTag(tid, mapTag) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      tid: tid,
      mapTag: mapTag
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].adminRemapTag + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function getWebhooks() {
    return $http.get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].adminGetWebhooks).then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function makeInternal(qid) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      qid: qid
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].adminMakeInternal + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  function deleteQuestion(qid) {
    var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
      qid: qid
    });
    return $http
      .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].adminDeleteQuestion + queryString)
      .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse);
  }

  return publicApi;
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachment_service_def", function() { return attachment_service_def; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



function attachment_service_def($http) {
  return {
    uploadImage: function (encoded_url) {
      encoded_url = encoded_url.split(";base64,");
      var type = encoded_url[0].replace("data:", "");
      var encoded_data = encoded_url[1];
      //Create a blank entry on the ko table
      return $http
        .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].createAttachment)
        .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
        .then(function (img) {
          var name =
            "ko-" +
            ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (
              c
            ) {
              return (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
              ).toString(16);
            });
          //Attach the image to it
          var data = "<request><entry><agent>KO Image Upload</agent><topic>AttachmentCreator</topic><name>"
            .concat(name, ":")
            .concat(type, "</name><source>x_nuvo_ko_attachments:")
            .concat(img.sys_id, "</source><payload>")
            .concat(encoded_data, "</payload></entry></request>");

          return $http
            .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].eccQueue, data, {
              headers: {
                "Content-Type": "text/xml",
                Accept: "application/json"
              }
            })
            .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
            .then(function (data) {
              //And then query the attachment download link
              return $http
                .get(_path__WEBPACK_IMPORTED_MODULE_0__["path"].attachmentApi + "?sysparm_query=file_name=" + name)
                .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
                .then(function (data) {
                  return data[0].download_link;
                });
            });
        });
    },

    upload: function (file) {
      //Create blank attachment entry, upload the attachment to it, and return a link
      return $http
        .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].createAttachment)
        .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
        .then(function (obj) {
          var queryString = _functions__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString({
            file_name: file.name,
            table_name: "x_nuvo_ko_attachments",
            table_sys_id: obj.sys_id
          });
          return $http
            .post(_path__WEBPACK_IMPORTED_MODULE_0__["path"].fileApi + queryString, file, {
              headers: {
                "Content-Type": file.type,
                Accept: "application/json"
              }
            })
            .then(_functions__WEBPACK_IMPORTED_MODULE_1__["default"].transformResponse)
            .then(function (data) {
              return {
                link: data.download_link,
                name: file.name
              };
            });
        });
    }
  };
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSetup", function() { return filterSetup; });
function filterSetup(mod) {
  marked.setOptions({
    breaks: true
  });

  mod.filter("renderHtml", function () {
    return function (val) {
      if (val) {
        var div = document.createElement("div");
        div.innerHTML = marked(val);
        var list = div.getElementsByTagName("code");
        for (var i = 0; i < list.length; i++) {
          if (list[i].parentNode.nodeName === "PRE") {
            list[i].innerHTML = PR.prettyPrintOne(
              list[i].innerHTML,
              null,
              true
            );
          } else {
            list[i].innerHTML = PR.prettyPrintOne(list[i].innerHTML);
          }
        }
        return div.innerHTML;
      }
      return "";
    };
  });

  mod.filter("fixAttachments", [
    "$sce",
    function ($sce) {
      let download = function (url) {
        let meta_url = url.slice(0, -5); //url without /file suffix
        let meta_request = new Request(meta_url, {
          method: "GET",
          headers: new Headers({
            "X-UserToken": window.g_ck,
            accept: "application/json"
          })
        });
        let file_request = new Request(url, {
          method: "GET",
          headers: new Headers({
            "X-UserToken": window.g_ck,
            accept: "application/json"
          })
        });
        fetch(meta_request)
          .then((res) => res.json())
          .then((d) => d.result.file_name)
          .then((file_name) => {
            fetch(file_request)
              .then((res) => res.blob())
              .then((blob) => {
                const dl = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.style.display = "none";
                a.href = dl;
                a.download = file_name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(dl);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return function (val) {
        let div = document.createElement("div");
        div.innerHTML = val;
        for (let el of div.getElementsByTagName("a")) {
          if (
            el.href.slice(0, 55) ===
            "https://nuvolodev.service-now.com/api/now/v1/attachment"
          ) {
            let url = el.href;
            el.removeAttribute("href");
            el.setAttribute("onClick", `(${download.toString()})('${url}')`);
          }
        }
        return $sce.trustAsHtml(div.innerHTML);
      };
    }
  ]);

  mod.filter("formatDate", function () {
    return function (d, local) {
      if (d) {
        if (!local) {
          d = d.replace(" ", "T") + "Z";
          d = new Date(d);
        }
        var hr = d.getHours();
        var min = d.getMinutes();
        min = ("0" + min).slice(-2);
        var mo = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ][d.getMonth()];
        var yr = d.getFullYear().toString().slice(2);
        var date = d.getDate();
        return mo + " " + date + ", '" + yr + " at " + hr + ":" + min;
      }
    };
  });

  mod.filter("formatShortDate", function () {
    return function (d, local) {
      if (d) {
        if (!local) {
          d = d.replace(" ", "T") + "Z";
          d = new Date(d);
        }
        var mo = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ][d.getMonth()];
        var yr = d.getFullYear().toString().slice(2);
        var date = d.getDate();
        return mo + " " + date + ", " + yr;
      }
    };
  });
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return routing; });
/* harmony import */ var _adminTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _adminWebhook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _ask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57);













routing.$inject = ["$stateProvider"];

function routing($stateProvider) {
  $stateProvider.state("admin_tags", Object(_adminTag__WEBPACK_IMPORTED_MODULE_0__["admin_tag_view_def"])());
  $stateProvider.state("admin", Object(_admin__WEBPACK_IMPORTED_MODULE_1__["admin_view_def"])());
  $stateProvider.state("admin_webhook", Object(_adminWebhook__WEBPACK_IMPORTED_MODULE_2__["admin_webhook_view_def"])());
  $stateProvider.state("ask", Object(_ask__WEBPACK_IMPORTED_MODULE_3__["ask_view_def"])());
  $stateProvider.state("edit", Object(_edit__WEBPACK_IMPORTED_MODULE_4__["edit_view_def"])());
  $stateProvider.state("home", Object(_home__WEBPACK_IMPORTED_MODULE_5__["home_view_def"])());
  $stateProvider.state("profile", Object(_profile__WEBPACK_IMPORTED_MODULE_6__["profile_view_def"])());
  $stateProvider.state("question", Object(_question__WEBPACK_IMPORTED_MODULE_7__["question_view_def"])());
  $stateProvider.state("questions", Object(_questions__WEBPACK_IMPORTED_MODULE_8__["questions_view_def"])());
  $stateProvider.state("search", Object(_search__WEBPACK_IMPORTED_MODULE_9__["search_view_def"])());
  $stateProvider.state("tags", Object(_tags__WEBPACK_IMPORTED_MODULE_10__["tags_view_def"])());
  $stateProvider.state("tag", Object(_tag__WEBPACK_IMPORTED_MODULE_11__["tag_view_def"])());
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin_tag_view_def", function() { return admin_tag_view_def; });
/* harmony import */ var _templates_viewAdminTag_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _templates_viewAdminTag_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewAdminTag_html__WEBPACK_IMPORTED_MODULE_0__);

function admin_tag_view_def() {
  var view = {
    template: _templates_viewAdminTag_html__WEBPACK_IMPORTED_MODULE_0___default.a,
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


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div class='admin-modal' ng-class='{\"hide\":vm.state==\"view\"}'>\n    <div class=\"admin-modal-content center-width\">\n        <div class='rename-container'>\n            <div ng-class='{\"hide\": vm.state!=\"rename\"}'>\n                <div class='modal-text'>\n                    <div>Rename tag: <span class='ko-tag'>{{vm.editTag.name}}</span></div>\n                    <div><input ng-model='vm.updateName'></input></div>\n                </div>\n                <div>\n                    <button ng-click='vm.saveRename()'>Save</button>\n                    <button ng-click='vm.state = \"view\"'>Cancel</button>\n                </div>\n            </div>\n            <div ng-class='{\"hide\": vm.state!=\"remap\"}'>\n                <div class='modal-text'>\n                    <div> Remap tag: <span class='ko-tag'>{{vm.editTag.name}}</span> to</div>\n                    <div>\n                        <input list='tag-list' ng-model='vm.remapVal'></input>\n                        <datalist id='tag-list'>\n                            <option ng-repeat='tag in vm.remapList' value='{{tag}}'></option>\n                        </datalist>\n                    </div>\n                </div>\n                <div>\n                    <button ng-click='vm.saveRemap()'>Remap</button>\n                    <button ng-click='vm.state = \"view\"'>Cancel</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<input placeholder='Filter' ng-model='vm.filter' class='filter-tag-input'></input>\n<div>{{vm.results}} tags</div>\n<div ng-class='{\"hide\":vm.results==0}'>Page {{vm.page}} of {{vm.totalPages}}</div>\n<table class='admin-tag-table'>\n    <tr>\n        <th class='col-tag'>Tag</th>\n        <th class='col-questions'>\n            <span>Questions</span>\n            <span class='sort' ng-class='{\"active\":vm.sort==\"number\"}'>\n                <i class=\"fa fa-caret-down\" ng-click='vm.sort=\"number\"'></i>\n            </span>\n        </th>\n        <th class='col-date'>\n            <span>Created</span>\n            <span class='sort' ng-class='{\"active\":vm.sort==\"newest\"}'>\n                <i class=\"fa fa-caret-down\" ng-click='vm.sort=\"newest\"'></i>\n            </span>\n        </th>\n        <th class='col-actions'></th>\n    </tr>\n    <tr ng-repeat='item in vm.list' class='content-row'>\n        <td class='col-tag'>\n            <tag ng-init='tag = item.name'></tag>\n        </td>\n        <td class='col-questions'>{{item.count}}</td>\n        <td class='col-date' ng-bind-html='item.created | formatShortDate'></td>\n        <td class='col-actions'>\n            <div class='btn' ng-click='vm.rename(item.tid, item.name)'>Rename</div>\n            <div class='btn' ng-click='vm.remap(item.tid, item.name)'>Remap</div>\n        </td>\n    </tr>\n\n</table>\n\n<div class='wrapper-horizontal' style='margin-top:10px' ng-class='{\"hide\":vm.results==0}'>\n    <button ng-click='vm.lastPage()'>Last</button>\n    <div style='flex:1;'></div>\n    <button ng-click='vm.nextPage()' ng-disabled='vm.page == vm.totalPages'>Next</button>\n</div>";

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin_view_def", function() { return admin_view_def; });
function admin_view_def() {
  return {
    template:
      "<div><a ui-sref='admin_tags'>Tags</a></div>" +
      "<div><a ui-sref='admin_webhook'>Webhook Config</a></div>",
    url: "/admin"
  };
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin_webhook_view_def", function() { return admin_webhook_view_def; });
/* harmony import */ var _templates_viewAdminWebhook_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _templates_viewAdminWebhook_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewAdminWebhook_html__WEBPACK_IMPORTED_MODULE_0__);


function admin_webhook_view_def() {
  var view = {
    template: _templates_viewAdminWebhook_html__WEBPACK_IMPORTED_MODULE_0___default.a,
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


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div class='admin-modal' ng-class='{\"hide\":vm.state==\"view\"}'>\n    <div class=\"admin-modal-content center-width\">\n        <div class='webhook-edit'>\n            <div class='input-wrapper'>\n                <label>Channel Name</label>\n                <input ng-model='vm.hook.channel'></input>\n            </div>\n            <div class='input-wrapper'>\n                <label>Url</label>\n                <textarea ng-model='vm.hook.url' class='url-input'></textarea>\n            </div>\n            <div class='input-wrapper'>\n                <label>Tags</label>\n\n                <div class='tags-container tag-input wrapper-horizontal'>\n                    <span ng-repeat='tag in vm.hook.tags' class='ko-tag'>\n                        {{tag}} <i class=\"fa fa-times tag-delete\" ng-click='vm.removeTag(tag)'></i>\n                    </span>\n                    <input list='tag-list' ng-model='vm.newTag' class='tags-input' ng-keyPress='vm.addTag($event)'></input>\n                    <datalist id='tag-list'>\n                        <option ng-repeat='tag in vm.autofillList' value='{{tag}}'></option>\n                    </datalist>\n                </div>\n\n            </div>\n        </div>\n\n        <div class='actions'>\n            <button ng-click='vm.updateWebhook()' ng-class='{\"hide\":vm.state!=\"edit\"}'>Save</button>\n            <button ng-click='vm.createWebhook()' ng-class='{\"hide\":vm.state!=\"create\"}'>Create</button>\n            <button ng-click='vm.state=\"view\"'>Cancel</button>\n        </div>\n\n    </div>\n</div>\n\n<div class='instructions'>\n    <div class='i-general'>\n        *Channels with the name \"general\" will subscribe to all tags*\n    </div>\n    <div class='control'>\n        <div ng-class='{\"hide\": vm.instructions}' ng-click='vm.instructions = true' class='i-action'>\n            Show Instructions\n        </div>\n        <div ng-class='{\"hide\": !vm.instructions}' ng-click='vm.instructions = false' class='i-action'>\n            Hide Instructions\n        </div>\n    </div>\n    <div ng-class='{\"hide\": !vm.instructions}'>\n        Webhooks will send notifications to Microsoft Teams channels when questions tagged with specific tags are posted. To get a webhook URL, go to the target Teams channel, select more options (...), select Connectors. Search for Incoming Webhook and select configure. Fill out the options and then use the generated URL.\n    </div>\n</div>\n\n<table class='admin-webhook-table'>\n    <tr>\n        <th class='col-channel'>Channel Name</th>\n        <th class='col-tags'>Watched Tags</th>\n        <th></th>\n        <th></th>\n    </tr>\n    <tr ng-repeat='hook in vm.webhooks' class='content-row'>\n        <td class='col-channel'>{{hook.channel}}</td>\n        <td class='col-tags'>\n            <div ng-class=\"{'hide':hook.channel!='general'}\">(All tags)</div>\n            <tag ng-repeat='tag in hook.tags' ng-class=\"{'hide':hook.channel=='general'}\"></tag>\n        </td>\n        <td>\n            <div class='btn' ng-click='vm.edit(hook)'>Edit</div>\n        </td>\n        <td>\n            <div class='btn' ng-click='vm.delete(hook)'>Delete</div>\n        </td>\n    </tr>\n</table>\n<button ng-click='vm.newHook()'>New</button>";

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ask_view_def", function() { return ask_view_def; });
/* harmony import */ var _templates_viewAsk_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _templates_viewAsk_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewAsk_html__WEBPACK_IMPORTED_MODULE_0__);


function ask_view_def() {
  var ask = {
    template: _templates_viewAsk_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: ask_ctrl,
    controllerAs: "vm",
    scope: false,
    url: "/ask"
  };
  ask_ctrl.$inject = [
    "$transitions",
    "$state",
    "$element",
    "$scope",
    "createService",
    "tagsService"
  ];
  function ask_ctrl(
    $transitions,
    $state,
    $element,
    $scope,
    createService,
    tagsService
  ) {
    var vm = this;
    vm.tagList = [];
    vm.addedTag = "";
    vm.author = g_user.getFullName();
    vm.time = new Date();
    vm.review = false;

    var questionLoad = false;
    $transitions.onStart(
      {
        from: "ask"
      },
      function () {
        if (
          !questionLoad &&
          (vm.editorText != "" || vm.newQuestionTitle != undefined)
        ) {
          return confirm(
            "Are you sure you would like to leave? Changes will not be saved"
          );
        }
      }
    );

    //Post logic, go into review mode before posting to table
    vm.postNewQuestion = function () {
      if (vm.editorText.length < 10)
        alert("Description length must be at least 10 characters");
      else if (vm.editorText.length > 5000)
        alert(
          "Description length must be less than 5000 characters. Current length is " +
            vm.editorText.length +
            " characters"
        );
      else {
        if (vm.review) {
          let makeInternal = false;
          if (vm.internal && vm.internal) makeInternal = true;
          createService
            .createQuestion(
              vm.newQuestionTitle,
              vm.editorText,
              vm.tagList,
              makeInternal
            )
            .then(function (id) {
              questionLoad = true;
              $state.go("question", {
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
        if (vm.autofillList.indexOf(tag.name) == -1)
          vm.autofillList.push(tag.name);
      });
    });

    $scope.$watch("vm.addedTag", function (newVal) {
      if (newVal != "") tagsService.autofillTags(newVal);
    });

    $element[0].querySelector(".tags-input").on("blur", function () {
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


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class='post-review' ng-style='{\"display\" : vm.review ? \"block\" : \"none\"}'>\n    <div class='review-content center-width'>\n        <h2>Review Question</h2>\n        <hr>\n        </hr>\n        <div class='question-container wrapper-vertical' style='width:auto'>\n            <div>\n                <div class='title'>\n                    <h4>{{vm.newQuestionTitle}}</h4>\n                </div>\n                <div ng-bind-html='vm.editorText | renderHtml'></div>\n            </div>\n            <div>\n                <div class='tags-container wrapper-horizontal'>\n                    <span ng-repeat='tag in vm.tagList'>\n                        <span class='ko-tag'>\n                            {{tag}}\n                        </span>\n                    </span>\n                </div>\n                <div class='info wrapper-horizontal'>\n                    Asked by {{vm.author}} on&#160;<span ng-bind='vm.time | formatDate:true'></span>\n                </div>\n            </div>\n        </div>\n        <hr>\n        </hr>\n        <div class='wrapper-horizontal'>\n            <button ng-click='vm.review = false'>Continue Editing</button>\n            <div style='flex-grow:1'></div>\n            <button ng-click='vm.postNewQuestion()'>Post Question</button>\n        </div>\n    </div>\n</div>\n<div>\n    <form ng-submit='vm.postNewQuestion()'>\n        <div>\n            <div class='title'>\n                <h3>Ask a Question</h3>\n            </div>\n            <div class='title'>\n                <h4>Title</h4>\n                <input class='title-input' name='title' rows=\"15\" ng-model='vm.newQuestionTitle' ng-minlength='0' minlength='10' maxlength='150' required='true'></input>\n            </div>\n            <div ng-class=\"{hide:!isInternal}\" class='internal-input'>\n                <h4 class='title'>Internal</h4>\n                <span style='width:10px'></span>\n                <input type='checkbox' ng-model='vm.internal'>\n            </div>\n            <div class='title'>\n                <h4>Tags</h4>\n            </div>\n\n            <div class='tags-container tag-input wrapper-horizontal'>\n                <span ng-repeat='tag in vm.tagList' class='ko-tag'>\n                    {{tag}} <i class=\"fa fa-times tag-delete\" ng-click='vm.removeTag(tag)'></i>\n                </span>\n                <input list='tag-list' ng-keyPress='vm.testAddTag($event)' ng-model='vm.addedTag' class='tags-input'></input>\n                <datalist id='tag-list'>\n                    <option ng-repeat='tag in vm.autofillList' value='{{tag}}'></option>\n                </datalist>\n            </div>\n\n            <div class='title'>\n                <h4>Description</h4>\n            </div>\n            <div class='wrapper-vertical'>\n                <editor></editor>\n            </div>\n            <div class='title'>\n                <h3>Preview</h3>\n            </div>\n            <div class='preview question-preview wrapper-vertical'>\n\n                <div class='question-container wrapper-vertical' style='width:auto'>\n                    <div>\n                        <div class='title'>\n                            <h4>{{vm.newQuestionTitle}}</h4>\n                        </div>\n                        <div ng-bind-html='vm.editorText | renderHtml'></div>\n                    </div>\n                    <div>\n                        <div class='tags-container wrapper-horizontal'>\n                            <span ng-repeat='tag in vm.tagList'>\n                                <span class='ko-tag'>\n                                    {{tag}}\n                                </span>\n                            </span>\n                        </div>\n                        <div class='info wrapper-horizontal'>\n                            Asked by {{vm.author}} on&#160;<span ng-bind='vm.time | formatDate:true'></span>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class='post-wrapper'>\n                <button type='submit'>Post</button>\n            </div>\n        </div>\n    </form>\n</div>";

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_view_def", function() { return edit_view_def; });
/* harmony import */ var _templates_viewEdit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _templates_viewEdit_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewEdit_html__WEBPACK_IMPORTED_MODULE_0__);

function edit_view_def() {
  var edit = {
    template: _templates_viewEdit_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: edit_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/questions/{qid}/edit?aid"
  };
  edit_ctrl.$inject = [
    "$stateParams",
    "$scope",
    "$element",
    "$state",
    "questionService",
    "createService",
    "tagsService"
  ];
  function edit_ctrl(
    $stateParams,
    $scope,
    $element,
    $state,
    questionService,
    createService,
    tagsService
  ) {
    var vm = this;
    vm.aid = $stateParams.aid;
    vm.qid = $stateParams.qid;
    vm.type = vm.aid === undefined ? "q" : "a";
    vm.noText = false;

    //Load the question or answer data
    questionService.get(vm.qid).then(function (data) {
      if (!data) vm.noText = true;
      else if (vm.type == "a") {
        for (var i = 0; i < data.answers.length; i++) {
          if (data.answers[i].answer_id == vm.aid)
            vm.editorText = data.answers[i].answer;
        }
      } else if (vm.type == "q" && data.question) {
        vm.questionTitle = data.question;
        vm.tagList = data.tags;
        vm.editorText = data.description;
        vm.internal = data.internal;
      }
      if (!vm.editorText) vm.noText = true;
    });

    //Post new data to tables, reload question page
    vm.update = function () {
      function reload() {
        $state.go("question", {
          id: vm.qid
        });
      }
      if (vm.editorText.length < 10)
        alert(
          (vm.type == "q" ? "Description" : "Answer") +
            " length must be at least 10 characters"
        );
      else if (vm.editorText.length > 5000)
        alert(
          (vm.type == "q" ? "Description" : "Answer") +
            " length must be less than 5000 characters. Current length is " +
            vm.editorText.length +
            " characters"
        );
      else {
        if (vm.type == "q") {
          let makeInternal = false;
          if (vm.internal && vm.internal) makeInternal = true;
          createService
            .updateQuestion(
              vm.qid,
              vm.questionTitle,
              vm.editorText,
              vm.tagList,
              makeInternal
            )
            .then(reload);
        } else createService.updateAnswer(vm.aid, vm.editorText).then(reload);
      }
    };

    //Again, logic for a tag input
    vm.autofillList = [];
    tagsService.autoSubscribe(function (tags) {
      tags.forEach(function (tag) {
        if (vm.autofillList.indexOf(tag.name) == -1)
          vm.autofillList.push(tag.name);
      });
    });

    $scope.$watch("vm.addedTag", function (newVal) {
      if (newVal != "") tagsService.autofillTags(newVal);
    });

    $element[0].querySelector(".tags-input").on("blur", function () {
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

  return edit;
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div ng-class='{\"hide\":!vm.noText}'>\n    <span>No</span>\n    <span>{{vm.type=='q'?'question':'answer'}}</span>\n    <span>was found with that id.</span>\n</div>\n<div ng-class='{\"hide\":vm.noText}'>\n    <form ng-submit='vm.update()'>\n        <div class='wrapper-vertical'>\n            <div ng-class='{\"hide\":vm.type!=\"q\"}'>\n                <div class='title'>\n                    <h4>Title</h4>\n                    <input class='title-input' rows=\"15\" ng-model='vm.questionTitle' ng-minlength='0' minlength='10' maxlength='150' ng-required='{{vm.type==\"q\"?true:false}}'></input>\n                </div>\n\n                <div class='title'>\n                    <h4>Tags</h4>\n                </div>\n\n                <div ng-class=\"{hide:!isInternal}\" class='internal-input'>\n                    <h4 class='title'>Internal</h4>\n                    <span style='width:10px'></span>\n                    <input type='checkbox' ng-model='vm.internal'>\n                </div>\n\n                <div class='tags-container tag-input wrapper-horizontal'>\n                    <span ng-repeat='tag in vm.tagList' class='ko-tag'>\n                        {{tag}} <i class=\"fa fa-times tag-delete\" ng-click='vm.removeTag(tag)'></i>\n                    </span>\n                    <input list='tag-list' ng-keyPress='vm.testAddTag($event)' ng-model='vm.addedTag' class='tags-input'></input>\n                    <datalist id='tag-list'>\n                        <option ng-repeat='tag in vm.autofillList' value='{{tag}}'></option>\n                    </datalist>\n                </div>\n\n                <div class='title'>\n                    <h4>Description</h4>\n                </div>\n            </div>\n            <div class='title' ng-class='{\"hide\":vm.type!=\"a\"}'>\n                <h4>Answer</h4>\n            </div>\n            <div class='wrapper-vertical'>\n                <editor></editor>\n            </div>\n\n            <div class='title'>\n                <h4>Preview</h4>\n            </div>\n            <div class='preview question-preview wrapper-vertical'>\n\n                <div class='question-container wrapper-vertical' style='width:auto'>\n                    <div class='title' ng-class='{\"hide\":vm.type!=\"q\"}'>\n                        <h4>{{vm.questionTitle}}</h4>\n                    </div>\n                    <div ng-bind-html='vm.editorText | renderHtml'></div>\n                    <div class='tags-container wrapper-horizontal' ng-class='{\"hide\":vm.type!=\"q\"}'>\n                        <span ng-repeat='tag in vm.tagList'>\n                            <span class='ko-tag'>\n                                {{tag}}\n                            </span>\n                        </span>\n                    </div>\n                </div>\n\n            </div>\n\n\n\n\n            <div class='post-wrapper'>\n                <button type=\"submit\">Update</button>\n            </div>\n        </div>\n    </form>\n</div>";

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home_view_def", function() { return home_view_def; });
/* harmony import */ var _templates_viewHome_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _templates_viewHome_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewHome_html__WEBPACK_IMPORTED_MODULE_0__);

function home_view_def() {
  var summary = {
    template: _templates_viewHome_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: summary_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/home"
  };
  summary_ctrl.$inject = ["tagsService", "resultsService"];
  function summary_ctrl(tagsService, resultsService) {
    var vm = this;

    //Most popular tags (top 1/2 of page)
    tagsService.getTopTags().then(function (data) {
      vm.allTags = data;
    });

    //recent questions (bottom 1/2 of page)
    resultsService.query("all", "newest", "1", {}).then(function (data) {
      vm.recents = data.previews;
    });
  }
  return summary;
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 style=\"color: var(--nuvolo-dark-blue);\">Common Tags</h3>\n  <div id=\"topic-overview\">\n    <div class=\"topic-card\" ng-repeat=\"tag in vm.allTags\">\n      <a ui-sref='tag({tag:\"{{tag.name}}\"})' class=\"ui-link\">\n        <div class=\"wrapper-horizontal\">\n          <div class=\"ko-tag\">{{tag.name}}</div>\n        </div>\n        <span>Questions: <span>{{tag.count}}</span></span>\n      </a>\n    </div>\n  </div>\n  <h3 style=\"color: var(--nuvolo-dark-blue);\">Recent Questions</h3>\n  <div class=\"wrapper-vertical\">\n    <questionpreview\n      ng-repeat=\"preview in vm.recents\"\n      class=\"preview\"\n    ></questionpreview>\n  </div>\n  <button style=\"margin-top: 5px;\" ui-sref=\"questions\">See More</button>\n</div>\n";

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile_view_def", function() { return profile_view_def; });
/* harmony import */ var _templates_viewProfile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _templates_viewProfile_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewProfile_html__WEBPACK_IMPORTED_MODULE_0__);

function profile_view_def() {
  var profile = {
    template: _templates_viewProfile_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: profile_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/profile?tab?filter"
  };

  profile_ctrl.$inject = ["$stateParams"];
  function profile_ctrl($stateParams) {
    var vm = this;
    vm.tab = $stateParams.tab || "questions";

    vm.resultsMethod = "profile";
    vm.params = {
      type: vm.tab
    };
  }

  return profile;
}


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-tabs wrapper-horizontal\">\n  <div class=\"tab-spacer\" style=\"max-width: 20px;\"></div>\n  <button\n    ui-sref='profile({tab:\"questions\"})'\n    class=\"btn\"\n    ng-class='{active: vm.tab == \"questions\"}'\n  >\n    Questions\n  </button>\n  <button\n    ui-sref='profile({tab:\"answers\"})'\n    class=\"btn\"\n    ng-class='{active: vm.tab == \"answers\"}'\n  >\n    Answers\n  </button>\n  <button\n    ui-sref='profile({tab:\"starred\"})'\n    class=\"btn\"\n    ng-class='{active: vm.tab == \"starred\"}'\n  >\n    Starred\n  </button>\n  <button\n    ui-sref='profile({tab:\"tags\"})'\n    class=\"btn\"\n    ng-class='{active: vm.tab == \"tags\"}'\n  >\n    Watched Tags\n  </button>\n  <div class=\"tab-spacer\"></div>\n</div>\n<results></results>\n";

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "question_view_def", function() { return question_view_def; });
/* harmony import */ var _templates_viewQuestion_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _templates_viewQuestion_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewQuestion_html__WEBPACK_IMPORTED_MODULE_0__);

function question_view_def() {
  var summary = {
    template: _templates_viewQuestion_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: summary_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/questions/{id}"
  };
  summary_ctrl.$inject = [
    "$transitions",
    "$stateParams",
    "questionService",
    "createService",
    "adminService"
  ];
  function summary_ctrl(
    $transitions,
    $stateParams,
    questionService,
    createService,
    adminService
  ) {
    var vm = this;
    vm.question_id = $stateParams.id;
    vm.noQuestion = false;

    $transitions.onStart(
      {
        from: "question"
      },
      function () {
        if (vm.editorText != "") {
          return confirm(
            "Are you sure you would like to leave? Changes will not be saved"
          );
        }
      }
    );

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
      if (vm.editorText.length < 10)
        alert("Answer length must be at least 10 characters");
      else if (vm.editorText.length > 5000)
        alert(
          "Answer length must be less than 5000 characters. Current length is " +
            vm.editorText.length +
            " characters"
        );
      else {
        createService
          .createAnswer(vm.editorText, vm.question_id)
          .then(function (data) {
            vm.editorText = "";
            vm.answers = data.answers;
            sortAnswers();
          });
      }
    };

    vm.makeInternal = function () {
      adminService.makeInternal(vm.question_id).then(() => {
        window.location.reload();
      });
    };

    vm.deleteQuestion = function () {
      if (confirm("Are you sure you would like to delete this question?")) {
        adminService.deleteQuestion(vm.question_id).then(() => {
          alert("Question deleted");
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


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<div ng-class='{\"hide\":!vm.noQuestion}'>\n  No question with the id {{vm.question_id}} was found\n</div>\n<div ng-class='{\"hide\":vm.noQuestion}'>\n  <div class=\"wrapper-horizontal\">\n    <votes></votes>\n\n    <div class=\"question-container wrapper-vertical\">\n      <div>\n        <div class=\"question-title\">\n          <h4>{{vm.question}}</h4>\n        </div>\n        <div ng-bind-html=\"vm.description | renderHtml | fixAttachments\"></div>\n      </div>\n      <div>\n        <div class=\"tags-container wrapper-horizontal\">\n          <span ng-repeat=\"tag in vm.tags\">\n            <tag></tag>\n          </span>\n        </div>\n        <div style=\"display: flex;\">\n          <span\n            ng-class=\"{hide:!vm.internal}\"\n            style=\"color: #ea940f; margin-right: 5px;\"\n            >Internal Question</span\n          >\n          <span\n            ng-class=\"{hide:vm.internal || !isAdmin}\"\n            ng-click=\"vm.makeInternal()\"\n            class=\"internalize\"\n            >Make Internal</span\n          >\n          <span\n            ng-class=\"{hide:!isAdmin}\"\n            ng-click=\"vm.deleteQuestion()\"\n            class=\"internalize\"\n            >Delete Question</span\n          >\n          <span style=\"flex: 1;\"></span>\n          <div class=\"info\">\n            <span>Asked by</span>\n            <span class=\"user\">{{vm.author}}</span>\n            <span>on</span>\n            <span class=\"time\" ng-bind=\"vm.time | formatDate\"></span>\n          </div>\n        </div>\n        <div class=\"info edit-button\" ng-class='{\"hide\":!vm.isAuthor}'>\n          <span>\n            <a class=\"ui-link\" ui-sref='edit({qid:\"{{vm.question_id}}\"})'\n              >Edit</a\n            >\n          </span>\n        </div>\n      </div>\n      <comments></comments>\n    </div>\n  </div>\n  <div class=\"answers-container\">\n    <div ng-repeat=\"answer in vm.answers\">\n      <answer ng-attr-id=\"{{ 'answer-' + answer.answer_id }}\"></answer>\n    </div>\n  </div>\n  <div>\n    <form ng-submit=\"vm.postNewAnswer()\">\n      <div class=\"wrapper-vertical\">\n        <div>\n          <h3>Add an Answer</h3>\n        </div>\n        <div class=\"wrapper-vertical\">\n          <editor></editor>\n        </div>\n        <div ng-class=\"{hide: vm.newAnswerText.length == 0}\">\n          <div class=\"preview wrapper-vertical\">\n            <div\n              ng-bind-html=\"vm.editorText | renderHtml\"\n              class=\"question-container\"\n            ></div>\n          </div>\n\n          <div class=\"post-wrapper\">\n            <button type=\"submit\">Post</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions_view_def", function() { return questions_view_def; });
function questions_view_def() {
  var results = {
    template: "<results></results>",
    scope: false,
    url: "/questions?filter",
    controller: questions_ctrl,
    controllerAs: "vm"
  };

  function questions_ctrl() {
    var vm = this;
    vm.resultsMethod = "all";
  }

  return results;
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search_view_def", function() { return search_view_def; });
/* harmony import */ var _templates_viewSearch_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _templates_viewSearch_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewSearch_html__WEBPACK_IMPORTED_MODULE_0__);

function search_view_def() {
  var page = {
    template: _templates_viewSearch_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: page_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/search?q?filter"
  };

  page_ctrl.$inject = ["$stateParams"];
  function page_ctrl($stateParams) {
    var vm = this;
    vm.searchPhrase = $stateParams.q;
    vm.resultsMethod = "search";
    vm.params = {
      phrase: vm.searchPhrase
    };
  }

  return page;
}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<h3>Search Results for \"{{vm.searchPhrase}}\"</h3>\n<results></results>\n";

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tags_view_def", function() { return tags_view_def; });
/* harmony import */ var _templates_viewTags_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _templates_viewTags_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewTags_html__WEBPACK_IMPORTED_MODULE_0__);

function tags_view_def() {
  var view = {
    template: _templates_viewTags_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: tags_ctrl,
    controllerAs: "vm",
    scope: true,
    url: "/tags"
  };

  tags_ctrl.$inject = ["$scope", "tagsService"];
  function tags_ctrl($scope, tagsService) {
    var vm = this;
    vm.tagList = [];

    //Functions for searching using filter box
    tagsService.autoSubscribe(function (tags) {
      vm.tagList = tags;
    });
    vm.filter = "";
    $scope.$watch("vm.filter", function (newVal) {
      if (newVal != "") tagsService.autofillTags(newVal, true);
      else getTop();
    });

    function getTop() {
      tagsService.getTopTags(true).then(function (data) {
        vm.tagList = data;
      });
    }
    getTop();
  }

  return view;
}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<input placeholder='Filter tags: ' ng-model='vm.filter' class='filter-tag-input'></input>\n<div class='tag-view'>\n    <div class='topic-card' ng-repeat='tag in vm.tagList'>\n        <a ui-sref='tag({tag:\"{{tag.name}}\"})' class='ui-link'>\n            <div class='wrapper-horizontal'>\n                <div class='ko-tag'>{{tag.name}}</div>\n            </div>\n            <span>Questions: <span>{{tag.count}}</span></span>\n        </a>\n    </div>\n</div>";

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag_view_def", function() { return tag_view_def; });
/* harmony import */ var _templates_viewTag_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _templates_viewTag_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_viewTag_html__WEBPACK_IMPORTED_MODULE_0__);

function tag_view_def() {
  var page = {
    url: "/tag/:tag?filter",
    template: _templates_viewTag_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: page_ctrl,
    controllerAs: "vm",
    scope: true
  };

  page_ctrl.$inject = ["$stateParams", "tagsService"];
  function page_ctrl($stateParams, tagsService) {
    var vm = this;
    vm.tag = $stateParams.tag;
    vm.watched = false;

    vm.resultsMethod = "tagSearch";
    vm.params = {
      tag: vm.tag
    };

    tagsService.isWatched(vm.tag).then(function (data) {
      vm.watched = data;
    });

    vm.watch = function (watch) {
      tagsService.watchTag(vm.tag, watch);
      vm.watched = watch;
    };
  }
  return page;
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<h3>Questions tagged \"{{vm.tag}}\"</h3>\n<button ng-class=\"{hide: vm.watched == true}\" ng-click=\"vm.watch(true)\">\n  <i class=\"fa fa-eye\"></i> Watch Tag\n</button>\n<button ng-class=\"{hide: vm.watched == false}\" ng-click=\"vm.watch(false)\">\n  <i class=\"fa fa-eye-slash\"></i> Unwatch Tag\n</button>\n<results></results>\n";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(60);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(62)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// Module
exports.push([module.i, "/**\n * @license\n * Copyright (C) 2015 Google Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n/* Pretty printing styles. Used with prettify.js. */\n\n/* SPAN elements with the classes below are added by prettyprint. */\n.pln {\n  color: #000;\n} /* plain text */\n\n@media screen {\n  .str {\n    color: #080;\n  } /* string content */\n  .kwd {\n    color: #008;\n  } /* a keyword */\n  .com {\n    color: #800;\n  } /* a comment */\n  .typ {\n    color: #606;\n  } /* a type name */\n  .lit {\n    color: #066;\n  } /* a literal value */\n  /* punctuation, lisp open bracket, lisp close bracket */\n  .pun,\n  .opn,\n  .clo {\n    color: #660;\n  }\n  .tag {\n    color: #008;\n  } /* a markup tag name */\n  .atn {\n    color: #606;\n  } /* a markup attribute name */\n  .atv {\n    color: #080;\n  } /* a markup attribute value */\n  .dec,\n  .var {\n    color: #606;\n  } /* a declaration; a variable name */\n  .fun {\n    color: red;\n  } /* a function name */\n}\n\n/* Use higher contrast and text-weight for printable form. */\n@media print, projection {\n  .str {\n    color: #060;\n  }\n  .kwd {\n    color: #006;\n    font-weight: bold;\n  }\n  .com {\n    color: #600;\n    font-style: italic;\n  }\n  .typ {\n    color: #404;\n    font-weight: bold;\n  }\n  .lit {\n    color: #044;\n  }\n  .pun,\n  .opn,\n  .clo {\n    color: #440;\n  }\n  .tag {\n    color: #006;\n    font-weight: bold;\n  }\n  .atn {\n    color: #404;\n  }\n  .atv {\n    color: #060;\n  }\n}\n\n/* Specify class=linenums on a pre to get line numbering */\nol.linenums {\n  margin-top: 0;\n  margin-bottom: 0;\n} /* IE indents via margin-left */\n", ""]);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(64);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(62)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// Module
exports.push([module.i, ":root {\n  --nuvolo-light-blue: #0cb2da;\n  --nuvolo-dark-blue: #0c3561;\n}\n\nbody {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\nh6.announcement {\n  background: #2c3e50;\n  padding: 16px;\n  margin: 0;\n  color: #ecf0f1;\n  text-align: center;\n}\n\n/*----------------------\n---Overall Format CSS---\n----------------------*/\n\n.mobile {\n  display: none;\n}\n\n.centered {\n  justify-content: center;\n  align-items: center;\n}\n\n.center-width {\n  max-width: 800px;\n  min-width: 400px;\n  width: 100%;\n}\n\n.hide {\n  display: none !important;\n}\n\n.wrapper-horizontal {\n  display: flex;\n  flex-direction: row;\n}\n\n.wrapper-vertical {\n  display: flex;\n  flex-direction: column;\n}\n\n.ui-link {\n  color: inherit;\n  text-decoration: none !important;\n}\n\n.ui-link:hover {\n  color: inherit;\n  text-decoration: none !important;\n  cursor: pointer;\n}\n\n.post-wrapper {\n  margin-left: 5px;\n  margin-top: 3px;\n  width: 80px;\n  display: flex;\n  flex-direction: row;\n}\n\n.post-wrapper button {\n  flex: 1;\n}\n\n.user {\n  color: mediumblue;\n}\n\n.time {\n  color: grey;\n}\n\n/*MAIN PAGE CSS*/\n@media (max-width: 750px) {\n  .left-sidebar {\n    display: none;\n  }\n\n  .right-sidebar {\n    display: none;\n  }\n}\n\n@media (max-width: 950px) {\n  .left-sidbar {\n    max-width: 150px;\n  }\n\n  .right-sidebar {\n    display: none;\n  }\n\n  .small-hide {\n    display: none !important;\n  }\n}\n\n.left-sidebar {\n  width: calc(50% - 400px - 50px);\n  margin-right: 50px;\n  margin-left: 10px;\n  padding-top: 50px;\n  border-right: 1px solid var(--nuvolo-light-blue);\n  min-width: 150px;\n}\n\n.right-sidebar {\n  width: calc(50% - 400px);\n  min-width: 150px;\n}\n\n.left-sidebar .tab {\n  font-size: 15px;\n}\n\n.left-sidebar .tab.active {\n  background-color: var(--nuvolo-light-blue) !important;\n  font-weight: bold;\n}\n\n.left-sidebar .tab.active .tab-text {\n  color: white !important;\n}\n\n.left-sidebar .tab:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n\n.left-sidebar .tab-text {\n  color: black;\n  text-decoration: none !important;\n  padding: 5px;\n}\n\n/*Banner CSS */\n.banner {\n  background: whitesmoke;\n  flex-wrap: nowrap;\n  width: 100%;\n  padding: 10px;\n}\n\n.search-container {\n  width: 100%;\n  margin: auto;\n}\n\n.search {\n  width: 100%;\n}\n\n.banner .menu-btn:hover {\n  cursor: pointer;\n}\n\n.banner .menu-btn {\n  position: relative;\n  color: var(--nuvolo-dark-blue);\n}\n\n.banner-btn {\n  white-space: nowrap;\n  background-color: inherit !important;\n  color: var(--nuvolo-dark-blue) !important;\n  padding: 7px;\n  border-radius: 3px;\n  border: 1px solid whitesmoke !important;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 14px;\n}\n\n.banner-btn:hover {\n  border: 1px solid var(--nuvolo-light-blue) !important;\n  box-shadow: none !important;\n  user-select: none;\n}\n\n.profile-btn {\n  border-radius: 20%;\n  height: 30px;\n  min-width: 30px;\n  border: 1px solid lightgrey !important;\n  text-align: center;\n  line-height: 28px;\n  padding: 0px;\n  background-color: white !important;\n}\n\n.notifications-num {\n  position: absolute;\n  right: -7px;\n  top: -6px;\n  width: 14px;\n  height: 14px;\n  background-color: red;\n  border-radius: 50%;\n  font-size: 10px;\n  font-weight: 400;\n  text-align: center;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 900;\n  line-height: 1.3;\n  user-select: none;\n}\n\n.notifications-container {\n  position: absolute;\n  top: 30px;\n  right: 0px;\n  background-color: var(--nuvolo-light-blue);\n  border: 1px solid var(--nuvolo-dark-blue);\n  font-family: SourceSansPro, \"Helvetica Neue\", Arial;\n  font-size: 13px;\n  width: 400px;\n  min-height: 300px;\n  max-height: 500px;\n  overflow: auto;\n  z-index: 100;\n  border-radius: 5px;\n}\n\n.ko-notification {\n  padding: 8px;\n  background-color: whitesmoke;\n  min-height: 50px;\n  border-bottom: 1px solid var(--nuvolo-dark-blue);\n  position: relative;\n  user-select: none;\n  color: black !important;\n  font-family: Gilroy, sans-serif;\n}\n\n.ko-notification.unread {\n  background-color: var(--nuvolo-light-blue);\n  color: white !important;\n}\n\n.ko-notification .delete {\n  display: none;\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  color: grey;\n}\n\n.ko-notification:hover .delete {\n  display: block;\n}\n\n.ko-notification .delete:hover {\n  cursor: pointer !important;\n  color: black !important;\n}\n\n.notification-title {\n  font-weight: 600;\n}\n\n.notification-content {\n  width: 100%;\n  max-width: 300px;\n  white-space: normal;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-weight: 100;\n}\n\n.notification-time {\n  text-align: right;\n  font-weight: 100;\n  color: var(--nuvolo-dark-blue);\n  font-family: SourceSansPro, \"Helvetica Neue\", Arial;\n}\n\n/*------------------\n---Tag Card CSS---\n------------------*/\n.topic-card {\n  border-bottom: 4px dotted var(--nuvolo-light-blue);\n  margin: 15px;\n  padding: 10px;\n}\n\n#topic-overview {\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  justify-content: space-around;\n}\n\n/*------------------ \n---Search Box CSS---\n------------------*/\n.search-container {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  min-width: 200px;\n}\n\n.search-input {\n  flex-grow: 1;\n  height: 30px;\n  padding: 5px;\n}\n\n/*--------------------- \n---Question Page CSS---\n---------------------*/\n\n/* Sidebar upvote/downvote css */\n.vote-container {\n  margin: 10px;\n}\n\n.arrow {\n  color: lightgrey;\n  text-align: center;\n}\n\n.vote-clickable:hover {\n  color: lightgreen;\n  cursor: pointer;\n}\n\n.vote-active {\n  color: var(--nuvolo-light-blue);\n}\n\n.star {\n  margin-top: 10px;\n  text-align: center;\n  font-size: 25px;\n  color: lightgrey;\n}\n\n.star.active {\n  color: #fcdc3b;\n}\n\n.best-answer {\n  margin-top: 10px;\n  color: #45a163;\n}\n\n.best-answer .select-answer {\n  color: gainsboro;\n}\n\n/*Other stuff on question page */\n.answers-container {\n  border-top: 1px solid lightgrey;\n}\n\n.question-container,\n.answer-container {\n  margin: 20px;\n  width: 100%;\n}\n\ncode {\n  background-color: #eff0f1;\n}\n\n.question-container img {\n  max-width: 100%;\n}\n\n.info {\n  text-align: right;\n}\n\n.internalize {\n  color: var(--nuvolo-light-blue);\n  margin-right: 5px;\n}\n.internalize:hover {\n  color: var(--nuvolo-dark-blue);\n  cursor: pointer;\n}\n\n/* Comment CSS - container, color, author info */\n.comment-input {\n  resize: none;\n  margin: 5px;\n  flex: 1;\n  padding: 5px;\n  height: 200px !important;\n  border-radius: 4px;\n  border-color: #ccc;\n}\n\n.comments-actions {\n  padding: 5px;\n}\n\n.comments-actions div {\n  color: #989898;\n  display: inline;\n}\n\n.comments-actions div:hover {\n  color: deepskyblue;\n  cursor: pointer;\n}\n\n.comment {\n  padding: 3px 15px 3px 30px;\n  border-top: 1px solid lightgray;\n  display: block;\n}\n\n.comment p {\n  display: inline;\n}\n\n.comment-container {\n  margin-top: 20px;\n}\n\n/*------------------------\n------NEW QUESTION CSS----\n------------------------*/\n.tags-container.tag-input,\n.title-input {\n  border: 1px solid #ddd;\n  min-height: 40px;\n}\n\n.title-input {\n  padding: 4px;\n  width: 100%;\n}\n\n.tags-container {\n  padding: 0px 4px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.tags-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  margin-left: 10px;\n  height: 35px;\n}\n\n.internal-input {\n  display: flex;\n  align-items: center;\n}\n\n/* ----------------------\n-Question, Answer editor-\n------------------------*/\n.editor-container {\n  display: block;\n}\n\n.editor-container .CodeMirror,\n.editor-container .CodeMirror-scroll {\n  min-height: 250px;\n  max-height: 250px;\n}\n\n.question-preview {\n  border: 1px solid #ddd;\n}\n\n.input-file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n/* ----------------------\n---Review New Question---\n------------------------*/\n.post-review {\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.review-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n.question-preview .preview {\n  flex: 1;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  min-height: 100px;\n}\n\n/* -------------------------\n-------Blue Tag Style-------\n--------------------------*/\n.ko-tag {\n  white-space: nowrap;\n  margin: 1px;\n  background: lightskyblue;\n  color: var(--nuvolo-dark-blue);\n  border-radius: 11px;\n  padding: 3px 8px;\n}\n\n.tag-delete:hover {\n  color: red;\n}\n\n/* -------------------------\n---Question Preview Style---\n--------------------------*/\n.preview .community-info {\n  color: gray;\n  text-align: center;\n  padding: 5px;\n}\n\n.preview {\n  border-bottom: 1px solid #eff0f1;\n}\n\n.preview .community-info .value {\n  font-size: 18px;\n}\n\n.preview .community-info .info-container {\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n}\n\n.preview .community-info .info-container.info-highlight {\n  color: #45a163;\n  border: 1px solid #45a163;\n}\n\n.preview .community-info .info-container.info-solid {\n  background-color: #45a163;\n  color: white;\n}\n\n.question-title {\n  color: #07c;\n}\n\n/* -------------------------\n--------Profile Style-------\n--------------------------*/\n.profile-tabs {\n  margin-top: 10px;\n}\n\n.profile-tabs .btn {\n  margin: 0px;\n  border: 0px;\n  border-radius: 3px 3px 0px 0px;\n  border-bottom: 1px solid var(--nuvolo-light-blue);\n}\n\n.profile-tabs .active {\n  border-style: solid;\n  border-color: var(--nuvolo-light-blue);\n  border-width: 1px 1px 0px 1px;\n  box-shadow: none;\n}\n\n.profile-tabs .tab-spacer {\n  flex: 1;\n  border-bottom: 1px solid var(--nuvolo-light-blue);\n}\n\n/* -------------------------\n--------Results Styling-------\n--------------------------*/\n.filter-tabs {\n  margin-top: 10px;\n}\n\n.filter-tabs .btn {\n  margin: 0px;\n  border: 0px;\n  border-radius: 3px 3px 0px 0px;\n  border-bottom: 1px solid var(--nuvolo-light-blue);\n}\n\n.filter-tabs .active {\n  border-style: solid;\n  border-color: var(--nuvolo-light-blue);\n  border-width: 1px 1px 0px 1px;\n  box-shadow: none;\n}\n\n.filter-tabs .tab-spacer {\n  flex: 1;\n  border-bottom: 1px solid var(--nuvolo-light-blue);\n}\n\n/*----------------------\n----Filter all Tags-----\n----------------------*/\n\n.tag-view {\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  justify-content: space-around;\n}\n\n.filter-tag-input {\n  border: 1px solid #ddd;\n  min-height: 30px;\n  margin: 15px;\n  width: 30%;\n  min-width: 250px;\n  padding-left: 10px;\n}\n\n.edit-button {\n  padding: 3px;\n  color: #989898;\n}\n\n.edit-button span:hover {\n  cursor: pointer;\n  color: deepskyblue;\n}\n\n/*--------------------------\n-----Admin Styling----\n----------------------------*/\n.sort {\n  color: lightgrey;\n}\n\n.sort:hover {\n  cursor: pointer;\n}\n\n.sort.active {\n  color: black;\n}\n\n.admin-tag-table .btn {\n  padding: 3px 8px;\n  border-radius: 5px;\n  min-height: 20px;\n  border: 1px solid #bdc0c4;\n}\n\n.admin-tag-table {\n  table-layout: fixed;\n  width: 100%;\n}\n\n.admin-tag-table tr {\n  height: 35px;\n  width: 100%;\n}\n\n.admin-tag-table .content-row {\n  border-top: 1px solid lightgrey;\n}\n\n.admin-tag-table td {\n  align-items: center;\n  display: flex;\n}\n\n.admin-tag-table .col-tag,\n.admin-tag-table .col-date,\n.admin-tag-table .col-questions {\n  max-width: 33%;\n}\n\n.admin-tag-table .col-actions {\n  min-width: 150px !important;\n}\n\n.admin-modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.admin-modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n.rename-container {\n  margin-bottom: 10px;\n}\n\n.rename-container .modal-text div {\n  height: 30px;\n}\n\n.admin-webhook-table .col-channel,\n.admin-webhook-table .col-tags {\n  padding: 5px;\n}\n\n.admin-webhook-table .content-row {\n  border-top: 1px solid lightgrey;\n  height: 30px;\n}\n\n.admin-webhook-table .btn {\n  padding: 3px 8px;\n  border-radius: 5px;\n  min-height: 20px;\n  border: 1px solid #bdc0c4;\n}\n\n.webhook-edit {\n  display: flex;\n  flex-direction: column;\n}\n\n.url-input {\n  resize: none;\n  border: 1px solid #ccc;\n  padding: 10px;\n}\n\n.admin-modal .input-wrapper {\n  margin-bottom: 15px;\n  display: inherit;\n  flex-direction: inherit;\n}\n\n.admin-modal .input-wrapper input {\n  padding: 10px;\n}\n\n.instructions .i-general {\n  color: #d32905;\n}\n\n.instructions {\n  margin-bottom: 20px;\n}\n\n.i-action {\n  color: #989898;\n}\n\n.i-action:hover {\n  color: deepskyblue;\n  cursor: pointer;\n}\n\n.col-tags a {\n  line-height: 25px;\n}\n", ""]);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(66);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(62)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// Module
exports.push([module.i, "@media screen and (max-width: 500px) {\n  .mobile-hide {\n    display: none !important;\n  }\n  .banner {\n    width: 100%;\n    overflow: auto;\n    display: flex;\n    height: 60px;\n  }\n  .search-container {\n    min-width: auto;\n  }\n  .search-button,\n  .menu {\n    display: block;\n    width: auto;\n  }\n\n  .search {\n    display: block;\n  }\n\n  .banner .side-button {\n    width: 150px;\n    white-space: nowrap;\n  }\n\n  .mobile-menu {\n    position: absolute;\n    top: 55px;\n    z-index: 50;\n    width: 100%;\n    background: whitesmoke;\n    padding-top: 5px;\n    border-bottom: 1px solid grey;\n  }\n  .mobile-menu-item {\n    height: 50px;\n    border-top: 1px solid grey;\n    padding: 5px;\n    text-align: center;\n    font-size: 20px;\n  }\n  .mainbar {\n    min-width: 200px;\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n\n  #topic-overview {\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    grid-gap: 5px;\n  }\n}\n", ""]);


/***/ })
/******/ ]);