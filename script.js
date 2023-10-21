function showResult(){

    let userInput = document.getElementById("input-field")
    let result = document.querySelector(".result");
    let btn = document.getElementById("btn");

    let decimal = userInput.value;


    let binary = (decimal >>> 0).toString(2);
    result.innerHTML = binary;
};

