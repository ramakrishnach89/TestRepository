<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DisableAll.aspx.cs" Inherits="SliderSample._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title></title>

	<script src="Scripts/jquery-1.10.2.js"></script>
	<script src="Scripts/jquery-ui-1.10.4.custom.js"></script>
	<script src="Scripts/knockout.js"></script>
	<script src="Scripts/JSDisable.js"></script>
	<link href="css/jquery-ui-1.10.4.custom.css" rel="stylesheet" />
	<link href="css/myCss.css" rel="stylesheet" />
</head>
<body>
	<div id="appPane">
		<div data-bind="EnableAll: IsEnable">
			<input type="checkbox" />
			<input type="text" />
			<input type="radio" />
			<select>
				<option value="1">one</option>
				<option value="2">two</option>
				<option value="3">three</option>
			</select>
			<br />
			<a href="#">Test</a>
		</div>
		<div>
			<button data-bind="click: Toggle">Toggle</button>
		</div>
	</div>

</body>
</html>
