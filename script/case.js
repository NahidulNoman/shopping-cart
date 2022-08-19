function getUpdateNumber(inCrease){
    const inputField = document.getElementById('case-input');
    const inputFieldString = inputField.value;
    const newInputField = parseInt(inputFieldString);
    
    let totalNumber;
    if(inCrease === true){
        totalNumber = newInputField + 1;
    }
    else{
        totalNumber = newInputField - 1;
    }
    inputField.value = totalNumber;

    return totalNumber;
}
function getUpdatePrice(totalNumber){
    let totalPriceNumber = totalNumber * 59;
    let caseElement = document.getElementById('case-price');
    caseElement.innerText = totalPriceNumber;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
    let totalNumber =  getUpdateNumber(true);
    getUpdatePrice(totalNumber);
    getSubTotalUpdate();

  
});
document.getElementById('btn-case-minus').addEventListener('click',function(){
    let totalNumber =  getUpdateNumber(false);
    getUpdatePrice(totalNumber);
    getSubTotalUpdate();
})