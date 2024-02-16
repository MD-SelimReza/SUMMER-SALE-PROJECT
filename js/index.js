let productCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', function () {
        const title = card.querySelector('.title').innerText;

        const textContainer = document.getElementById('text-container');
        const p = document.createElement('p');
        p.innerText = productCount + '. ' + title;

        textContainer.appendChild(p);
        productCount++;

        const price = parseFloat(card.querySelector('.price').innerText.split(' ')[0]);
        // const priceValue = parseFloat(price);

        totalPrice += price;

        setInnerText('total-price', totalPrice.toFixed(2));

        const homeBtn = document.getElementById('home-btn');
        homeBtn.addEventListener('click', function () {
            card.removeEventListener();
        })
    })
}


const applyBtn = document.getElementById('btn-apply');
applyBtn.addEventListener('click', function () {
    const couponElement = document.getElementById('input-value').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();

    if (totalPrice >= 200) {
        if (couponCode === 'SELL200') {
            const discount = (totalPrice * 0.2).toFixed(2);
            setInnerText('discount', discount);

            const restTotal = (totalPrice - discount).toFixed(2);
            setInnerText('total', restTotal);

            document.getElementById('input-value').value = '';
        } else {
            alert`Invalid Coupon`;

            document.getElementById('input-value').value = '';
        }
    } else {
        alert`At least 200 Tk spent to get discount.`;

        document.getElementById('input-value').value = '';
    }

})

function setInnerText(displayId, value) {
    document.getElementById(displayId).innerText = value;
}

