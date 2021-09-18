/* var price = document.getElementsByClassName('price').innerHTML;
var priceAsNumber = parseInt(price, 10);
var quantity = document.getElementsByClassName('quantity').innerHTML;
var quantityAsNumber = parseInt(quantity, 10);
var total = document.getElementsByClassName('product-price');
var plus = document.getElementsByClassName('plus');
var minus = document.getElementsByClassName('minus');
    
function calculateTotal (){
    var totalPrice = priceAsNumber * quantityAsNumber;
    document.getElementsByClassName('product-price').innerHTML = totalPrice;
};
plus.addEventListener("click",()=>{  
    quantityAsNumber++;
    quantity = quantityAsNumber;
    calculateTotal();       
    console.log(quantity);
});

minus.addEventListener("click",()=>{
    quantityAsNumber--;
    quantity = quantityAsNumber;
    calculateTotal();       
});

*/



var single = document.getElementById('single').innerHTML;
var singleNumber = parseInt(single , 10);

var double = document.getElementById('double').innerHTML;
var doubleNumber = parseInt(double , 10);

var triple = document.getElementById('triple').innerHTML;
var tripleNumber = parseInt(triple , 10);

/* function addSingle() {
    singleNumber++;
    document.getElementById('single').innerHTML = singleNumber;
}

*/




var addDouble = function() {
    this.innerHTML = doubleNumber++;
}

var addSingle = function() {
    this.innerHTML = singleNumber++;
}

var addTriple = function() {
    this.innerHTML = tripleNumber++;
}

    
