import angular from 'angular';
import 'angular-route';
import moduleTpl from './componenets/form.html!text';

//region Layout
import layout from '../components/msw.layout/index.js';
//import layout from 'milenstanev/msw.layout';

import * as formsService from '../components/msw.forms/index.js';
//endregion

let app = angular.module('prefix.app', [
	'ngRoute',
	layout.name
]);

app.config(($routeProvider) => {
	$routeProvider
		.when('/', {
			controller: 'mainCtrl',
			controllerAs: 'ctrl',
			template: moduleTpl
		})
		.otherwise('/');
});

app.controller('mainCtrl', [
	'$scope', 'prefixNavigationService',
	class {
		constructor($scope, prefixNavigationService) {
			prefixNavigationService.addButton(
				undefined,
				'Added from service',
				'',
				() => {
					console.log('callToAction');
				},
				false);
			
			this.init();
		}

		init() {
			let apiData = {
				name: 'Cell 2 name',
				password: '654321',
				checkbox: false,
				radio: 2,
				select: 2
			};

			this.form2 = new RowDataModel(apiData);

			console.log(
				JSON.stringify(this.form2.getData())
			);
		}
	}
]);

class RowDataModel extends formsService.FieldsDataModelHelper {
	constructor(rowData) {
		super();

		this.name = new formsService.FieldTypeInputText(
			rowData.name,
			'Field is required',
			'Cell 1'
		);

		this.password = new formsService.FieldTypeInputPassword(
			rowData.password,
			'Cel 1 password'
		)

		this.checkbox = new formsService.FieldTypeInputCheckbox(
			rowData.checkbox,
			'Checkbox'
		)

		this.radio = new formsService.FieldTypeInputRadio(
			rowData.radio,
			[
				{
					value: 1,
					labelText: 'radio 1'
				},
				{
					value: 2,
					labelText: 'radio 2'
				}
			],
			'Radio group'
		)

		this.select = new formsService.FieldTypeSelect(
			rowData.select,
			[
				{
					value: 1,
					text: 'select option 1'
				},
				{
					value: 2,
					text: 'select option 2'
				}
			],
			'Select in cell 1'
		)
	}
}