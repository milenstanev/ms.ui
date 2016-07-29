import angular from 'angular';
import 'angular-route';

//region Layout
import layout from '../components/msw.layout/index.js';
//import layout from 'milenstanev/msw.layout';
//endregion

import form from './componenets/form/form.js';
import {default as inbox} from './componenets/inbox/module.js';

let app = angular.module('prefix.app', [
	'ngRoute',
	form.name,
	layout.name,
	inbox.name
]);

app.config(($routeProvider) => {
	$routeProvider
		.when('/', {
			controller: () => {},
			controllerAs: 'ctrl',
			template: ''
		})
		.otherwise('/');
});
