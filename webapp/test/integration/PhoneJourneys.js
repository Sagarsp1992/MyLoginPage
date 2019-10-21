/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ssp/Project_GIT/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ssp/Project_GIT/test/integration/pages/App",
	"ssp/Project_GIT/test/integration/pages/Browser",
	"ssp/Project_GIT/test/integration/pages/Master",
	"ssp/Project_GIT/test/integration/pages/Detail",
	"ssp/Project_GIT/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ssp.Project_GIT.view."
	});

	sap.ui.require([
		"ssp/Project_GIT/test/integration/NavigationJourneyPhone",
		"ssp/Project_GIT/test/integration/NotFoundJourneyPhone",
		"ssp/Project_GIT/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});