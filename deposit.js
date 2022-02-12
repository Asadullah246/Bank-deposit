
let depositButton=document.getElementById('depositButton');
let depositInput=document.getElementById('inputDepositText');
let depositAmount=document.querySelector('.depositAmount');
const errorMessage=document.getElementById('alertDeposit');
let balance=document.querySelector('.balanceAmount');

depositButton.addEventListener('click', function(){
   
    let deposit= depositInput.value;
    let amount= depositAmount.innerText;
    let balanceAmount= balance.innerText;
    
   
    if( deposit>=0){
        depositAmount.innerText= parseFloat(amount)+parseFloat(deposit);
        balance.innerText= parseFloat(amount)+parseFloat(deposit)+parseFloat(balanceAmount);
        console.log(depositAmount);
        errorMessage.innerText="Deposit success";
        errorMessage.style.color="green";
        depositInput.value="";
    }
    else{
        errorMessage.innerText="Deposit failed due to unacceptable amount";
        errorMessage.style.color="red";
        depositInput.value="";
    }});

    // withdraw section 

    
