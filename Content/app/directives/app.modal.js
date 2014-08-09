var directive_broker = directive_broker || angular.module('ngscaffold.directives', ['ui.bootstrap']);

   directive_broker.directive('modallauncher', function ($modal, path) {
	   	return {
	   		restrict: 'E',
	   		link: function (scope, elem, attr) {
	   			var url = path.modal_templates + attr['template'] + '.html';
	   			var controller = attr['controller'];

	   			elem.on('click', function () {

	   			    var handle = $modal.open({
	   					controller: controller,
	   					templateUrl: url,
	   					resolve: {
	   						params: function () {
	   							var pojo = {};
	   							if (attr.paramName && attr.paramValue) {
	   								pojo[attr.paramName] = attr.paramValue;
	   							}

	   							if (attr.parentProperty) {
	   								pojo[attr.parentProperty] = scope[parentProperty];
	   							}

	   							return pojo;
	   						}
	   					}
	   				});

	   				handle.result.then(function (result) {
	   					if (attr.dialogCloseCallback && typeof (scope[attr.dialogCloseCallback]) == 'function') {
	   						scope[attr.dialogCloseCallback](result);
	   					}
	   				}, function (result) {

	   				})
	   			});
	   		}
	   	}
	   });