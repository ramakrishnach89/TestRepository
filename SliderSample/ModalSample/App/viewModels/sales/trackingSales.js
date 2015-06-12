define(['knockout', 'viewModels/core/eventBus'], function (ko, eventBus) {

	var _title = ko.observable('Tracking');

	function fireTrackingDialog() {
		eventBus.Notify(
			{
				Title: _title() + ' Modal',
				Content: 'This is the content for tracking model',
				AceptCallback: aceptCallback
			}, 'ShowModal');
	}

	function aceptCallback() {
		console.log(_title()+ ' was acepted');
	}

	return {
		Title: _title,
		FireTrackingDialog: fireTrackingDialog
	};
});