import angular from 'angular';
import {radarChartController} from "./radar-chart.controller";
import radarChartStyles from './radar-chart.scss';

export const radarChartModule = angular
    .module('gblink.components.radarChart', [

    ])
    .component('gblinkRadarChart', {
        controller: radarChartController,
        template: require('./radar-chart.html'),
        bindings: {
            data: '<radarData'
        }
    })
    .name;