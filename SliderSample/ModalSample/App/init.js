requirejs.config({
	paths: {
		'text': '../Scripts/text',
		'knockout': '../Scripts/knockout-3.1.0.debug',
		//'koMapping': '../Scripts/knockout.mapping-latest.debug',
		'jquery': '../Scripts/jquery-2.1.1',
		'jqueryui': '../Scripts/jquery-ui-1.10.4',
		'domReady': '../Scripts/domReady',
		//'toastr': '../Scripts/toastr',
		//'arrayExtensions': '../Scripts/array.extensions',
		//'logger': 'helpers/logger'
		//'durandal': '../Scripts/durandal',
		//'plugins': '../Scripts/durandal/plugins',
		//'transitions': '../Scripts/durandal/transitions'
	},
	shim: {
		jqueryui: {
			deps: ['jquery'],
			exports: '$'
		}
		//,
		//koMapping: {
		//	deps: ['knockout'],
		//	exports: 'koMapping'
		//}

		//knockout: {
		//    exports: 'ko'
		//}
	}
});

//define('jquery', function () { return jQuery; });
//define('knockout', ko);

require(['knockout', 'viewModels/core/shell', 'customBindings/jqueryUiBindings', 'domReady!'], function (ko, shellViewModel) {
	ko.applyBindings(shellViewModel);
});