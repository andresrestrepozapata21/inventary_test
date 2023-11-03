"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database.js");
var _purchaseDetail = _interopRequireDefault(require("./purchaseDetail.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB

// I define the model for the users table in a variable
var Product = _database.sequelize.define('products', {
  id_product: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  lot_name_product: {
    type: _sequelize["default"].TEXT
  },
  name_product: {
    type: _sequelize["default"].TEXT
  },
  price_product: {
    type: _sequelize["default"].INTEGER
  },
  quantity_available_product: {
    type: _sequelize["default"].INTEGER
  },
  date_in_product: {
    type: _sequelize["default"].DATE
  },
  date_created_product: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});
// I define the relationship between the user table and the purchases table
Product.hasMany(_purchaseDetail["default"], {
  foreignKey: 'fk_id_product_purchasedetail',
  sourceKey: 'id_product'
});
_purchaseDetail["default"].belongsTo(Product, {
  foreignKey: 'fk_id_product_purchasedetail',
  sourceKey: 'id_product'
});
// I export the users model
var _default = exports["default"] = Product;