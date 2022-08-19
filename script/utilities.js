function getSubUpdate(elementId){
    let subTotal = document.getElementById(elementId);
    let subTotalString = subTotal.innerText;
    let newSubTotal = parseInt(subTotalString);
    return newSubTotal;
}
function subUpdate(elementId, value){
    let subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function getSubTotalUpdate(){
    let phoneTotal = getSubUpdate('phone-price');
    let caseTotal = getSubUpdate('case-price');
    let totalSubPrice = phoneTotal + caseTotal;
    subUpdate('sub-total',totalSubPrice);
 
    let taxAmountString = (totalSubPrice * 0.1).toFixed(2);
    let taxAmount = parseFloat(taxAmountString);
    subUpdate('tax-total',taxAmount);

    let totalAmount = totalSubPrice + taxAmount;
    subUpdate('total',totalAmount);
}