

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()

 const pinNumber = document.getElementById('pin-number').value

 if(pinNumber === '1234'){
    const addAmount = document.getElementById('amount-add').value

    const mainAmount = document.getElementById('main-amount').innerText

    const updateAmount =parseFloat(addAmount) +parseFloat(mainAmount) 

    console.log(updateAmount)

    document.getElementById('main-amount').innerText = updateAmount
 }

 else{
    alert("Wrong PIN")
 }
    
})