function calculatorCreator() {

    var mainContainer = document.getElementById("container");

    var calculator = document.createElement("div");
    calculator.className = "calculator";
    mainContainer.appendChild(calculator);

    
    var calculator_display = document.createElement("div");
    calculator_display.className = "calculator__display";
    calculator_display.innerHTML="0";
    calculator.appendChild(calculator_display);

    var calculator_keys = document.createElement("div");
    calculator_keys.className = "calculator__keys";
    calculator.appendChild(calculator_keys);

    //end of containers;


    var operator_plus = document.createElement("button");
    operator_plus.innerHTML = "+";
    operator_plus.className = "key--operator";
    calculator_keys.appendChild(operator_plus);

    var operator_minus = document.createElement("button");
    operator_minus.innerHTML = "-";
    operator_minus.className = "key--operator";
    calculator_keys.appendChild(operator_minus);

    var operator_multiply = document.createElement("button");
    operator_multiply.innerHTML = "&times;";
    operator_multiply.className = "key--operator";
    calculator_keys.appendChild(operator_multiply);

    var operator_divide = document.createElement("button");
    operator_divide.innerHTML = "/";
    operator_divide.className = "key--operator";
    calculator_keys.appendChild(operator_divide);

    //end of operators;


    var button_7 = document.createElement("button");
    button_7.innerHTML = "7";
    calculator_keys.appendChild(button_7);

    var button_8 = document.createElement("button");
    button_8.innerHTML = "8";
    calculator_keys.appendChild(button_8);

    var button_9 = document.createElement("button");
    button_9.innerHTML = "9";
    calculator_keys.appendChild(button_9);

    var button_4 = document.createElement("button");
    button_4.innerHTML = "4";
    calculator_keys.appendChild(button_4);

    var button_5 = document.createElement("button");
    button_5.innerHTML = "5";
    calculator_keys.appendChild(button_5);

    var button_6 = document.createElement("button");
    button_6.innerHTML = "6";
    calculator_keys.appendChild(button_6);

    var button_1 = document.createElement("button");
    button_1.innerHTML = "1";
    calculator_keys.appendChild(button_1);

    var button_2 = document.createElement("button");
    button_2.innerHTML = "2";
    calculator_keys.appendChild(button_2);

    var button_3 = document.createElement("button");
    button_3.innerHTML = "3";
    calculator_keys.appendChild(button_3);

    var button_0 = document.createElement("button");
    button_0.innerHTML = "0";
    calculator_keys.appendChild(button_0);

    //end of numbers;


    var decimal = document.createElement("button");
    decimal.innerHTML = ".";
    calculator_keys.appendChild(decimal);

    var allClear = document.createElement("button");
    allClear.innerHTML = "AC";
    calculator_keys.appendChild(allClear);

    var operator_asign = document.createElement("button");
    operator_asign.className = "key--equal";
    operator_asign.innerHTML = "=";
    calculator_keys.appendChild(operator_asign);


    //end of other keys;

}

calculatorCreator();