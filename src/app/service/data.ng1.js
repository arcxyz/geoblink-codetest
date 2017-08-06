import angular from 'angular';
import DataService from './data.service';

export const dataModule = angular
    .module('gblink.data', [])
    .service('DataService', DataService)
    .name;
