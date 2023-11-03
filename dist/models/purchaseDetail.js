"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB

// I define the model for the users table in a variable
var PurchaseDetail = _database.sequelize.define('purchasesdetails', {
  id_purchasesdetail: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  quantity_product_purchasedetail: {
    type: _sequelize["default"].INTEGER
  },
  date_created_purchasedetailt: {
    type: _sequelize["default"].DATE
  },
  fk_id_purchase_purchasedetail: {
    type: _sequelize["default"].INTEGER
  },
  fk_id_product_purchasedetail: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

// I export the users model
var _default = exports["default"] = PurchaseDetail;