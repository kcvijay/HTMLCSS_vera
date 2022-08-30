const pswInput = document.getElementById("psw");
const pswInputAgain = document.getElementById("psw-2");
const submit = document.getElementById("submit");

const pswTxt = document.getElementById("psw-txt");
const pswStrength = document.querySelector(".strengthMeter");

function showPsw() {
    if(pswInput.type === "password") {
        pswInput.type = "text"
    } else {
        pswInput.type = "password";
    }
}

pswStatus = () => {
    if(pswInput.value === pswInputAgain.value) {
        pswInputAgain.style.outline = "3px solid green";
    } else if(pswInput.value != pswInputAgain.value) {
        pswInputAgain.style.outline= "3px solid red";
    } else return;
}

pswLength = () => {
if(pswInput.value.length <= 5) {
    pswTxt.textContent = "Weak";
    pswStrength.style.width = "11%"
    pswStrength.style.background = "red";
} else if (pswInput.value.length > 5 && pswInput.value.length <= 8) {
    pswTxt.textContent = "Normal";
    pswStrength.style.width = "22%";
    pswStrength.style.background = "lightgreen";
} else if (pswInput.value.length > 8) {
    pswTxt.textContent = "Strong";
    pswStrength.style.width = "33%";
    pswStrength.style.background = "green";
}
}

    
