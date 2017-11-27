/**
 * Subscribe model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerEvents = undefined;

var _events = require('events');

var SubscribeEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
SubscribeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Subscribe) {
  for (var e in events) {
    var event = events[e];
    Subscribe.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function (doc) {
    SubscribeEvents.emit(event + ':' + doc._id, doc);
    SubscribeEvents.emit(event, doc);
  };
}

exports.registerEvents = registerEvents;
exports.default = SubscribeEvents;
//# sourceMappingURL=subscribe.events.js.map
