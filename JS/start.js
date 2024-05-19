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

if(inputValue1>25 && inputValue1<50)
        rezult += 8;
    else 
        rezult += 2;
if(isChecked0 == true)
        rezult += 8;
    
if(isChecked1 == true)
    rezult += 4;

if(inputValue5>3)
    rezult += 8;
else 
if(inputValue5>1)
    rezult += 4;
else
if(inputValue5>0)
    rezult += 2;

if(inputValue6>5)
    rezult += 6;
else 
if(inputValue6>3)
    rezult += 4;
else
if(inputValue6>0)
    rezult += 2;
if(isChecked2 != true)
    rezult += 6;
if(isChecked3 != true)
    rezult += 4;

var B_k = inputValue2 + inputValue2 * (inputValue4/100) * (inputValue3/12);

var K_z = (inputValue7 - B_k)/B_k;


if(K_z > 0.5)
    rezult += 30;
else 
if(K_z > 0.25)
    rezult += 25;
else
if(inputValue2>0)
    rezult += 15;



var S_m = (inputValue2 + inputValue2 * (inputValue4/100) * (inputValue3/12))/12;

var K_m = (inputValue8 - S_m)/S_m;


if(K_m > 0.3)
    rezult += 20;
else 
if(K_m > 0)
    rezult += 15;
else

    rezult += 5;


var D_su = inputValue8 + inputValue9; 

   // var S_m = (inputValue2 + inputValue2 * (inputValue4/100) * (inputValue3/12))/12;

var K_m = (D_su - S_m)/S_m;


if(K_m > 0.5)
    rezult += 20;
else 
if(K_m > 0.2)
    rezult += 15;
else

    rezult += 5;



//var numericValue = parseFloat(inputValue);
var outrez = rezult.toString();
//var out_rez_1 = "Відмовити";

 document.getElementById("out_rez").textContent = rezult;
if(rezult > 55)
    document.getElementById("out_rez1").textContent = "Дозволити";
if(rezult < 55 && rezult >= 40)
  
    document.getElementById("out_rez1").textContent = "Додаткове вивчення умов ";

    if( rezult < 40 )
  
        document.getElementById("out_rez1").textContent = "Відмовити";
    
//  document.getElementById("out_rez").append(isChecked1);
//  document.getElementById("out_rez").append(isChecked2);
//  document.getElementById("out_rez").append(isChecked3);

}