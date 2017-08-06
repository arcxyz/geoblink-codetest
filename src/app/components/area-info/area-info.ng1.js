import angular from 'angular';
import {areaInfoController} from "./area-info.controller";
import areaInfoStyles from './area-info.scss';

export const areaInfoModule = angular
    .module('gblink.components.areaInfo', [

    ])
    .component('gblinkAreaInfo', {
        controller: areaInfoController,
        template: require('./area-info.html'),
        bindings: {
            data: '<areaData',
            index: '@areaIndex'
        }
    })
    .name;