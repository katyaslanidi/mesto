/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._url = url;
    this._headers = headers;
  }
  _createClass(Api, [{
    key: "_getResponse",
    value: function _getResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this = this;
      return fetch("".concat(this._url, "/users/me"), {
        method: "GET",
        headers: this._headers
      }).then(function (res) {
        return _this._getResponse(res);
      });
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      var _this2 = this;
      return fetch("".concat(this._url, "/cards"), {
        method: "GET",
        headers: this._headers
      }).then(function (res) {
        return _this2._getResponse(res);
      });
    }
  }, {
    key: "editUserInfo",
    value: function editUserInfo(userName, userJob) {
      var _this3 = this;
      return fetch("".concat(this._url, "/users/me"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: userName,
          about: userJob
        })
      }).then(function (res) {
        return _this3._getResponse(res);
      });
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(name, link) {
      var _this4 = this;
      return fetch("".concat(this._url, "/cards"), {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return _this4._getResponse(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      var _this5 = this;
      return fetch("".concat(this._url, "/cards/").concat(id), {
        method: "DELETE",
        headers: this._headers
      }).then(function (res) {
        return _this5._getResponse(res);
      });
    }
  }, {
    key: "addLikeCard",
    value: function addLikeCard(id) {
      var _this6 = this;
      return fetch("".concat(this._url, "/cards/").concat(id, "/likes"), {
        method: "PUT",
        headers: this._headers
      }).then(function (res) {
        return _this6._getResponse(res);
      });
    }
  }, {
    key: "deleteLikeCard",
    value: function deleteLikeCard(id) {
      var _this7 = this;
      return fetch("".concat(this._url, "/cards/").concat(id, "/likes"), {
        method: "DELETE",
        headers: this._headers
      }).then(function (res) {
        return _this7._getResponse(res);
      });
    }
  }, {
    key: "editProfileImage",
    value: function editProfileImage(avatar) {
      var _this8 = this;
      return fetch("".concat(this._url, "/users/me/avatar"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar.link
        })
      }).then(function (res) {
        return _this8._getResponse(res);
      });
    }
  }]);
  return Api;
}();


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, template, handleCardClick, handleTrashClick, handleLikeClick, userId) {
    var _this = this;
    _classCallCheck(this, Card);
    _defineProperty(this, "deleteCard", function () {
      _this._newElement.remove();
      _this._newElement = null;
    });
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._owenerId = data.owner._id;
    this._userId = userId;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "createCard",
    value: function createCard() {
      this._newElement = this._getTemplate();
      this._cardText = this._newElement.querySelector('.element__text');
      this._cardImage = this._newElement.querySelector('.element__image');
      this._cardText.textContent = this._name;
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;
      this._trashButton = this._newElement.querySelector('.element__trash');
      this._likeButton = this._newElement.querySelector('.element__like');
      this._setListenersForItem();
      this.setLikesCard(this._likes);
      if (this._userId !== this._ownerId) {
        this._trashButton.remove();
        this._trashButton = null;
      }
      return this._newElement;
    }
  }, {
    key: "_activeLike",
    value: function _activeLike() {
      this._likeButton.classList.add('element__liked');
    }
  }, {
    key: "_deactiveLike",
    value: function _deactiveLike() {
      this._likeButton.classList.remove('element__liked');
    }
  }, {
    key: "alreadyLiked",
    value: function alreadyLiked() {
      var _this2 = this;
      return this._likes.some(function (userLike) {
        return userLike._id === _this2._userId;
      });
    }
  }, {
    key: "setLikesCard",
    value: function setLikesCard(newLikes) {
      this._likes = newLikes;
      var likeCounter = this._newElement.querySelector('.element__like-counter');
      if (this.alreadyLiked()) {
        this._activeLike();
      } else {
        this._deactiveLike();
      }
      likeCounter.textContent = this._likes.length;
    }
  }, {
    key: "_setListenersForItem",
    value: function _setListenersForItem() {
      var _this3 = this;
      this._likeButton.addEventListener('click', function () {
        _this3._handleLikeClick(_this3._id);
      });
      this._trashButton.addEventListener('click', function () {
        _this3._handleTrashClick(_this3._id);
      });
      this._cardImage.addEventListener('click', function () {
        _this3._handleCardClick({
          name: _this3._name,
          link: _this3._link
        });
      });
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, form) {
    _classCallCheck(this, FormValidator);
    this._form = form;
    this._settings = settings;
    this._currentButton = form.querySelector(this._settings.submitButtonSelector);
  }
  _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }, {
    key: "disableButton",
    value: function disableButton(button) {
      button.setAttribute('disabled', true);
      button.classList.add(this._settings.inactiveButtonClass);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._form.addEventListener('input', function () {
        _this._validateInput(event);
      });
    }
  }, {
    key: "_validateInput",
    value: function _validateInput(event) {
      this._input = event.target;
      this._isValidField();
      this._isValidButtonAndInput();
    }
  }, {
    key: "_isValidField",
    value: function _isValidField() {
      this._errorSpan = this._form.querySelector("#".concat(this._input.id, "-error"));
      this._errorSpan.textContent = this._input.validationMessage;
    }
  }, {
    key: "_isValidButtonAndInput",
    value: function _isValidButtonAndInput() {
      if (this._form.checkValidity()) {
        this._setSubmitButton(true);
      } else {
        this._setSubmitButton(false);
      }
      if (this._input.checkValidity()) {
        this._setErrorInput(true);
      } else {
        this._setErrorInput(false);
      }
    }
  }, {
    key: "_setSubmitButton",
    value: function _setSubmitButton(state) {
      if (state) {
        this._currentButton.removeAttribute('disabled');
        this._currentButton.classList.remove(this._settings.inactiveButtonClass);
      } else {
        this.disableButton(this._currentButton);
      }
    }
  }, {
    key: "_setErrorInput",
    value: function _setErrorInput(state) {
      if (state) {
        this._input.classList.remove(this._settings.inputErrorClass);
        this._errorSpan.textContent = "";
      } else {
        this._input.classList.add(this._settings.inputErrorClass);
      }
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      document.addEventListener('keydown', this._handleEscClose);
      this._popup.classList.add('overlay_opened');
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener('keydown', this._handleEscClose);
      this._popup.classList.remove('overlay_opened');
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('overlay_opened') || evt.target.classList.contains('close-button')) {
          _this.close();
        }
      });
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._inputForm = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._popup.querySelectorAll('.popup__input');
    _this._submitButton = _this._popup.querySelector('.popup__button');
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};
      this._inputList.forEach(function (input) {
        inputValues[input.name] = input.value;
      });
      return inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._inputForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleFormSubmit(_this2._getInputValues());
      });
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._inputForm.reset();
    }
  }, {
    key: "rendererLoading",
    value: function rendererLoading(loading) {
      if (loading) {
        this._submitButton.textContent = "Сохранение...";
      } else {
        this._submitButton.textContent = "Сохранить";
      }
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._image = _this._popup.querySelector('.card-popup__image');
    _this._text = _this._popup.querySelector('.card-popup__text');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var name = _ref.name,
        link = _ref.link;
      this._image.src = link;
      this._image.alt = name;
      this._text.textContent = name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithSubmit.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithSubmit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithSubmit)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithSubmit = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithSubmit, _Popup);
  var _super = _createSuper(PopupWithSubmit);
  function PopupWithSubmit(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithSubmit);
    _this = _super.call(this, popupSelector);
    _this._form = _this._popup.querySelector('.popup__form');
    _this._submitButton = _this._popup.querySelector('.popup__button');
    return _this;
  }
  _createClass(PopupWithSubmit, [{
    key: "rendererLoading",
    value: function rendererLoading(loading) {
      if (loading) {
        this._submitButton.textContent = "Удаление...";
      } else {
        this._submitButton.textContent = "Да";
      }
    }
  }, {
    key: "setSubmitHandlers",
    value: function setSubmitHandlers(submitHandlers) {
      this._handleFormSubmit = submitHandlers;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithSubmit.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleFormSubmit();
      });
    }
  }]);
  return PopupWithSubmit;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(renderer, containerSelector) {
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(item) {
      this._container.prepend(item);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;
      items.forEach(function (item) {
        _this._container.append(_this._renderer(item));
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      jobSelector = _ref.jobSelector,
      userProfileImageSelector = _ref.userProfileImageSelector;
    _classCallCheck(this, UserInfo);
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._profileImage = document.querySelector(userProfileImageSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        job: this._job.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        job = _ref2.job,
        image = _ref2.image;
      this._name.textContent = name;
      this._job.textContent = job;
      this._profileImage.src = image;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithSubmit.js */ "./src/components/PopupWithSubmit.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var nameInput = document.querySelector('.popup__input_name');
var jobInput = document.querySelector('.popup__input_job');
var popupAddButton = document.querySelector('.profile__add');
var popupButton = document.querySelector('.profile__edit');
var imageEditButton = document.querySelector('.profile__image-edit-button');
var profileForm = document.querySelector('.popup__form');
var formAddCard = document.querySelector('.add-card-popup__form');
var profileImageForm = document.querySelector('.avatar-edit__form');
var popupSubmitButton = document.querySelector('.add-card-popup__button');
var validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error'
};
var apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'c41c66fe-334b-43d7-a03f-de906f681c65',
    "Content-Type": 'application/json'
  }
};
var userId;
var profileValidatorEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](validationSettings, profileForm);
var cardValidatorAdd = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](validationSettings, formAddCard);
var profileImageValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](validationSettings, profileImageForm);
profileValidatorEdit.enableValidation();
cardValidatorAdd.enableValidation();
profileImageValidator.enableValidation();
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"](apiConfig);
Promise.all([api.getUserInfo(), api.getInitialCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    me = _ref2[0],
    cards = _ref2[1];
  userId = me._id;
  userInfo.setUserInfo(me);
  cardsContainer.renderItems(cards);
})["catch"](function (err) {
  return console.log(err);
})["finally"](function () {});
var cardsContainer = new _components_Section_js__WEBPACK_IMPORTED_MODULE_7__["default"](function (card) {
  return createNewCard(card);
}, '.element-template');
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
  userProfileImageSelector: '.profile__image'
});
var openPopupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.card-popup');
openPopupImage.setEventListeners();
var popupWithSubmit = new _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.card-delete');
popupWithSubmit.setEventListeners();
var popupUserEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.profile-popup', function (data) {
  var nameInput = data.nameInput,
    jobInput = data.jobInput;
  popupUserEdit.rendererLoading(true);
  api.editUserInfo(nameInput, jobInput).then(function (data) {
    userInfo.setUserInfo(data);
    popupUserEdit.close();
  })["catch"](function (err) {
    return console.log(err);
  })["finally"](function () {
    return popupUserEdit.rendererLoading(false);
  });
});
popupUserEdit.setEventListeners();
var popupProfileImageEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.avatar-edit', function (data) {
  popupProfileImageEdit.rendererLoading(true);
  api.editProfileImage(data).then(function (formData) {
    userInfo.setUserInfo(formData);
    popupProfileImageEdit.close();
  })["catch"](function (err) {
    return console.log(err);
  })["finally"](function () {
    return popupProfileImageEdit.rendererLoading(false);
  });
});
popupProfileImageEdit.setEventListeners();
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.add-card-popup', function (dataCard) {
  popupAddCard.rendererLoading(true);
  var name = dataCard.name,
    link = dataCard.link;
  api.addNewCard(name, link).then(function (newDataCard) {
    var card = createNewCard(newDataCard);
    cardsContainer.addItem(card);
    cardValidatorAdd.disableButton(popupSubmitButton);
    popupAddCard.close();
  })["catch"](function (err) {
    return console.log(err);
  })["finally"](function () {
    return popupAddCard.rendererLoading(false);
  });
});
popupAddCard.setEventListeners();
var createNewCard = function createNewCard(dataCard) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](dataCard, '.element-template', function (name, link) {
    openPopupImage.open(name, link);
  }, function (id) {
    popupWithSubmit.open();
    popupWithSubmit.setSubmitHandlers(function () {
      popupWithSubmit.rendererLoading(true);
      api.deleteCard(id).then(function (res) {
        card.deleteCard(res);
        popupWithSubmit.close();
      })["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        return popupWithSubmit.rendererLoading(false);
      });
    });
  }, function (id) {
    if (!card.alreadyLiked()) {
      api.addLikeCard(id).then(function (data) {
        card.setLikesCard(data.likes);
      })["catch"](function (err) {
        return console.log(err);
      });
    } else {
      api.deleteLikeCard(id).then(function (data) {
        card.setLikesCard(data.likes);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, userId);
  return card.createCard();
};
popupButton.addEventListener('click', function () {
  popupUserEdit._getInputValues(userInfo.getUserInfo());
  popupUserEdit.open();
});
popupAddButton.addEventListener('click', function () {
  popupAddCard.open();
});
imageEditButton.addEventListener('click', function () {
  popupProfileImageEdit.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWUsQ0FBQzdGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQzlDMEgscUJBQXFCLENBQUN6RixJQUFJLEVBQUU7QUFDOUIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgdXJsLCBoZWFkZXJzIH0pIHtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICB9XHJcbiAgICBfZ2V0UmVzcG9uc2UocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgIH1cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L3VzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9nZXRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIGdldEluaXRpYWxDYXJkcygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fZ2V0UmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcbiAgICBlZGl0VXNlckluZm8odXNlck5hbWUsIHVzZXJKb2IpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgYWJvdXQ6IHVzZXJKb2IsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fZ2V0UmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcbiAgICBhZGROZXdDYXJkKG5hbWUsIGxpbmspIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGxpbmssXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fZ2V0UmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYXJkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2dldFJlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG4gICAgYWRkTGlrZUNhcmQoaWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2lkfS9saWtlc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fZ2V0UmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVMaWtlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzLyR7aWR9L2xpa2VzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9nZXRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIGVkaXRQcm9maWxlSW1hZ2UoYXZhdGFyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIubGluayxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9nZXRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIHRlbXBsYXRlLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZVRyYXNoQ2xpY2ssIGhhbmRsZUxpa2VDbGljaywgdXNlcklkKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fbGlrZXMgPSBkYXRhLmxpa2VzO1xyXG4gICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMuX293ZW5lcklkID0gZGF0YS5vd25lci5faWQ7XHJcbiAgICB0aGlzLl91c2VySWQgPSB1c2VySWQ7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgdGhpcy5faGFuZGxlVHJhc2hDbGljayA9IGhhbmRsZVRyYXNoQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XHJcbiAgfVxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGUpXHJcbiAgICAgIC5jb250ZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG4gIGNyZWF0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9uZXdFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkVGV4dCA9IHRoaXMuX25ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3RleHQnKTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX25ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2ltYWdlJyk7XHJcblxyXG4gICAgdGhpcy5fY2FyZFRleHQudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcclxuXHJcbiAgICB0aGlzLl90cmFzaEJ1dHRvbiA9IHRoaXMuX25ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3RyYXNoJyk7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbGlrZScpO1xyXG5cclxuICAgIHRoaXMuX3NldExpc3RlbmVyc0Zvckl0ZW0oKTtcclxuICAgIHRoaXMuc2V0TGlrZXNDYXJkKHRoaXMuX2xpa2VzKTtcclxuXHJcbiAgICBpZiAodGhpcy5fdXNlcklkICE9PSB0aGlzLl9vd25lcklkKSB7XHJcbiAgICAgIHRoaXMuX3RyYXNoQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLl90cmFzaEJ1dHRvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX25ld0VsZW1lbnQ7XHJcbiAgfVxyXG4gIGRlbGV0ZUNhcmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9uZXdFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fbmV3RWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG4gIF9hY3RpdmVMaWtlKCkge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlbGVtZW50X19saWtlZCcpO1xyXG4gIH1cclxuICBfZGVhY3RpdmVMaWtlKCkge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdlbGVtZW50X19saWtlZCcpO1xyXG4gIH1cclxuICBhbHJlYWR5TGlrZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGlrZXMuc29tZSgodXNlckxpa2UpID0+IHVzZXJMaWtlLl9pZCA9PT0gdGhpcy5fdXNlcklkKTtcclxuICB9XHJcbiAgc2V0TGlrZXNDYXJkKG5ld0xpa2VzKSB7XHJcbiAgICB0aGlzLl9saWtlcyA9IG5ld0xpa2VzO1xyXG4gICAgY29uc3QgbGlrZUNvdW50ZXIgPSB0aGlzLl9uZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWNvdW50ZXInKTtcclxuICAgIGlmICh0aGlzLmFscmVhZHlMaWtlZCgpKSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZUxpa2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RlYWN0aXZlTGlrZSgpO1xyXG4gICAgfVxyXG4gICAgbGlrZUNvdW50ZXIudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XHJcbiAgfVxyXG4gIF9zZXRMaXN0ZW5lcnNGb3JJdGVtKCkge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKHRoaXMuX2lkKTtcclxuICAgIH0pXHJcbiAgICB0aGlzLl90cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlVHJhc2hDbGljayh0aGlzLl9pZCk7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soeyBuYW1lOiB0aGlzLl9uYW1lLCBsaW5rOiB0aGlzLl9saW5rIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybSkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9XHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGVJbnB1dChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfdmFsaWRhdGVJbnB1dChldmVudCkge1xyXG4gICAgICAgIHRoaXMuX2lucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuX2lzVmFsaWRGaWVsZCgpO1xyXG4gICAgICAgIHRoaXMuX2lzVmFsaWRCdXR0b25BbmRJbnB1dCgpO1xyXG4gICAgfVxyXG4gICAgX2lzVmFsaWRGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLl9lcnJvclNwYW4gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2lucHV0LmlkfS1lcnJvcmApO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yU3Bhbi50ZXh0Q29udGVudCA9IHRoaXMuX2lucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgX2lzVmFsaWRCdXR0b25BbmRJbnB1dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0U3VibWl0QnV0dG9uKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFN1Ym1pdEJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRFcnJvcklucHV0KHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEVycm9ySW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9zZXRTdWJtaXRCdXR0b24oc3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b24odGhpcy5fY3VycmVudEJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3NldEVycm9ySW5wdXQoc3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXlfb3BlbmVkJyk7XHJcbiAgICB9XHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXlfb3BlbmVkJyk7XHJcbiAgICB9XHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheV9vcGVuZWQnKSBcclxuICAgICAgICAgICAgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgICAgIHRoaXMuX2lucHV0Rm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpO1xyXG4gICAgfVxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gICAgfVxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLl9pbnB1dEZvcm0ucmVzZXQoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcmVyTG9hZGluZyhsb2FkaW5nKSB7XHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCLQodC+0YXRgNCw0L3QtdC90LjQtS4uLlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi0KHQvtGF0YDQsNC90LjRgtGMXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLmNhcmQtcG9wdXBfX2ltYWdlJyk7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXBvcHVwX190ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBvcGVuKHtuYW1lLCBsaW5rfSkge1xyXG4gICAgICAgIHRoaXMuX2ltYWdlLnNyYyA9IGxpbms7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90ZXh0LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aFN1Ym1pdCBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19idXR0b24nKTtcclxuICAgIH1cclxuICAgIHJlbmRlcmVyTG9hZGluZyhsb2FkaW5nKSB7XHJcbiAgICAgICAgaWYobG9hZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcItCj0LTQsNC70LXQvdC40LUuLi5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcItCU0LBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRTdWJtaXRIYW5kbGVycyhzdWJtaXRIYW5kbGVycykge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBzdWJtaXRIYW5kbGVycztcclxuICAgIH1cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIsIGNvbnRhaW5lclNlbGVjdG9yKSB7IFxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgcmVuZGVySXRlbXMoaXRlbXMpIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQodGhpcy5fcmVuZGVyZXIoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIGpvYlNlbGVjdG9yLCB1c2VyUHJvZmlsZUltYWdlU2VsZWN0b3IgfSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2JTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fcHJvZmlsZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyUHJvZmlsZUltYWdlU2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgam9iOiB0aGlzLl9qb2IudGV4dENvbnRlbnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0VXNlckluZm8oe25hbWUsIGpvYiwgaW1hZ2V9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fam9iLnRleHRDb250ZW50ID0gam9iO1xyXG4gICAgICAgIHRoaXMuX3Byb2ZpbGVJbWFnZS5zcmMgPSBpbWFnZTtcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgQXBpIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoU3VibWl0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoU3VibWl0LmpzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xyXG5cclxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF9uYW1lJyk7XHJcbmNvbnN0IGpvYklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF9qb2InKTtcclxuY29uc3QgcG9wdXBBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkJyk7XHJcbmNvbnN0IHBvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQnKTtcclxuY29uc3QgaW1hZ2VFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2ltYWdlLWVkaXQtYnV0dG9uJyk7XHJcbmNvbnN0IHByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbmNvbnN0IGZvcm1BZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1jYXJkLXBvcHVwX19mb3JtJyk7XHJcbmNvbnN0IHByb2ZpbGVJbWFnZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyLWVkaXRfX2Zvcm0nKTtcclxuY29uc3QgcG9wdXBTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWNhcmQtcG9wdXBfX2J1dHRvbicpO1xyXG5jb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcclxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX2J1dHRvbicsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19idXR0b25faW52YWxpZCcsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X2Vycm9yJyxcclxuICBlcnJvckNsYXNzOiAnZXJyb3InXHJcbn07XHJcbmNvbnN0IGFwaUNvbmZpZyA9IHtcclxuICB1cmw6ICdodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTYyJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBhdXRob3JpemF0aW9uOiAnYzQxYzY2ZmUtMzM0Yi00M2Q3LWEwM2YtZGU5MDZmNjgxYzY1JyxcclxuICAgIFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG59O1xyXG5sZXQgdXNlcklkO1xyXG5cclxuY29uc3QgcHJvZmlsZVZhbGlkYXRvckVkaXQgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIHByb2ZpbGVGb3JtKTtcclxuY29uc3QgY2FyZFZhbGlkYXRvckFkZCA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgZm9ybUFkZENhcmQpO1xyXG5jb25zdCBwcm9maWxlSW1hZ2VWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIHByb2ZpbGVJbWFnZUZvcm0pO1xyXG5cclxucHJvZmlsZVZhbGlkYXRvckVkaXQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5jYXJkVmFsaWRhdG9yQWRkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxucHJvZmlsZUltYWdlVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoYXBpQ29uZmlnKTtcclxuXHJcblByb21pc2UuYWxsKFthcGkuZ2V0VXNlckluZm8oKSwgYXBpLmdldEluaXRpYWxDYXJkcygpXSlcclxuICAudGhlbigoW21lLCBjYXJkc10pID0+IHtcclxuICAgIHVzZXJJZCA9IG1lLl9pZDtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKG1lKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLnJlbmRlckl0ZW1zKGNhcmRzKTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIC5maW5hbGx5KCgpID0+IHsgfSk7XHJcblxyXG5jb25zdCBjYXJkc0NvbnRhaW5lciA9IG5ldyBTZWN0aW9uKFxyXG4gIChjYXJkKSA9PiBjcmVhdGVOZXdDYXJkKGNhcmQpLFxyXG4gICcuZWxlbWVudC10ZW1wbGF0ZSdcclxuKTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lU2VsZWN0b3I6ICcucHJvZmlsZV9fbmFtZScsXHJcbiAgam9iU2VsZWN0b3I6ICcucHJvZmlsZV9fam9iJyxcclxuICB1c2VyUHJvZmlsZUltYWdlU2VsZWN0b3I6ICcucHJvZmlsZV9faW1hZ2UnXHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlblBvcHVwSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5jYXJkLXBvcHVwJyk7XHJcbm9wZW5Qb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cFdpdGhTdWJtaXQgPSBuZXcgUG9wdXBXaXRoU3VibWl0KCcuY2FyZC1kZWxldGUnKTtcclxucG9wdXBXaXRoU3VibWl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cFVzZXJFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5wcm9maWxlLXBvcHVwJywgKGRhdGEpID0+IHtcclxuICBjb25zdCB7IG5hbWVJbnB1dCwgam9iSW5wdXQgfSA9IGRhdGE7XHJcbiAgcG9wdXBVc2VyRWRpdC5yZW5kZXJlckxvYWRpbmcodHJ1ZSk7XHJcbiAgYXBpXHJcbiAgICAuZWRpdFVzZXJJbmZvKG5hbWVJbnB1dCwgam9iSW5wdXQpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcclxuICAgICAgcG9wdXBVc2VyRWRpdC5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgLmZpbmFsbHkoKCkgPT4gcG9wdXBVc2VyRWRpdC5yZW5kZXJlckxvYWRpbmcoZmFsc2UpKTtcclxufSk7XHJcbnBvcHVwVXNlckVkaXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHBvcHVwUHJvZmlsZUltYWdlRWRpdCA9IG5ldyBQb3B1cFdpdGhGb3JtKCcuYXZhdGFyLWVkaXQnLCAoZGF0YSkgPT4ge1xyXG4gIHBvcHVwUHJvZmlsZUltYWdlRWRpdC5yZW5kZXJlckxvYWRpbmcodHJ1ZSk7XHJcbiAgYXBpXHJcbiAgICAuZWRpdFByb2ZpbGVJbWFnZShkYXRhKVxyXG4gICAgLnRoZW4oKGZvcm1EYXRhKSA9PiB7XHJcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGZvcm1EYXRhKTtcclxuICAgICAgcG9wdXBQcm9maWxlSW1hZ2VFZGl0LmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAuZmluYWxseSgoKSA9PiBwb3B1cFByb2ZpbGVJbWFnZUVkaXQucmVuZGVyZXJMb2FkaW5nKGZhbHNlKSk7XHJcbn0pO1xyXG5wb3B1cFByb2ZpbGVJbWFnZUVkaXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHBvcHVwQWRkQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKCcuYWRkLWNhcmQtcG9wdXAnLCAoZGF0YUNhcmQpID0+IHtcclxuICBwb3B1cEFkZENhcmQucmVuZGVyZXJMb2FkaW5nKHRydWUpO1xyXG4gIGNvbnN0IHsgbmFtZSwgbGluayB9ID0gZGF0YUNhcmQ7XHJcbiAgYXBpXHJcbiAgICAuYWRkTmV3Q2FyZChuYW1lLCBsaW5rKVxyXG4gICAgLnRoZW4oKG5ld0RhdGFDYXJkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVOZXdDYXJkKG5ld0RhdGFDYXJkKTtcclxuICAgICAgY2FyZHNDb250YWluZXIuYWRkSXRlbShjYXJkKTtcclxuICAgICAgY2FyZFZhbGlkYXRvckFkZC5kaXNhYmxlQnV0dG9uKHBvcHVwU3VibWl0QnV0dG9uKTtcclxuICAgICAgcG9wdXBBZGRDYXJkLmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAuZmluYWxseSgoKSA9PiBwb3B1cEFkZENhcmQucmVuZGVyZXJMb2FkaW5nKGZhbHNlKSk7XHJcbn0pO1xyXG5wb3B1cEFkZENhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld0NhcmQgPSAoZGF0YUNhcmQpID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICBkYXRhQ2FyZCxcclxuICAgICcuZWxlbWVudC10ZW1wbGF0ZScsXHJcbiAgICAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgICBvcGVuUG9wdXBJbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xyXG4gICAgfSxcclxuICAgIChpZCkgPT4ge1xyXG4gICAgICBwb3B1cFdpdGhTdWJtaXQub3BlbigpO1xyXG4gICAgICBwb3B1cFdpdGhTdWJtaXQuc2V0U3VibWl0SGFuZGxlcnMoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwV2l0aFN1Ym1pdC5yZW5kZXJlckxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuZGVsZXRlQ2FyZChpZClcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY2FyZC5kZWxldGVDYXJkKHJlcyk7XHJcbiAgICAgICAgICAgIHBvcHVwV2l0aFN1Ym1pdC5jbG9zZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4gcG9wdXBXaXRoU3VibWl0LnJlbmRlcmVyTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAoaWQpID0+IHtcclxuICAgICAgaWYgKCFjYXJkLmFscmVhZHlMaWtlZCgpKSB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuYWRkTGlrZUNhcmQoaWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnNldExpa2VzQ2FyZChkYXRhLmxpa2VzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuZGVsZXRlTGlrZUNhcmQoaWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLnNldExpa2VzQ2FyZChkYXRhLmxpa2VzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VySWRcclxuICApO1xyXG4gIHJldHVybiBjYXJkLmNyZWF0ZUNhcmQoKVxyXG59O1xyXG5cclxucG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBVc2VyRWRpdC5fZ2V0SW5wdXRWYWx1ZXModXNlckluZm8uZ2V0VXNlckluZm8oKSk7XHJcbiAgcG9wdXBVc2VyRWRpdC5vcGVuKCk7XHJcbn0pO1xyXG5cclxucG9wdXBBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBBZGRDYXJkLm9wZW4oKTtcclxufSk7XHJcblxyXG5pbWFnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBQcm9maWxlSW1hZ2VFZGl0Lm9wZW4oKTtcclxufSkiXSwibmFtZXMiOlsiQXBpIiwiX3JlZiIsInVybCIsImhlYWRlcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdXJsIiwiX2hlYWRlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9nZXRSZXNwb25zZSIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJjb25jYXQiLCJzdGF0dXMiLCJnZXRVc2VySW5mbyIsIl90aGlzIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiZ2V0SW5pdGlhbENhcmRzIiwiX3RoaXMyIiwiZWRpdFVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VySm9iIiwiX3RoaXMzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiYWJvdXQiLCJhZGROZXdDYXJkIiwibGluayIsIl90aGlzNCIsImRlbGV0ZUNhcmQiLCJpZCIsIl90aGlzNSIsImFkZExpa2VDYXJkIiwiX3RoaXM2IiwiZGVsZXRlTGlrZUNhcmQiLCJfdGhpczciLCJlZGl0UHJvZmlsZUltYWdlIiwiYXZhdGFyIiwiX3RoaXM4IiwiZGVmYXVsdCIsIkNhcmQiLCJkYXRhIiwidGVtcGxhdGUiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVUcmFzaENsaWNrIiwiaGFuZGxlTGlrZUNsaWNrIiwidXNlcklkIiwiX2RlZmluZVByb3BlcnR5IiwiX25ld0VsZW1lbnQiLCJyZW1vdmUiLCJfZGF0YSIsIl9uYW1lIiwiX2xpbmsiLCJfbGlrZXMiLCJsaWtlcyIsIl9pZCIsIl9vd2VuZXJJZCIsIm93bmVyIiwiX3VzZXJJZCIsIl90ZW1wbGF0ZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlVHJhc2hDbGljayIsIl9oYW5kbGVMaWtlQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjcmVhdGVDYXJkIiwiX2NhcmRUZXh0IiwiX2NhcmRJbWFnZSIsInRleHRDb250ZW50IiwiYWx0Iiwic3JjIiwiX3RyYXNoQnV0dG9uIiwiX2xpa2VCdXR0b24iLCJfc2V0TGlzdGVuZXJzRm9ySXRlbSIsInNldExpa2VzQ2FyZCIsIl9vd25lcklkIiwiX2FjdGl2ZUxpa2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJfZGVhY3RpdmVMaWtlIiwiYWxyZWFkeUxpa2VkIiwic29tZSIsInVzZXJMaWtlIiwibmV3TGlrZXMiLCJsaWtlQ291bnRlciIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtIiwiX2Zvcm0iLCJfc2V0dGluZ3MiLCJfY3VycmVudEJ1dHRvbiIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsIl9zZXRFdmVudExpc3RlbmVycyIsImRpc2FibGVCdXR0b24iLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX3ZhbGlkYXRlSW5wdXQiLCJldmVudCIsIl9pbnB1dCIsInRhcmdldCIsIl9pc1ZhbGlkRmllbGQiLCJfaXNWYWxpZEJ1dHRvbkFuZElucHV0IiwiX2Vycm9yU3BhbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiY2hlY2tWYWxpZGl0eSIsIl9zZXRTdWJtaXRCdXR0b24iLCJfc2V0RXJyb3JJbnB1dCIsInN0YXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5wdXRFcnJvckNsYXNzIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIm9wZW4iLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRFdmVudExpc3RlbmVycyIsImV2dCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJjYWxsIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfaW5wdXRGb3JtIiwiX2lucHV0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJmb3JFYWNoIiwiaW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJyZXNldCIsInJlbmRlcmVyTG9hZGluZyIsImxvYWRpbmciLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWFnZSIsIl90ZXh0IiwiUG9wdXBXaXRoU3VibWl0Iiwic2V0U3VibWl0SGFuZGxlcnMiLCJzdWJtaXRIYW5kbGVycyIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImFkZEl0ZW0iLCJpdGVtIiwicHJlcGVuZCIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJhcHBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwidXNlclByb2ZpbGVJbWFnZVNlbGVjdG9yIiwiX2pvYiIsIl9wcm9maWxlSW1hZ2UiLCJqb2IiLCJzZXRVc2VySW5mbyIsIl9yZWYyIiwiaW1hZ2UiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInBvcHVwQWRkQnV0dG9uIiwicG9wdXBCdXR0b24iLCJpbWFnZUVkaXRCdXR0b24iLCJwcm9maWxlRm9ybSIsImZvcm1BZGRDYXJkIiwicHJvZmlsZUltYWdlRm9ybSIsInBvcHVwU3VibWl0QnV0dG9uIiwidmFsaWRhdGlvblNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsImVycm9yQ2xhc3MiLCJhcGlDb25maWciLCJhdXRob3JpemF0aW9uIiwicHJvZmlsZVZhbGlkYXRvckVkaXQiLCJjYXJkVmFsaWRhdG9yQWRkIiwicHJvZmlsZUltYWdlVmFsaWRhdG9yIiwiYXBpIiwiYWxsIiwiX3NsaWNlZFRvQXJyYXkiLCJtZSIsImNhcmRzIiwidXNlckluZm8iLCJjYXJkc0NvbnRhaW5lciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjYXJkIiwiY3JlYXRlTmV3Q2FyZCIsIm9wZW5Qb3B1cEltYWdlIiwicG9wdXBXaXRoU3VibWl0IiwicG9wdXBVc2VyRWRpdCIsInBvcHVwUHJvZmlsZUltYWdlRWRpdCIsImZvcm1EYXRhIiwicG9wdXBBZGRDYXJkIiwiZGF0YUNhcmQiLCJuZXdEYXRhQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=