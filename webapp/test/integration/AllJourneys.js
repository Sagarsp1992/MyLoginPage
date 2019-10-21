/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list
// * All 3 ProductSet have at least one ToSupplier

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
		"ssp/Project_GIT/test/integration/MasterJourney",
		"ssp/Project_GIT/test/integration/NavigationJourney",
		"ssp/Project_GIT/test/integration/NotFoundJourney",
		"ssp/Project_GIT/test/integration/BusyJourney",
		"ssp/Project_GIT/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});