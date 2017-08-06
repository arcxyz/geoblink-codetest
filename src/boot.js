import angular from 'angular';
import {gblinkModule} from './app/app.ng1';

angular
    .bootstrap(document.body, [gblinkModule], {strictDi: true});
