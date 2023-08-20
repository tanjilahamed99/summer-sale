function countItems(productId, priceID) {
    const nameElement = document.getElementById(productId);
    const name = nameElement.innerHTML
    setName(name);
    // products price
    const price = productPrice(priceID);

    //total
    const totalElement = document.getElementById('total');
    const totalText = totalElement.innerText;
    const total = parseFloat(totalText);

    const totalProductsPrice = total + price;
    totalElement.innerText = totalProductsPrice;

    //discount
    const discountBtn = document.getElementById('discount-btn');
    const PurchaseBtn = document.getElementById('Purchase-btn');
    if (totalProductsPrice > 200) {
        discountBtn.removeAttribute('disabled');
        PurchaseBtn.removeAttribute('disabled');
        discount(totalProductsPrice);
    }
};
