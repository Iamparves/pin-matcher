function getPin() {
    return Math.ceil(Math.random() * 9000) + 999;
}

document.getElementById('generatePin').addEventListener('click', function () {
    document.getElementById('pin').value = getPin();
});

document.getElementById('digitContainer').addEventListener('click', function (e) {
    const digit = e.target.innerText;
    const typedInput = document.getElementById('typedPin');

    if (isNaN(digit)) {
        switch (digit) {
            case 'C':
                typedInput.value = '';
                break;
            case '<':
                typedInput.value = Math.floor(typedInput.value / 10);
                break;
            case 'Submit':
                matchPin();
        }
    } else {
        if (typedInput.value.length < 4) {
            typedInput.value += digit;
        }
    }
});

function matchPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typedPin').value;

    if (pin && typedPin.length == 4) {
        if (pin === typedPin) {
            pinMatchResult('incorrectPin', 'correctPin');
        } else {
            pinMatchResult('correctPin', 'incorrectPin');
        }
    } else {
        alert('Please type 4 digit number and generate pin before submitting.')
    }
}

function pinMatchResult(hide, show) {
    document.getElementById(hide).style.display = 'none';
    document.getElementById(show).style.display = 'block';
}