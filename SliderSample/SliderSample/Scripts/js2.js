ko.bindingHandlers.rangeSlider = {
	init: function (element, valueAccessor, allBindingsAccessor) {
		var options = allBindingsAccessor().sliderOptions || {};
		//var sliderValues = ko.utils.unwrapObservable(valueAccessor().ValuesArray());
		var observable = valueAccessor;

		var updateCallback = function() {
			$(element).slider("destroy");
			$(element).slider(options);
		};

		observable().UpdateCallback(updateCallback);

		options.values = observable().SimpleArray();
		options.slide = function (event, ui) {
			valueAccessor().UpdateValues(ui.values, updateCallback);
		};

		observable().Total.subscribe(function () {
			$(element).slider("destroy");
			observable().UpdateCallback(updateCallback);

			options.values = observable().SimpleArray();
			$(element).slider(options);
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			$(element).slider("destroy");
		});

		$(element).slider(options);
	},
	update: function (element, valueAccessor) {
		$(element).slider("values", valueAccessor().SimpleArray());
	}
};

ko.bindingHandlers.EnableAll = {
	update: function (element, valueAccessor, allBindingsAccessor) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		var domElement = $(element);
		domElement.find('input, button, select, textarea').prop('disabled', !value);
		
		if (value) {
			domElement.find('a').removeAttr('tabindex');
			domElement.parent().find('.disabledCover').remove();
		} else {
			domElement.find('a').attr('tabindex', '-1');
			
			jQuery('<div/>', {
				'class': 'disabledCover'
			}).appendTo(domElement.parent());

			domElement.parent().find('.disabledCover').css({
				'top': domElement.position().top-5,
				'left': domElement.position().left-5,
				'height': domElement.height()+10,
				'width': domElement.width()+10
			});
		}
	}
};


var Model = function(value) {
	var self = this;
	self.Value = ko.observable(value);
};

var RangeModel = function (initialValues) {
	var self = this;

	self.ValuesArray = ko.observableArray();

	self.Total = ko.computed(function () {
		return self.ValuesArray().length;
	}).extend({ rateLimit: 100 });

	self.SimpleArray = ko.computed(function() {
		var sliderValuesArray = [];
		self.ValuesArray().forEach(function (c) {
			sliderValuesArray.push(c().Value());
		});
		return sliderValuesArray;
	}).extend({ rateLimit: 100 });
	
	self.UpdateValues = function (values) {
		self.ValuesArray.removeAll();
		values.forEach(function (c) {
			var valueObservable = ko.observable(new Model(c));
			self.ValuesArray.push(valueObservable);
		});
	};

	self.UpdateCallback = function(callback) {
		self.ValuesArray().forEach(function (c) {
			c.subscribe(callback);
		});
	};

	self.UpdateValues(initialValues);
};

var VM = function () {
	//var _ranges = ko.observableArray([200, 1000, 5000]);

	var _ranges = ko.observable(new RangeModel([200, 1000, 5000]));
	var _isEnable = ko.observable(true);

	function toggle() {
		_isEnable(!_isEnable());
	};

	function add() {
		_ranges().ValuesArray.push(ko.observable(new Model(0)));
	};

	function remove(range) {
		_ranges().ValuesArray.remove(function(c) {
			return c().Value() == range.Value();
		});
	};

	return {
		Ranges: _ranges,
		IsEnable: _isEnable,
		Add: add,
		Remove: remove,
		Toggle: toggle
	};
};


$(document).ready(function () {
	ko.applyBindings(new VM(), document.getElementById("appPane"));
});

