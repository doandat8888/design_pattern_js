/**
    * Giảm giá khi người dùng đặt trước 1 sản phẩm của Nike
    * @param {*} originalPrice
    * @returns
*/

function preOrderPrice(originalPrice) {
    return originalPrice * 0.8; // Giảm 20%
}

/**
    * Khuyễn mãi thông thường
    * @param {*} originalPrice
    * @returns
*/

function promotionPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
    * Black Friday
    * @param {*} originalPrice
    * @returns
*/

function blackFridayPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
}

/**
    * Default
    * @param {*} originalPrice
    * @returns
*/

function defaultPrice(originalPrice) {
    return originalPrice;
}

const getPriceStrategies = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    blackFriday: blackFridayPrice,
    default: defaultPrice
}

function getPrice(originalPrice, typePromotion) {
    return getPriceStrategies[typePromotion](originalPrice);
}

console.log('------>PRICE:::', getPrice(300, 'preOrder'));

