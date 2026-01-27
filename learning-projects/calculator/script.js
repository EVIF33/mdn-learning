const calcMainDisplay = document.getElementById("calc-main-display");

const calcWrapper = document.querySelector(".calc-btn-wrapper");
calcWrapper.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    console.log(action);
    console.log(e);
    console.log(e.target.textContent);
    if(action === "digit") {
        console.log("yes");
        if (calcMainDisplay.textContent !== "0") {
            calcMainDisplay.textContent += e.target.textContent;
        } else {
            calcMainDisplay.textContent = e.target.textContent;
        }
    } else {

    }
});


