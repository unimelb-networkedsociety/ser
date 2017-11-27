'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './subscribe.events';

let SubscribeSchema = new mongoose.Schema({
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

registerEvents(SubscribeSchema);
export default mongoose.model('Subscribe', SubscribeSchema);
