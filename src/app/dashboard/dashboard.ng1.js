import angular from 'angular';
import {dashboardController} from "./dashboard.controller";
import {
    radarChartModule,
    areaInfoModule
} from "../components/";
import {dataModule} from '../service/data.ng1';
import DashboardService from './dashboard.service';
import dashboardTemplate from './dashboard.html';
import dashboardStyles from './dashboard.scss';

export const dashboardModule = angular
    .module('gblinkApp.dashboard', [
        dataModule,

        // Components
        radarChartModule,
        areaInfoModule
    ])
    .component('gblinkDashboard', {
        controller: dashboardController,
        template: dashboardTemplate
    })
    .service('DashboardService', DashboardService)
    .name;