

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmmount = getInputFieldById('deposit-field');
    const previousDepositAmmount = getTextElementValueById('deposit-total');
    
    const currentDepositTotal = newDepositAmmount + previousDepositAmmount;
    setTextElementValueById('deposit-total',currentDepositTotal);

    const previousBAlanceTotal = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBAlanceTotal + newDepositAmmount;
    setTextElementValueById('balance-total',currentBalanceTotal);


})