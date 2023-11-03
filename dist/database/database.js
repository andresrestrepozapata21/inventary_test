"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// importo el modulo de Sequelize

// defino y exporto en una constante la instancia del Sequelize con la configuarion de la BD en este caso postgres
var sequelize = exports.sequelize = new _sequelize["default"]('postgres', 'postgres', 'andrello', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});