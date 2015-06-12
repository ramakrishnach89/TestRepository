<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ModalSample._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title></title>
	
	<link href="Content/themes/base/jquery.ui.all.css" rel="stylesheet" />
    <script type="text/javascript" data-main='App/init' src="Scripts/require.js"></script>
</head>
<body>
	<div id="MainContent">
		
		<div id="view1" data-bind="with: ReportSalesViewModel">
			<h2><span data-bind="text: Title"></span></h2>
			<button data-bind="click:FireReportDialog">Show Report</button>
		</div>
		
		<div id="view2" data-bind="with: TrackingSalesViewModel">
			<h2><span data-bind="text: Title"></span></h2>
			<button data-bind="click: FireTrackingDialog">Show Tracking</button>
		</div>

	</div>
	
	<div data-bind="modalPupup: ModalPopupViewModel, dialogVisible: IsModalOpen">
		<!-- ko with:ModalPopupViewModel -->
		<div data-bind="html: Content"></div>
		<!-- /ko -->
	</div>
	
</body>
</html>
