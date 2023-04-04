/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, template, handleCardClick) {
    _classCallCheck(this, Card);
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      this._newElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
      return this._newElement;
    }
  }, {
    key: "createCard",
    value: function createCard() {
      this._getTemplate();
      var imageSrc = this._newElement.querySelector('.element__image');
      var cardText = this._newElement.querySelector('.element__text');
      imageSrc.src = this._link;
      imageSrc.alt = this._name;
      cardText.textContent = this._name;
      this._setListenersForItem();
      return this._newElement;
    }
  }, {
    key: "_deleteCard",
    value: function _deleteCard() {
      this._newElement.remove();
      this._newElement = null;
    }
  }, {
    key: "_addOrRemoveLike",
    value: function _addOrRemoveLike() {
      this._elementLike.classList.toggle('element__liked');
    }
  }, {
    key: "_setListenersForItem",
    value: function _setListenersForItem() {
      var _this = this;
      this._deleteCardButton = this._newElement.querySelector('.element__delete');
      this._deleteCardButton.addEventListener('click', function () {
        _this._deleteCard();
      });
      this._elementLike = this._newElement.querySelector('.element__like');
      this._elementLike.addEventListener('click', function () {
        _this._addOrRemoveLike();
      });
      this._cardImage = this._newElement.querySelector('.element__image');
      this._cardImage.addEventListener('click', function () {
        _this._handleCardClick({
          name: _this._name,
          link: _this._link
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
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(data) {
      this._container.prepend(data);
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
      jobSelector = _ref.jobSelector;
    _classCallCheck(this, UserInfo);
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
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
        job = _ref2.job;
      this._name.textContent = name;
      this._job.textContent = job;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/cards.js":
/*!****************************!*\
  !*** ./src/utils/cards.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

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
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_cards_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/cards.js */ "./src/utils/cards.js");








var nameInput = document.querySelector('.popup__input_name');
var jobInput = document.querySelector('.popup__input_job');
var popupAddButton = document.querySelector('.profile__add');
var popupButton = document.querySelector('.profile__edit');
var profileForm = document.querySelector('.popup__form');
var formAddCard = document.querySelector('.add-card-popup__form');
var popupSubmitButton = document.querySelector('.add-card-popup__button');
var validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error'
};
var profileValidatorEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](validationSettings, profileForm);
var cardValidatorAdd = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](validationSettings, formAddCard);
profileValidatorEdit.enableValidation();
cardValidatorAdd.enableValidation();
var cardsContainer = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  items: _utils_cards_js__WEBPACK_IMPORTED_MODULE_7__.initialCards,
  renderer: function renderer(item) {
    var card = createCard(item);
    cardsContainer.addItem(card);
  }
}, ".elements");
var createCard = function createCard(_ref) {
  var name = _ref.name,
    link = _ref.link;
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    name: name,
    link: link
  }, '.element-template', function (name, link) {
    openPopupImage.open(name, link);
  });
  return newCard.createCard();
};
cardsContainer.renderItems();
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});
var popupEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"]('.profile-popup', function (inputValues) {
  popupEdit.close();
  userInfo.setUserInfo(inputValues);
});
popupEdit.setEventListeners();
var popupAdd = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"]('.add-card-popup', function (inputValues) {
  var card = createCard(inputValues);
  cardsContainer.addItem(card);
  popupAdd.close();
  cardValidatorAdd.disableButton(popupSubmitButton);
});
popupAdd.setEventListeners();
var openPopupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.card-popup');
openPopupImage.setEventListeners();
popupButton.addEventListener('click', function () {
  popupEdit.open();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
});
popupAddButton.addEventListener('click', function () {
  popupAdd.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxVQUFDWSxXQUFXLEVBQUs7RUFDckVtRCxTQUFTLENBQUNwRSxLQUFLLEVBQUU7RUFDakJtRSxRQUFRLENBQUNwQixXQUFXLENBQUM5QixXQUFXLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBQ0ZtRCxTQUFTLENBQUNsRSxpQkFBaUIsRUFBRTtBQUU3QixJQUFNbUUsUUFBUSxHQUFHLElBQUloRSxvRUFBYSxDQUFDLGlCQUFpQixFQUFFLFVBQUNZLFdBQVcsRUFBSztFQUNyRSxJQUFNK0MsSUFBSSxHQUFHdEgsVUFBVSxDQUFDdUUsV0FBVyxDQUFDO0VBQ3BDOEMsY0FBYyxDQUFDeEIsT0FBTyxDQUFDeUIsSUFBSSxDQUFDO0VBQzVCSyxRQUFRLENBQUNyRSxLQUFLLEVBQUU7RUFDaEI4RCxnQkFBZ0IsQ0FBQ3pGLGFBQWEsQ0FBQ21GLGlCQUFpQixDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUNGYSxRQUFRLENBQUNuRSxpQkFBaUIsRUFBRTtBQUU1QixJQUFNZ0UsY0FBYyxHQUFHLElBQUl4QyxxRUFBYyxDQUFDLGFBQWEsQ0FBQztBQUN4RHdDLGNBQWMsQ0FBQ2hFLGlCQUFpQixFQUFFO0FBRWxDbUQsV0FBVyxDQUFDNUYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDMUMyRyxTQUFTLENBQUNyRSxJQUFJLEVBQUU7RUFDaEJtRCxTQUFTLENBQUMvRyxLQUFLLEdBQUdnSSxRQUFRLENBQUN0QixXQUFXLEVBQUUsQ0FBQ2pILElBQUk7RUFDN0N1SCxRQUFRLENBQUNoSCxLQUFLLEdBQUdnSSxRQUFRLENBQUN0QixXQUFXLEVBQUUsQ0FBQ0MsR0FBRztBQUM3QyxDQUFDLENBQUM7QUFFRk0sY0FBYyxDQUFDM0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDN0M0RyxRQUFRLENBQUN0RSxJQUFJLEVBQUU7QUFDakIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgdGVtcGxhdGUsIGhhbmRsZUNhcmRDbGljaykge1xyXG4gICAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcclxuICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICB0aGlzLl9uZXdFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGUpXHJcbiAgICAgIC5jb250ZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5fbmV3RWxlbWVudDtcclxuICB9XHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgICAgdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgY29uc3QgaW1hZ2VTcmMgPSB0aGlzLl9uZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19pbWFnZScpO1xyXG4gICAgICBjb25zdCBjYXJkVGV4dCA9IHRoaXMuX25ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3RleHQnKTtcclxuXHJcbiAgICAgIGltYWdlU3JjLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICAgIGltYWdlU3JjLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICAgIGNhcmRUZXh0LnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuX3NldExpc3RlbmVyc0Zvckl0ZW0oKTtcclxuICAgICAgcmV0dXJuIHRoaXMuX25ld0VsZW1lbnQ7XHJcbiAgfVxyXG4gIF9kZWxldGVDYXJkKCkge1xyXG4gICAgdGhpcy5fbmV3RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX25ld0VsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuICBfYWRkT3JSZW1vdmVMaWtlKCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QudG9nZ2xlKCdlbGVtZW50X19saWtlZCcpO1xyXG4gICAgfVxyXG4gIF9zZXRMaXN0ZW5lcnNGb3JJdGVtKCkge1xyXG4gICAgICB0aGlzLl9kZWxldGVDYXJkQnV0dG9uID0gdGhpcy5fbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fZGVsZXRlJyk7XHJcbiAgICAgIHRoaXMuX2RlbGV0ZUNhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQ2FyZCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9uZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJyk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2FkZE9yUmVtb3ZlTGlrZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9faW1hZ2UnKTtcclxuICAgICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh7bmFtZTogdGhpcy5fbmFtZSwgbGluazogdGhpcy5fbGlua30pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9jdXJyZW50QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3NldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH1cclxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZUlucHV0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF92YWxpZGF0ZUlucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZEZpZWxkKCk7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZEJ1dHRvbkFuZElucHV0KCk7XHJcbiAgICB9XHJcbiAgICBfaXNWYWxpZEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuX2Vycm9yU3BhbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5faW5wdXQuaWR9LWVycm9yYCk7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JTcGFuLnRleHRDb250ZW50ID0gdGhpcy5faW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBfaXNWYWxpZEJ1dHRvbkFuZElucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRTdWJtaXRCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0U3VibWl0QnV0dG9uKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAodGhpcy5faW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEVycm9ySW5wdXQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0RXJyb3JJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3NldFN1Ym1pdEJ1dHRvbihzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbih0aGlzLl9jdXJyZW50QnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfc2V0RXJyb3JJbnB1dChzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yU3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheV9vcGVuZWQnKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheV9vcGVuZWQnKTtcclxuICAgIH1cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5X29wZW5lZCcpIFxyXG4gICAgICAgICAgICB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtYnV0dG9uJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICAgICAgdGhpcy5faW5wdXRGb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpO1xyXG4gICAgfVxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gICAgfVxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLl9pbnB1dEZvcm0ucmVzZXQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wb3B1cF9faW1hZ2UnKTtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLmNhcmQtcG9wdXBfX3RleHQnKTtcclxuICAgIH1cclxuICAgIG9wZW4oe25hbWUsIGxpbmt9KSB7XHJcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcclxuICAgICAgICB0aGlzLl9pbWFnZS5hbHQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3RleHQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3Ioe2l0ZW1zLCByZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yKSB7IFxyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRJdGVtKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChkYXRhKTtcclxuICAgICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIGpvYlNlbGVjdG9yIH0pIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2pvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgam9iOiB0aGlzLl9qb2IudGV4dENvbnRlbnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0VXNlckluZm8oe25hbWUsIGpvYn0pIHtcclxuICAgICAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9qb2IudGV4dENvbnRlbnQgPSBqb2I7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICfQkNGA0YXRi9C3JyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQmNCy0LDQvdC+0LLQvicsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2l2YW5vdm8uanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9Ca0LDQvNGH0LDRgtC60LAnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9Cl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9JyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQkdCw0LnQutCw0LsnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9iYWlrYWwuanBnJ1xyXG4gIH1cclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC5qcyc7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMgfSBmcm9tICcuLi91dGlscy9jYXJkcy5qcyc7XHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X25hbWUnKTtcclxuY29uc3Qgam9iSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X2pvYicpO1xyXG5jb25zdCBwb3B1cEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQnKTtcclxuY29uc3QgcG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdCcpO1xyXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG5jb25zdCBmb3JtQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY2FyZC1wb3B1cF9fZm9ybScpO1xyXG5jb25zdCBwb3B1cFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY2FyZC1wb3B1cF9fYnV0dG9uJyk7XHJcbmNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcclxuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fYnV0dG9uJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9pbnZhbGlkJyxcclxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfZXJyb3InLFxyXG4gIGVycm9yQ2xhc3M6ICdlcnJvcidcclxufTtcclxuXHJcbmNvbnN0IHByb2ZpbGVWYWxpZGF0b3JFZGl0ID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNldHRpbmdzLCBwcm9maWxlRm9ybSk7XHJcbmNvbnN0IGNhcmRWYWxpZGF0b3JBZGQgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIGZvcm1BZGRDYXJkKTtcclxuXHJcbnByb2ZpbGVWYWxpZGF0b3JFZGl0LmVuYWJsZVZhbGlkYXRpb24oKTtcclxuY2FyZFZhbGlkYXRvckFkZC5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBjYXJkc0NvbnRhaW5lciA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoaXRlbSk7XHJcbiAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEl0ZW0oY2FyZCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXCIuZWxlbWVudHNcIlxyXG4pO1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyZCA9ICh7IG5hbWUsIGxpbmsgfSkgPT4ge1xyXG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZCh7IG5hbWUsIGxpbmsgfSwgJy5lbGVtZW50LXRlbXBsYXRlJywgKG5hbWUsIGxpbmspID0+IHtcclxuICAgIG9wZW5Qb3B1cEltYWdlLm9wZW4obmFtZSwgbGluayk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld0NhcmQuY3JlYXRlQ2FyZCgpO1xyXG59O1xyXG5cclxuY2FyZHNDb250YWluZXIucmVuZGVySXRlbXMoKTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lU2VsZWN0b3I6ICcucHJvZmlsZV9fbmFtZScsXHJcbiAgam9iU2VsZWN0b3I6ICcucHJvZmlsZV9fam9iJ1xyXG59KTtcclxuXHJcbmNvbnN0IHBvcHVwRWRpdCA9IG5ldyBQb3B1cFdpdGhGb3JtKCcucHJvZmlsZS1wb3B1cCcsIChpbnB1dFZhbHVlcykgPT4ge1xyXG4gIHBvcHVwRWRpdC5jbG9zZSgpO1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKGlucHV0VmFsdWVzKTtcclxufSk7XHJcbnBvcHVwRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgcG9wdXBBZGQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLmFkZC1jYXJkLXBvcHVwJywgKGlucHV0VmFsdWVzKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoaW5wdXRWYWx1ZXMpO1xyXG4gIGNhcmRzQ29udGFpbmVyLmFkZEl0ZW0oY2FyZCk7XHJcbiAgcG9wdXBBZGQuY2xvc2UoKTtcclxuICBjYXJkVmFsaWRhdG9yQWRkLmRpc2FibGVCdXR0b24ocG9wdXBTdWJtaXRCdXR0b24pO1xyXG59KVxyXG5wb3B1cEFkZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3Qgb3BlblBvcHVwSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5jYXJkLXBvcHVwJyk7XHJcbm9wZW5Qb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5wb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cEVkaXQub3BlbigpO1xyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCkubmFtZTtcclxuICBqb2JJbnB1dC52YWx1ZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCkuam9iO1xyXG59KTtcclxuXHJcbnBvcHVwQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBvcHVwQWRkLm9wZW4oKTtcclxufSkiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJ0ZW1wbGF0ZSIsImhhbmRsZUNhcmRDbGljayIsIl9jbGFzc0NhbGxDaGVjayIsIl9kYXRhIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX3RlbXBsYXRlIiwiX2hhbmRsZUNhcmRDbGljayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2dldFRlbXBsYXRlIiwiX25ld0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY3JlYXRlQ2FyZCIsImltYWdlU3JjIiwiY2FyZFRleHQiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl9zZXRMaXN0ZW5lcnNGb3JJdGVtIiwiX2RlbGV0ZUNhcmQiLCJyZW1vdmUiLCJfYWRkT3JSZW1vdmVMaWtlIiwiX2VsZW1lbnRMaWtlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX3RoaXMiLCJfZGVsZXRlQ2FyZEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfY2FyZEltYWdlIiwiZGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm0iLCJfZm9ybSIsIl9zZXR0aW5ncyIsIl9jdXJyZW50QnV0dG9uIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiZGlzYWJsZUJ1dHRvbiIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImFkZCIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfdmFsaWRhdGVJbnB1dCIsImV2ZW50IiwiX2lucHV0IiwidGFyZ2V0IiwiX2lzVmFsaWRGaWVsZCIsIl9pc1ZhbGlkQnV0dG9uQW5kSW5wdXQiLCJfZXJyb3JTcGFuIiwiY29uY2F0IiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImNoZWNrVmFsaWRpdHkiLCJfc2V0U3VibWl0QnV0dG9uIiwiX3NldEVycm9ySW5wdXQiLCJzdGF0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlucHV0RXJyb3JDbGFzcyIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJvcGVuIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJldnQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJfUG9wdXAiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJoYW5kbGVGb3JtU3VibWl0IiwiY2FsbCIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2lucHV0Rm9ybSIsIl9pbnB1dExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJmb3JFYWNoIiwiaW5wdXQiLCJfdGhpczIiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX3RleHQiLCJfcmVmIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJyZW5kZXJJdGVtcyIsIml0ZW0iLCJhZGRJdGVtIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwiam9iU2VsZWN0b3IiLCJfam9iIiwiZ2V0VXNlckluZm8iLCJqb2IiLCJzZXRVc2VySW5mbyIsIl9yZWYyIiwiaW5pdGlhbENhcmRzIiwibmFtZUlucHV0Iiwiam9iSW5wdXQiLCJwb3B1cEFkZEJ1dHRvbiIsInBvcHVwQnV0dG9uIiwicHJvZmlsZUZvcm0iLCJmb3JtQWRkQ2FyZCIsInBvcHVwU3VibWl0QnV0dG9uIiwidmFsaWRhdGlvblNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsImVycm9yQ2xhc3MiLCJwcm9maWxlVmFsaWRhdG9yRWRpdCIsImNhcmRWYWxpZGF0b3JBZGQiLCJjYXJkc0NvbnRhaW5lciIsImNhcmQiLCJuZXdDYXJkIiwib3BlblBvcHVwSW1hZ2UiLCJ1c2VySW5mbyIsInBvcHVwRWRpdCIsInBvcHVwQWRkIl0sInNvdXJjZVJvb3QiOiIifQ==