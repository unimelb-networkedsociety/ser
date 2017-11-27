import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http, $scope, socket, Subscribe, toaster, smoothScroll) {
    this.socket = socket;
    this.Subscribe = Subscribe;
    this.toaster = toaster;
    this.smoothScroll = smoothScroll;
  }

  reset(){
    this.submitted = false;
    this.subscribe = {};
  }

  register(form){
    this.submitted = true;
    if(form.$valid){
      this.Subscribe.save(this.subscribe, () => {
        form.$setPristine();
        form.$setUntouched();
        this.smoothScroll.scrollTo('navbar');
        this.reset();
        this.toaster.success('Thank you');
      }, () => {
        this.toaster.error('This email address is already in use.');
      });

    }
  }
}

export default angular.module('serApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'MainCtrl'
  })
  .name;
