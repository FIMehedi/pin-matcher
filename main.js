document.getElementById('generate-btn').addEventListener('click', function () {
    const generatedPin = document.getElementById('generated-pin');
    const generateNewPin = Math.floor(1000 + Math.random() * 9000);
    generatedPin.value = generateNewPin;
})


const allDigitBtn = document.getElementsByClassName('button');
for (let i = 0; i < allDigitBtn.length; i++) {
    const digitBtn = allDigitBtn[i];
    digitBtn.addEventListener('click', function () {
        const inputNum = digitBtn.dataset['num'];
        getPinInput(inputNum);

    });
}


function getPinInput(inputNum) {
    const pinInput = document.getElementById('pin-input');

    if (inputNum == 'clear') {
        pinInput.value = '';
    }
    else if (inputNum == 'backspace') {
        pinInput.value = pinInput.value.slice(0, pinInput.value.length - 1);
    }
    else {
        pinInput.value = pinInput.value + inputNum;
    }
}

document.getElementById('check-btn').addEventListener('click', function () {
    const pinInput = document.getElementById('pin-input').value;
    const generatedPin = document.getElementById('generated-pin').value;
    const tryLeft = parseInt(document.getElementById('try-left').innerText);

    if (generatedPin == '') {
        alert('Please Generate your pin!')
    }
    else if (pinInput == generatedPin && tryLeft > 0) {
        verifyMsg('success', 'error');
    }
    else if (tryLeft > 0) {
        verifyMsg('error', 'success')
        document.getElementById('try-left').innerText = tryLeft - 1;
    }
    else {
        alert('Your Tried many times!');
    }
});

function verifyMsg(show, hide) {
    document.getElementById(show + '-notify').style.display = 'block';
    document.getElementById(hide + '-notify').style.display = 'none';
}