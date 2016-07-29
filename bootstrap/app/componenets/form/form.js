import angular from 'angular';
import * as formsService from '../../../components/msw.forms/index.js';

import fromTemplate from'./form.html!text';

let form = angular.module('prefix.form', []);

form.run([
	'prefixNavigationService', 'dashboardService',
	(prefixNavigationService, dashboardService) => {

		prefixNavigationService.addButton(
			undefined,
			'Added form in the grid',
			'',
			() => {
				dashboardService.addWidget('grid', 'Window', 'prefix-form');
			},
			false);

		prefixNavigationService.addButton(
			undefined,
			'Added form in window',
			'',
			() => {
				dashboardService.addWidget('window', 'Window', 'prefix-form');
			},
			false);
	}]);

form.controller('formCtrl', [
	'$scope',
	class {
		constructor($scope) {
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

form.directive('prefixForm', () => {
	let directive = {
		template: fromTemplate,
		controllerAs: 'ctrl',
		controller: 'formCtrl'
	}

	return directive;
});

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

export default form;