(self["webpackChunktodo_app_final"] = self["webpackChunktodo_app_final"] || []).push([["main"],{

/***/ "./src/scripts/AddTodoEvents.js":
/*!**************************************!*\
  !*** ./src/scripts/AddTodoEvents.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddTodoEvents; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AddTodoEvents = /*#__PURE__*/function () {
  function AddTodoEvents() {
    _classCallCheck(this, AddTodoEvents);

    this.buttonAddTodo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-button-add-todo]');
    this.buttonCloseAddTodo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-button-close-add-todo-popup]');
    this.addTodoPopup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-todo-popup]');
    this.buttonAddTodo.on('click', this.showAddTodoPopup.bind(this));
    this.buttonCloseAddTodo.on('click', this.hideAddTodoPopup.bind(this));
  }

  _createClass(AddTodoEvents, [{
    key: "showAddTodoPopup",
    value: function showAddTodoPopup() {
      this.addTodoPopup.addClass('is-active');
    }
  }, {
    key: "hideAddTodoPopup",
    value: function hideAddTodoPopup() {
      this.addTodoPopup.removeClass('is-active');
    }
  }]);

  return AddTodoEvents;
}();



/***/ }),

/***/ "./src/scripts/PreventInvalidFormSubmissions.js":
/*!******************************************************!*\
  !*** ./src/scripts/PreventInvalidFormSubmissions.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreventInvalidFormSubmissions; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PreventInvalidFormSubmissions = /*#__PURE__*/function () {
  function PreventInvalidFormSubmissions() {
    var _this = this;

    _classCallCheck(this, PreventInvalidFormSubmissions);

    this.todoRegisterForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.todo-user-register');
    this.settingsNameForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.settings-name');
    this.settingsPasswordForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.settings-password');
    this.settingsImageForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.settings-image');
    this.addTodoForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.add-todo-popup');
    this.invalidInput = true;
    this.invalidNameOptionsInputs = true;
    this.invalidPasswordOptionsInputs = true;
    this.invalidImageOptionsInput = true;
    this.invalidAddTodoInput = true;

    if (this.todoRegisterForm[0] !== undefined) {
      this.todoRegisterForm[0].addEventListener('change', this.todoRegister.bind(this));
      this.todoRegisterForm.on('click', function (event) {
        if (_this.invalidInput) {
          event.preventDefault();
          event.stopPropagation();

          _this.todoRegister();
        }
      });
    }

    if (this.settingsNameForm[0] !== undefined) {
      this.settingsNameForm[0].addEventListener('change', this.changeName.bind(this));
      this.settingsNameForm.on('click', function (event) {
        if (_this.invalidNameOptionsInputs) {
          event.preventDefault();
          event.stopPropagation();

          _this.changeName();
        }
      });
    }

    if (this.settingsPasswordForm[0] !== undefined) {
      this.settingsPasswordForm[0].addEventListener('change', this.changePassword.bind(this));
      this.settingsPasswordForm.on('click', function (event) {
        if (_this.invalidPasswordOptionsInputs) {
          event.preventDefault();
          event.stopPropagation();

          _this.changePassword();
        }
      });
    }

    if (this.settingsImageForm[0] !== undefined) {
      this.settingsImageForm[0].addEventListener('change', this.changeImage.bind(this));
      this.settingsImageForm.on('submit', function (event) {
        if (_this.invalidImageOptionsInput) {
          event.preventDefault();

          _this.changeImage();
        }
      });
    }

    if (this.addTodoForm[0] !== undefined) {
      this.addTodoForm[0].addEventListener('change', this.changeAddTodo.bind(this));
      this.addTodoForm.on('submit', function (event) {
        if (_this.invalidAddTodoInput) {
          event.preventDefault();

          _this.changeAddTodo();
        }
      });
    }
  }

  _createClass(PreventInvalidFormSubmissions, [{
    key: "changeAddTodo",
    value: function changeAddTodo() {
      var _this2 = this;

      var validInputs = [];
      this.addTodoForm[0].forEach(function (element, index) {
        if (element.name === "todo_list[title]" && element.value === '') {
          element.classList.add("is-invalid");
          element.nextElementSibling.style.display = 'block';
          element.nextElementSibling.innerHTML = "This field can't be empty";
          validInputs.push(0);
        } else if (element.name === "todo_list[title]" && element.value !== '') {
          element.classList.remove("is-invalid");
          element.nextElementSibling.style.display = 'none';
          element.nextElementSibling.innerHTML = "";
          validInputs.push(1);
        }
      });
      this.invalidAddTodoInput = false;
      validInputs.forEach(function (element) {
        if (element === 0) {
          _this2.invalidAddTodoInput = true;
        }
      });
    }
  }, {
    key: "todoRegister",
    value: function todoRegister() {
      var _this3 = this;

      var firstPassword;
      var validInputs = [];
      this.todoRegisterForm[0].forEach(function (element, index) {
        if (element.name === "todo_user[name]" && element.value.length < 2) {
          element.classList.add("is-invalid");
          element.nextElementSibling.style.display = 'block';
          element.nextElementSibling.innerHTML = "This Name Need atleast 2 characters";
          validInputs.push(0);
        } else if (element.name === "todo_user[name]" && element.value.length >= 2) {
          element.classList.remove("is-invalid");
          element.nextElementSibling.style.display = 'none';
          element.nextElementSibling.innerHTML = "";
          validInputs.push(1);
        }

        if (element.name === "todo_user[email]" && !element.value.includes('@') && !element.value.includes('.')) {
          element.classList.add("is-invalid");
          element.nextElementSibling.style.display = 'block';
          element.nextElementSibling.innerHTML = "The E-Mail is not valid";
          validInputs.push(0);
        } else if (element.name === "todo_user[email]" && element.value.includes('@') && element.value.includes('.')) {
          element.classList.remove("is-invalid");
          element.nextElementSibling.style.display = 'none';
          element.nextElementSibling.innerHTML = "";
          validInputs.push(1);
        }

        if (element.name === "todo_user[password][first]" && element.value.length < 6) {
          element.classList.add("is-invalid");
          element.nextElementSibling.style.display = 'block';
          element.nextElementSibling.innerHTML = "Your password must contains atleast 6 characters";
          firstPassword = element.value;
          validInputs.push(0);
        } else if (element.name === "todo_user[password][first]" && element.value.length >= 6) {
          firstPassword = element.value;
          element.classList.remove("is-invalid");
          element.nextElementSibling.style.display = 'none';
          element.nextElementSibling.innerHTML = "";
          validInputs.push(1);
        }

        if (element.name === "todo_user[password][second]") {
          if (element.value === firstPassword && firstPassword.length >= 6) {
            element.classList.remove("is-invalid");
            element.nextElementSibling.style.display = 'none';
            element.nextElementSibling.innerHTML = "";
            validInputs.push(1);
          } else if (firstPassword !== '') {
            element.classList.add("is-invalid");
            element.nextElementSibling.style.display = 'block';
            element.nextElementSibling.innerHTML = "Your repeated password don't match your password. Please try again";
            validInputs.push(0);
          }
        }
      });
      this.invalidInput = false;
      validInputs.forEach(function (element) {
        if (element === 0) {
          _this3.invalidInput = true;
        }
      });
    }
  }, {
    key: "changeName",
    value: function changeName() {
      var _this4 = this;

      var validInputs = [];
      this.settingsNameForm[0].forEach(function (element, index) {
        if (element.name === "todo_user_name[name]" && element.value.length < 2) {
          element.classList.add("is-invalid");
          element.nextElementSibling.style.display = 'block';
          element.nextElementSibling.innerHTML = "This Name Need atleast 2 characters";
          validInputs.push(0);
        } else if (element.name === "todo_user_name[name]" && element.value.length >= 2) {
          element.classList.remove("is-invalid");
          element.nextElementSibling.style.display = 'none';
          element.nextElementSibling.innerHTML = "";
          validInputs.push(1);
        }
      });
      this.invalidNameOptionsInputs = false;
      validInputs.forEach(function (element) {
        if (element === 0) {
          _this4.invalidNameOptionsInputs = true;
        }
      });
    }
  }, {
    key: "changePassword",
    value: function changePassword() {
      var _this5 = this;

      var firstPassword;
      var validInputs = [];
      this.settingsPasswordForm[0].forEach(function (element, index) {
        if (element.name === "todo_user_password[password][first]" && element.value.length < 6) {
          element.classList.add("is-invalid");
          element.nextElementSibling.style.display = 'block';
          element.nextElementSibling.innerHTML = "Your password must contains atleast 6 characters";
          firstPassword = element.value;
          validInputs.push(0);
        } else if (element.name === "todo_user_password[password][first]" && element.value.length >= 6) {
          firstPassword = element.value;
          element.classList.remove("is-invalid");
          element.nextElementSibling.style.display = 'none';
          element.nextElementSibling.innerHTML = "";
          validInputs.push(1);
        }

        if (element.name === "todo_user_password[password][second]") {
          if (element.value === firstPassword && firstPassword.length >= 6) {
            element.classList.remove("is-invalid");
            element.nextElementSibling.style.display = 'none';
            element.nextElementSibling.innerHTML = "";
            validInputs.push(1);
          } else if (firstPassword !== '') {
            element.classList.add("is-invalid");
            element.nextElementSibling.style.display = 'block';
            element.nextElementSibling.innerHTML = "Your repeated password don't match your password. Please try again";
            validInputs.push(0);
          }
        }
      });
      this.invalidPasswordOptionsInputs = false;
      validInputs.forEach(function (element) {
        if (element === 0) {
          _this5.invalidPasswordOptionsInputs = true;
        }
      });
    }
  }, {
    key: "changeImage",
    value: function changeImage() {
      var _this6 = this;

      var validInputs = [];
      this.settingsImageForm[0].forEach(function (element, index) {
        if (element.name === "todo_user_image[profile_image]" && !element.value.includes('.jpeg') && !element.value.includes('.jpg') && !element.value.includes('.png')) {
          element.classList.add("is-invalid");
          element.nextElementSibling.style.display = 'block';
          element.nextElementSibling.innerHTML = "The File need to be jpeg or jpg or png format";
          validInputs.push(0);
        } else if (element.name === "todo_user_image[profile_image]" && element.value.includes('.jpeg') || element.value.includes('.jpg') || element.value.includes('.png')) {
          element.classList.remove("is-invalid");
          element.nextElementSibling.style.display = 'none';
          element.nextElementSibling.innerHTML = "";
          validInputs.push(1);
        }
      });
      this.invalidImageOptionsInput = false;
      validInputs.forEach(function (element) {
        if (element === 0) {
          _this6.invalidImageOptionsInput = true;
        }
      });
    }
  }]);

  return PreventInvalidFormSubmissions;
}();



