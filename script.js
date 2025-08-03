//your JS code here. If required.
function printFunctionName(func) {
    alert(func.name);
}

function testFunction() {
    printFunctionName(testFunction);
}

testFunction();