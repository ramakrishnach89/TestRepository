define(['knockout', 'jqueryui'], function (ko) {
	ko.bindingHandlers.button = {
		init: function (element) {
			$(element).button(); // Turns the element into a jQuery UI button
		},
		update: function (element, valueAccessor) {
			var currentValue = valueAccessor();
			// Here we just update the "disabled" state, but you could update other properties too
			$(element).button("option", "disabled", currentValue.enable === false);
		}
	};

	ko.bindingHandlers.modalPupup = {
		init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
			var modalPopup = $(element);
			modalPopup.dialog({
				modal: true,
				title: viewModel.title(),
			});

		},
		update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
			$(element).menu({ position: { my: "left bottom", at: "right-50 top+0" } });
			menu.removeClass("ui-menu");
			menu.addClass("ui-menuHorizontal");
			//$('.ui-menu-icon.ui-icon.ui-icon-carat-1-e').remove();
		}
	};

	ko.bindingHandlers.modalPupup = {
		init: function (element, valueAccessor, allBindingsAccessor) {
			//handle disposal (not strictly necessary in this scenario)
			ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
				$(element).dialog("destroy");
			});
		},
		update: function (element, valueAccessor, allBindingsAccessor) {


			var shouldBeOpen = ko.utils.unwrapObservable(allBindingsAccessor().dialogVisible),
				domElement = $(element),
				dialog = domElement.data("uiDialog") || domElement.data("dialog");

			var modalViewModel = ko.utils.unwrapObservable(valueAccessor());

			if (typeof modalViewModel == 'undefined') return;

			var options = {
				title: modalViewModel.Title,
				modal: true,
				buttons: {
					Ok: function () {
						if (typeof modalViewModel.AceptCallback == 'function') {
							modalViewModel.AceptCallback();
						}
						allBindingsAccessor().dialogVisible(false);
					},
					Cancel: function () {
						if (typeof modalViewModel.CancelCallback == 'function') {
							modalViewModel.CancelCallback();
						}
						allBindingsAccessor().dialogVisible(false);
					}
				}
			};
			options.close = function () {
				allBindingsAccessor().dialogVisible(false);
			};

			$(element).dialog(ko.toJS(options));


			domElement.dialog(shouldBeOpen ? "open" : "close");
		}
	};

});