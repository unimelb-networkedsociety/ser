'use strict';
const angular = require('angular');

/*@ngInject*/
export function toasterService(toastr) {
  return {

    success(message) {
      return toastr.success(message, 'Success');
    },

    error(message) {
      return toastr.error(message, 'Error');
    }
  };
}


export default angular.module('serApp.toaster', [])
  .config(toastrConfig => {
    angular.extend(toastrConfig, {
      positionClass: 'toast-bottom-right'
    });
  })
  .factory('toaster', toasterService)
  .name;
