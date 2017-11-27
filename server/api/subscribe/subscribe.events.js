/**
 * Subscribe model events
 */

'use strict';

import {EventEmitter} from 'events';
var SubscribeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SubscribeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Subscribe) {
  for(var e in events) {
    let event = events[e];
    Subscribe.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    SubscribeEvents.emit(event + ':' + doc._id, doc);
    SubscribeEvents.emit(event, doc);
  };
}

export {registerEvents};
export default SubscribeEvents;
