sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "logaligroup/invoices/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.MessageToast} MessageToast
     * @param {typeof logaligroup.invoices.model.models,} models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, models, ResourceModel) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.Main", {
            onInit: function () {
                
            },

            onShowHello: function () {

                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                //var sMsg = this.getView().getModel("i18n").getText("helloMsg", [sRecipient]);
                MessageToast.show("sMsg");
            }
        });
    });
