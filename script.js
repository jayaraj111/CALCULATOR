let outputScreen=document.getElementById("output-screen");
var nonNumberDisplayed = false;

function display(num) {
    if (typeof num === 'number' && !isNaN(num)) {
        outputScreen.value += num;
        nonNumberDisplayed = false;
    } else {
        if (!nonNumberDisplayed) {
            outputScreen.value += num;
            nonNumberDisplayed = true;
        }
    }
}

function allClear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
