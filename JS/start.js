function test(){
var a=10;
var inputValue1 = parseFloat(document.getElementById("RESULT_TextField-1").value);
var inputValue2 = parseFloat(document.getElementById("RESULT_TextField-2").value);
var inputValue3 = parseFloat(document.getElementById("RESULT_TextField-3").value);
var inputValue5 = parseFloat(document.getElementById("RESULT_TextField-5").value);
var inputValue6 = parseFloat(document.getElementById("RESULT_TextField-6").value);
var inputValue7 = parseFloat(document.getElementById("RESULT_TextField-7").value);
var inputValue4 = parseFloat(document.getElementById("RESULT_TextField-4").value);
var inputValue8 = parseFloat(document.getElementById("RESULT_TextField-8").value);
var inputValue9 = parseFloat(document.getElementById("RESULT_TextField-9").value);

var checkbox0 = document.getElementById("RESULT_CheckBox-4_0");
var isChecked0 = checkbox0.checked;
var checkbox1 = document.getElementById("RESULT_CheckBox-4_1");
var isChecked1 = checkbox1.checked;

var checkbox2 = document.getElementById("RESULT_CheckBox-4_2");
var isChecked2 = checkbox2.checked;

var checkbox3 = document.getElementById("RESULT_CheckBox-4_3");
var isChecked3 = checkbox3.checked;



var rezult = 0;
//var numericValue = parseFloat(inputValue);
var outrez = rezult.toString();
 document.getElementById("out_rez").textContent = rezult;
//  document.getElementById("out_rez").textContent = isChecked0;
//  document.getElementById("out_rez").append(isChecked1);
//  document.getElementById("out_rez").append(isChecked2);
//  document.getElementById("out_rez").append(isChecked3);

}