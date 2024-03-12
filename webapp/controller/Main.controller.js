sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gcosui5calculator.controller.Main", {
            onInit: function () {

            },
            calculate: function() {
               var operant1 = this.byId("operant1"),
                operant2 = this.byId("operant2"),
                operator = this.byId("operator"),

                // we have string type, to convert it to integer use parseInt
                sValue1 = parseInt(operant1.getValue(),10),
                sValue2 = parseInt(operant2.getValue(),10),
                sOperator = operator.getSelectedKey(),
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
                alert("The result:" + iResult);
            }
        });
    });
