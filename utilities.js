function setName(name) {
    const productCount = document.getElementById('product-count');
    const p = document.createElement('p');
    const count = productCount.childElementCount
    p.innerHTML = `${count + 1}. ${name}`;
    p.style.fontSize = '24px'
    p.style.fontWeight = '500'
    productCount.appendChild(p);
};

function productPrice(priceID) {
    const priceElement = document.getElementById(priceID);
    const priceString = priceElement.innerText;
    const price = parseFloat(priceString);
    return price;
};

//Inner text to  number

/* function innerTextToNumber(Id,totalProductsPrice){
    const totalElement = document.getElementById(Id);
    const totalText = totalElement.innerText;
    const total = parseFloat(totalText);
    totalElement.innerText = totalProductsPrice;
    return total;
} */


function discount(totalPrice) {
    document.getElementById('discount-btn').addEventListener('click',function(){
        const discountInputElement  = document.getElementById('discount-input');
        const discountInput = discountInputElement.value;
        discountInputElement.value = '';
        const promoCodeElement = document.getElementById('promo-code');
        const promoCode = promoCodeElement.innerText;
        if(discountInput === promoCode ){
            const discount  = document.getElementById('discount-money');
            const totalAmountElement  = document.getElementById('total-amount');
            const totalWithDiscount = totalPrice - (totalPrice * 0.20);
               const  totalAmount = totalPrice * 0.20;
               discount.innerText = totalAmount.toFixed(2);
            totalAmountElement.innerText = totalWithDiscount;
        }else{
           alert('your coupon code is invalid')
        }
    });
};