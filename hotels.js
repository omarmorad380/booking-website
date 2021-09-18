var price = document.getElementById('price').innerHTML;
var priceAsNumber = parseInt(price, 10);
var quantity = document.getElementById('quantity').innerHTML;
var quantityAsNumber = parseInt(quantity, 10);
var total = document.getElementById('product-price');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
    
function calculateTotal (){
    var totalPrice = priceAsNumber * quantityAsNumber;
    document.getElementById('product-price').innerHTML = totalPrice;
}

plus.addEventListener("click",()=>{  
    quantityAsNumber++;
    document.getElementById('quantity').innerHTML = quantityAsNumber;
    calculateTotal();       
})

minus.addEventListener("click",()=>{
    quantityAsNumber--;
    document.getElementById('quantity').innerHTML = quantityAsNumber;
    calculateTotal();       
})

for (var i = 0; i < 98; i++) {
    beCheerful();
}
