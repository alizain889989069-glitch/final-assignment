const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}


function appendValue(value) {
    if (display.value === "Error")  {
        display.value = "";
    }

    display.value += value;
}
function calculate() {

    if (display.value === "" || display.value === "Error") {
        return;
    }

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}