/***/ }),

/***/ "./src/scripts/ProgressionBar.js":
/*!***************************************!*\
  !*** ./src/scripts/ProgressionBar.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProgressionBar; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ProgressionBar = /*#__PURE__*/function () {
  function ProgressionBar() {
    _classCallCheck(this, ProgressionBar);

    this.doneCounter = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.doneCounter').text();
    this.todoCounter = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.todoCounter').text();
    this.gainExp = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-gained-exp]').text();
    this.expToLvlUp = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-exp-to-lvl-up]').text();
    this.progressedLine = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.progressed');
    this.progressedExpLine = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-progression-to-lvl-up]');
    this.updateTheProgressionLine();
    this.updateTheProgressionInSettings();
  }

  _createClass(ProgressionBar, [{
    key: "updateTheProgressionLine",
    value: function updateTheProgressionLine() {
      var convertedDoneCounter = Number(this.doneCounter);
      var convertedTodoCounter = Number(this.todoCounter);
      var total = convertedDoneCounter + convertedTodoCounter;
      var percent = convertedDoneCounter * 100 / total;
      this.progressedLine.css('width', "".concat(percent, "%"));
    }
  }, {
    key: "updateTheProgressionInSettings",
    value: function updateTheProgressionInSettings() {
      var convertedExp = Number(this.gainExp);
      var convertedExpToLvlUp = Number(this.expToLvlUp);
      var percent = convertedExp * 100 / convertedExpToLvlUp;
      this.progressedExpLine.css('width', "".concat(percent, "%"));
    }
  }]);

  return ProgressionBar;
}();



