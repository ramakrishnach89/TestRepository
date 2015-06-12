ko.bindingHandlers.EnableAll = {
	init: function (element, valueAccessor, allBindingsAccessor) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		$(element).children().prop('disabled', !value);
	},
	update: function (element, valueAccessor, allBindingsAccessor) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		$(element).children().prop('disabled', !value);
	}
};

function ViewModel() {

	var _isEnable = ko.observable(true);

	function toggle() {
		_isEnable(!_isEnable());
	};

	return {
		IsEnable: _isEnable,
		Toggle: toggle
	};
}


$(document).ready(function () {
	ko.applyBindings(new ViewModel(), document.getElementById("appPane"));
});