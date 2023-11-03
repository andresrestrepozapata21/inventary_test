"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database.js");
var _purchaseDetail = _interopRequireDefault(require("../models/purchaseDetail.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB

// I define the model for the purchases table in a variable
var Purchase = _database.sequelize.define('purchases', {
  id_purchase: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  total_price_purchase: {
    type: _sequelize["default"].INTEGER
  },
  date_created_purchase: {
    type: _sequelize["default"].DATE
  },
  fk_id_user_purchase: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});
// I define the relationship between the user table and the purchases table
Purchase.hasMany(_purchaseDetail["default"], {
  foreignKey: 'fk_id_purchase_purchasedetail',
  sourceKey: 'id_purchase'
});
_purchaseDetail["default"].belongsTo(Purchase, {
  foreignKey: 'fk_id_purchase_purchasedetail',
  sourceKey: 'id_purchase'
});

// I export the purchases model
var _default = exports["default"] = Purchase;