/***/ }),

/***/ "./src/scripts/SettingsEvents.js":
/*!***************************************!*\
  !*** ./src/scripts/SettingsEvents.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SettingsEvents; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SettingsEvents = /*#__PURE__*/function () {
  function SettingsEvents() {
    _classCallCheck(this, SettingsEvents);

    this.settingsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-settings]');
    this.overviewContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-overview-settings]');
    this.nameContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-name-container]');
    this.passwordContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-password-container]');
    this.imageContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-image-container]');
    this.deleteContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-delete-container]');
    this.nameButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-name]');
    this.imageButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-image]');
    this.passwordButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-password]');
    this.deleteButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-delete]');
    this.settingsButtonBack = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-settings-button-back]');
    this.optionBackButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-button-back-in-option]');
    this.settingsButtonBack.on('click', this.resetSettings.bind(this));
    this.optionBackButton.on('click', this.goToSettingsOverview.bind(this));
    this.nameButton.on('click', this.showNameOption.bind(this));
    this.imageButton.on('click', this.showImageOption.bind(this));
    this.passwordButton.on('click', this.showPasswordOption.bind(this));
    this.deleteButton.on('click', this.showDeletePopup.bind(this));
  }

  _createClass(SettingsEvents, [{
    key: "resetSettings",
    value: function resetSettings() {
      var _this = this;

      this.settingsContainer.removeClass('is-active');
      setTimeout(function () {
        _this.overviewContainer.removeClass('is-hide');

        _this.nameContainer.removeClass('is-active');

        _this.passwordContainer.removeClass('is-active');

        _this.imageContainer.removeClass('is-active');

        _this.deleteContainer.removeClass('is-active');
      }, 250);
    }
  }, {
    key: "goToSettingsOverview",
    value: function goToSettingsOverview() {
      this.settingsContainer.addClass('is-active');
      this.overviewContainer.removeClass('is-hide');
      this.nameContainer.removeClass('is-active');
      this.passwordContainer.removeClass('is-active');
      this.imageContainer.removeClass('is-active');
      this.deleteContainer.removeClass('is-active');
    }
  }, {
    key: "showNameOption",
    value: function showNameOption() {
      this.overviewContainer.addClass('is-hide');
      this.nameContainer.addClass('is-active');
    }
  }, {
    key: "showPasswordOption",
    value: function showPasswordOption() {
      this.overviewContainer.addClass('is-hide');
      this.passwordContainer.addClass('is-active');
    }
  }, {
    key: "showImageOption",
    value: function showImageOption() {
      this.overviewContainer.addClass('is-hide');
      this.imageContainer.addClass('is-active');
    }
  }, {
    key: "showDeletePopup",
    value: function showDeletePopup() {
      this.overviewContainer.addClass('is-hide');
      this.deleteContainer.addClass('is-active');
    }
  }]);

  return SettingsEvents;
}();



