sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // import JSON model library
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("gcosui5calculator.controller.Main", {
            onInit: function () {
                var oCalcData = {
                    // we will pass all variables to the main xml
                    op1:'1',
                    op2:'2',
                    operator: '',
                    result: '',
                    // we will pass this variable to the items attirbute in select
                    aSelect: [
                        {key: '+'},
                        {key: '-'},
                        {key: '*'},
                        {key: '/'}
                    ]
                },
                oModel = new JSONModel(oCalcData);
                this.getView().setModel(oModel);
            },
            calculate: function() {
               var oModel = this.getView().getModel(),
            /*  operant1 = this.byId("operant1"),
                operant2 = this.byId("operant2"),
                operator = this.byId("operator"), */

                // we have string type, to convert it to integer use parseInt
            /*  sValue1 = parseInt(operant1.getValue(),10),
                sValue2 = parseInt(operant2.getValue(),10),
                sOperator = operator.getSelectedKey(), */

                sValue1 = parseInt(oModel.getProperty("/op1"),10),
                sValue2 = parseInt(oModel.getProperty("/op2"),10),
                sOperator = oModel.getProperty("/operator"),

                iResult = 0;

                switch(sOperator) {
                    case '+':
                        iResult = sValue1 + sValue2;
                        break;
                    case '-':
                        iResult = sValue1 - sValue2;
                        break;
                    case '*':
                        iResult = sValue1 * sValue2;
                        break;
                    case '/':
                        iResult = sValue1 / sValue2;
                        break;
                }
           // alert("The result:" + iResult); 
           oModel.setProperty("/result1", iResult);
            }
        });
    });
