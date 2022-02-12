

function deposit(inputMoney, depositMoney ){
    const input=document.getElementById(inputMoney).value;
let depositedAmount=document.getElementById(depositMoney);
let depositText=depositedAmount.innerText;
depositedAmount.innerText=parseFloat(depositText)+parseFloat(input);
return depositedAmount;
}

function totalBalance(inputMoney, courrentBalance, isAdd){
    const input=document.getElementById(inputMoney).value;
    let previousBalance=document.getElementById(courrentBalance);
    let totalBalanceText=previousBalance.innerText;
   if(isAdd==true){
    previousBalance.innerText=parseFloat(totalBalanceText)+parseFloat(input);
    
   }
   else{
    previousBalance.innerText=parseFloat(totalBalanceText)-parseFloat(input);
    return totalBalance;
   }
}

// deposit section 

document.getElementById("depositButton").addEventListener('click', function(){
    deposit("inputDepositText", "depositAmount" )
    totalBalance("inputDepositText", "balanceAmount", true);

});

// withdraw section 

document.getElementById("withdrawButton").addEventListener('click', function(){
    deposit("inputWithdrawText", "withdrawAmount" );
    totalBalance("inputWithdrawText", "balanceAmount" , false);
});
