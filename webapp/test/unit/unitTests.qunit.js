/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gcos_ui5_calculator/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
