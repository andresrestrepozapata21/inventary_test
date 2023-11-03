"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database.js");
var _purchase = _interopRequireDefault(require("./purchase.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// I imported the Sequelize module and my custom sequelize module with the configuration and connection to the DB

// I define the model for the users table in a variable
var User = _database.sequelize.define('users', {
  id_user: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  first_name_user: {
    type: _sequelize["default"].TEXT
  },
  last_name_user: {
    type: _sequelize["default"].TEXT
  },
  phone_number_user: {
    type: _sequelize["default"].TEXT
  },
  email_user: {
    type: _sequelize["default"].TEXT
  },
  password_user: {
    type: _sequelize["default"].TEXT
  },
  last_login_user: {
    type: _sequelize["default"].DATE
  },
  date_created_user: {
    type: _sequelize["default"].DATE
  },
  flag_rol_user: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});
// I define the relationship between the user table and the purchases table
User.hasMany(_purchase["default"], {
  foreignKey: 'fk_id_user_purchase',
  sourceKey: 'id_user'
});
_purchase["default"].belongsTo(User, {
  foreignKey: 'fk_id_user_purchase',
  sourceKey: 'id_user'
});

// I export the users model
var _default = exports["default"] = User;