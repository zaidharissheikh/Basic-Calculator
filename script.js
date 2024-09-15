const display = document.getElementById("display");
function appendToDisplay(value) {
    console.log('value', value);
    
    display.value += value;
}

function calculate() {
    try{
        display.value = eval(display.value);
        console.log('display.value', display.value);
        
    }
    catch(err) {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}