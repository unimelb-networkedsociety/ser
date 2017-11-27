'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _subscribe = require('./subscribe.events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubscribeSchema = new _mongoose2.default.Schema({
  fname: String,
  lname: String,
  school: String,
  email: String,
  createDate: Date,
  active: {
    type: Boolean,
    default: true
  }
});

(0, _subscribe.registerEvents)(SubscribeSchema);
exports.default = _mongoose2.default.model('Subscribe', SubscribeSchema);
//# sourceMappingURL=subscribe.model.js.map
