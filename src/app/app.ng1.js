import angular from 'angular';
import {appConfig} from './app.config';
import {dashboardModule} from './dashboard/dashboard.ng1';
import appStyles from './app.scss';

export const gblinkModule = angular
    .module('gblink', [
        dashboardModule
    ])
    .config(appConfig)
    .name;