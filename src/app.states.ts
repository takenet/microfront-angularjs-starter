import 'angular-ui-router';
import * as angular from 'angular';
import { ILocationProvider } from 'angular';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

const homeStateName = 'fragment';
export const appStatesModules = angular
    .module('app', ['ui.router'])
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });

        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state(homeStateName, {
                url: '/',
                template: '<h1>Hello fragment!</h1>',
                controllerAs: '$ctrl',
                controller: function() { console.log('start'); },
            });
    })
    .name;
