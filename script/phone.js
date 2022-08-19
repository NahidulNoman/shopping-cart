function getUpdatePhoneNumber(inCarse){
    let getPhoneInput = document.getElementById('phone-field');
    let getInputPhoneString = getPhoneInput.value;
    let newInput = parseInt(getInputPhoneString);

    let totalPhoneInput;
    if(inCarse == true){
        totalPhoneInput = newInput + 1;
    }
    else{
        totalPhoneInput = newInput - 1;
    }
    getPhoneInput.value = totalPhoneInput;
    return totalPhoneInput;
}
function getUpdatePhonePrice(totalNumber){
    let totalPriceNumber = totalNumber * 1219;
    let caseElement = document.getElementById('phone-price');
    caseElement.innerText = totalPriceNumber;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
   let totalPriceInput =  getUpdatePhoneNumber(true);
   getUpdatePhonePrice(totalPriceInput);
   getSubTotalUpdate();

})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    let totalPriceInput = getUpdatePhoneNumber(false);
    getUpdatePhonePrice(totalPriceInput);
    getSubTotalUpdate();
})