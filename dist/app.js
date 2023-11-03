"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _users = _interopRequireDefault(require("./routes/users.js"));
var _products = _interopRequireDefault(require("./routes/products.js"));
var _purchases = _interopRequireDefault(require("./routes/purchases.js"));
var _login = _interopRequireDefault(require("./routes/login.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//I import my necessary dependencies

// importing routes

/**
 * 
 * @apiDescription inicialization
 *
 */
var app = (0, _express["default"])();

/**
 * 
 * @apiDescription middlewares
 *
 */
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());

/**
 * @api /api/purchases
 * @apiName routes
 * @apiGroup routes
 * @apiDescription route definition
 *
 */
app.use('/api/users', _users["default"]);
app.use('/api/products', _products["default"]);
app.use('/api/purchases', _purchases["default"]);
app.use('/api/login', _login["default"]);

// I export my app variable
var _default = exports["default"] = app;