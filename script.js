function countItems(productId, priceID) {
    const nameElement = document.getElementById(productId);
    const name = nameElement.innerHTML;
    setName(name);
    // products price
    const price = productPrice(priceID);

    //total
    const totalElement = document.getElementById('total');
    const totalText = totalElement.innerText;
    const total = parseFloat(totalText);

    const totalProductsPrice = total + price;
    totalElement.innerText = totalProductsPrice;

    // total amount taka 

    const totalAmountElement = document.getElementById('total-amount').innerText = totalProductsPrice;

    //discount
    const discountBtn = document.getElementById('discount-btn');
    const PurchaseBtn = document.getElementById('Purchase-btn');
    if(totalProductsPrice > 0 ){
        PurchaseBtn.removeAttribute('disabled');
    }
    else if (totalProductsPrice > 200) {
        discountBtn.removeAttribute('disabled');
        discount(totalProductsPrice);
    }
};

//RELOAD
document.getElementById('Purchase-btn').addEventListener('click',function(){
    const totalElement = document.getElementById('total').innerText = 0;
    const discount  = document.getElementById('discount-money').innerText = 0;
    const totalAmountElement = document.getElementById('total-amount').innerText = 0;
    //
    const div = document.getElementById('product-count').innerHTML = '';
})
