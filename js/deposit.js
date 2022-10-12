// Step 1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('Deposit Button Clicked');
    // Step 2: Get Value from Deposit field

    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //console.log(depositAmount);

    // Step 3: Get the current deposit total

    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalAmount.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;


    // Step 7: Clear the deposit field
    depositField.value = '';
})

