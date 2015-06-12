define(['knockout','viewModels/core/eventBus', 'viewModels/sales/reportSales', 'viewModels/sales/trackingSales'], function (ko,eventBus, reportSalesVm,trackingSalesVm) {

	eventBus.Subscribe(showModal, this, 'ShowModal');

	var _modalPopupViewModel = ko.observable(),
		_reportSalesViewModel = reportSalesVm,
		_trackingSalesViewModel = trackingSalesVm,
		_isModalOpen = ko.observable(false);

	function showModal(modalVm) {
		_modalPopupViewModel(modalVm);
		_isModalOpen(true);
	}

	return {
		ModalPopupViewModel: _modalPopupViewModel,
		ReportSalesViewModel: _reportSalesViewModel,
		TrackingSalesViewModel: _trackingSalesViewModel,
		IsModalOpen : _isModalOpen
	};
});