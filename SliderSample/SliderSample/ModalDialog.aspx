<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ModalDialog.aspx.cs" Inherits="SliderSample.ModalDialog" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div id="MainContent">
		<h2>View 1</h2>
		<div id="view1">
			
		</div>
		
		<h2>View 2</h2>
		<div id="Div2">
			
		</div>
    </div>
	<div id="ModalHolder">
		<div data-bind="html:ModalContent"></div>
		<div>
			<button> </button>
		</div>
	</div>
    </form>
</body>
</html>
