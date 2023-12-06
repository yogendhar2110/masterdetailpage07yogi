/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mdd_07/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
