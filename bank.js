

const balanceOutput = document.getElementById("balance-output");
const preBalance = parseFloat(balanceOutput.innerText);


document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    if (depositAmount > 0) {
        const depositOutput = document.getElementById("deposit-output");
        const preDeposit = parseFloat(depositOutput.innerText);

        const totalDeposit = depositAmount + preDeposit;
        depositOutput.innerText = totalDeposit;

        const totalBalance = preBalance + depositAmount;
        balanceOutput.innerText = totalBalance;

        depositInput.value = "";
    } else {
        alert('Plase Enter positive number');
        depositInput.value = '';
    }
    
})



document.getElementById("withdraw-btn").addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = parseFloat(withdrawInput.value);
    if (withdrawAmount > preBalance) {
        alert("Not Enough Balance");
        withdrawInput.value = '' ;
        return;
    }
    if (withdrawAmount > 0) {
        const withdrawOutput = document.getElementById("withdraw-output");
        const preWithdraw = parseFloat(withdrawOutput.innerText);
        const totalWithdraw = withdrawAmount + preWithdraw;
        withdrawOutput.innerText = totalWithdraw;
        balanceOutput.innerText = preBalance - totalWithdraw;
        withdrawInput.value = " ";

    } else {
            alert("Plase Enter positive number");
            withdrawInput.value = "";
    }
});