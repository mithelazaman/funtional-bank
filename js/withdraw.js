document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmmount = getInputFieldById('withdraw-field');
    const previousWithdrawAmmount = getTextElementValueById('withdraw-total');
    const currentWithdrawTotal = newWithdrawAmmount + previousWithdrawAmmount;
    setTextElementValueById('withdraw-total',currentWithdrawTotal);


    const previousBAlanceTotal = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBAlanceTotal-newWithdrawAmmount;
    setTextElementValueById('balance-total',currentBalanceTotal)
})