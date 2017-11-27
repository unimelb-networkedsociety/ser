'use strict';
const angular = require('angular');

/*@ngInject*/
export function SubscribeService($resource) {

  return $resource('/api/subscribes/:id/:controller', {
    id: '@_id'
  });
}


export default angular.module('serApp.subscribe', [])
  .factory('Subscribe', SubscribeService)
  .name;
