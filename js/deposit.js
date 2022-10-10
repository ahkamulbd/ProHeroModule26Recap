// Step 1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('Deposit Button Clicked');
    // Step 2: Get Value from Deposit field

    const depositField = document.getElementById('user-deposit');
    const depositAmount = depositField.value;
    //console.log(depositAmount);

    // Step 3: Get the current deposit total

    const depositTotalAmount = document.getElementById('deposit-total');
    const depositTotal = depositTotalAmount.innerText;
    depositTotalAmount.innerText = depositAmount;
})

