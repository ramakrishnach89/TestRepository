ko.bindingHandlers.rangeSlider = {
	init: function (element, valueAccessor, allBindingsAccessor) {
		var options = allBindingsAccessor().sliderOptions || {};
		var sliderValues = ko.utils.unwrapObservable(valueAccessor().ValuesArray());
		var observable = valueAccessor;

		options.values = sliderValues;
		options.slide = function (event, ui) {
			observable().UpdateValues(ui.values);
		};

		observable().Total.subscribe(function () {
			$(element).slider("destroy");
			options.values = sliderValues;
			$(element).slider(options);
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			$(element).slider("destroy");
		});

		$(element).slider(options);
	},
	update: function (element, valueAccessor) {
		var sliderValues = ko.utils.unwrapObservable(valueAccessor().ValuesArray());
		$(element).slider("values", sliderValues);
	}
};

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


var Model = function (initialValues) {
	var self = this;

	self.ValuesArray = ko.observableArray(initialValues);

	self.Total = ko.computed(function () {
		return self.ValuesArray().length;
	}).extend({ rateLimit: 100 });

	self.UpdateValues = function (values) {
		self.ValuesArray.removeAll();
		values.forEach(function (c) {
			self.ValuesArray.push(c);
		});
		//self.ValuesArray = ko.observableArray(initialValues);
	};

};

var VM = function () {
	//var _ranges = ko.observableArray([200, 1000, 5000]);

	var _ranges = ko.observable(new Model([200, 1000, 5000]));

	var _isEnable = ko.observable(true);

	function toggle() {
		_isEnable(!_isEnable());
	};

	function add() {
		_ranges().ValuesArray.push(0);
	};

	function remove(range) {
		_ranges().ValuesArray.remove(range);
	};

	return {
		Ranges: _ranges,
		IsEnable:_isEnable,
		Add: add,
		Remove: remove,
		Toggle: toggle
	};
};


$(document).ready(function () {
	ko.applyBindings(new VM(), document.getElementById("appPane"));
});