/***/ }),

/***/ "./src/scripts/ShowAndHideSettings.js":
/*!********************************************!*\
  !*** ./src/scripts/ShowAndHideSettings.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShowAndHideSettings; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ShowAndHideSettings = /*#__PURE__*/function () {
  function ShowAndHideSettings() {
    _classCallCheck(this, ShowAndHideSettings);

    this.settingsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-settings-button]');
    this.settingsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-settings]'); // this.settingsButtonBack = $('[data-settings-button-back]');
    // this.settingsButtonBack.on('click', this.hide.bind(this));

    this.settingsButton.on('click', this.show.bind(this));
  }

  _createClass(ShowAndHideSettings, [{
    key: "show",
    value: function show() {
      this.settingsContainer.addClass('is-active');
    } // hide() {
    //     this.settingsContainer.removeClass('is-active');
    // }

  }]);

  return ShowAndHideSettings;
}();



/***/ }),

/***/ "./src/scripts/ToggleAsideNavigation.js":
/*!**********************************************!*\
  !*** ./src/scripts/ToggleAsideNavigation.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToggleAsideNavigation; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ToggleAsideNavigation = /*#__PURE__*/function () {
  function ToggleAsideNavigation() {
    _classCallCheck(this, ToggleAsideNavigation);

    this.asideNavigation = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.aside-navigation');
    this.asideNavigationAnchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-navigation li a');
    this.buttonMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.button-menu');
    this.divBlur = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.blur');
    this.buttonMenu.on('click', this.toggleAside.bind(this));
    this.divBlur.on('click', this.hideAsideWhileClickingOutside.bind(this));
    this.asideNavigationAnchors.on('click', this.hideAsideNavigationAndBlurWhileClickAnchor.bind(this));
  }

  _createClass(ToggleAsideNavigation, [{
    key: "toggleAside",
    value: function toggleAside() {
      if (!this.asideNavigation.hasClass('is-active')) {
        this.asideNavigation.addClass('flex').outerWidth();
        this.asideNavigation.addClass('is-active');
        this.divBlur.addClass('background-blur');
      }
    }
  }, {
    key: "hideAsideWhileClickingOutside",
    value: function hideAsideWhileClickingOutside() {
      this.asideNavigation.removeClass('is-active').removeClass('flex');
      this.divBlur.removeClass('background-blur');
    }
  }, {
    key: "hideAsideNavigationAndBlurWhileClickAnchor",
    value: function hideAsideNavigationAndBlurWhileClickAnchor() {
      this.hideAsideWhileClickingOutside();
    }
  }]);

  return ToggleAsideNavigation;
}();



/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToggleAsideNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleAsideNavigation */ "./src/scripts/ToggleAsideNavigation.js");
/* harmony import */ var _ProgressionBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressionBar */ "./src/scripts/ProgressionBar.js");
/* harmony import */ var _ShowAndHideSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowAndHideSettings */ "./src/scripts/ShowAndHideSettings.js");
/* harmony import */ var _SettingsEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsEvents */ "./src/scripts/SettingsEvents.js");
/* harmony import */ var _PreventInvalidFormSubmissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreventInvalidFormSubmissions */ "./src/scripts/PreventInvalidFormSubmissions.js");
/* harmony import */ var _AddTodoEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddTodoEvents */ "./src/scripts/AddTodoEvents.js");






new _ToggleAsideNavigation__WEBPACK_IMPORTED_MODULE_0__.default();
new _ProgressionBar__WEBPACK_IMPORTED_MODULE_1__.default();
new _ShowAndHideSettings__WEBPACK_IMPORTED_MODULE_2__.default();
new _SettingsEvents__WEBPACK_IMPORTED_MODULE_3__.default();
new _PreventInvalidFormSubmissions__WEBPACK_IMPORTED_MODULE_4__.default();
new _AddTodoEvents__WEBPACK_IMPORTED_MODULE_5__.default();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__("./src/scripts/main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);