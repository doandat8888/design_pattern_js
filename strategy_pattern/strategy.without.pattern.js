function getPrice(originalPrice, typePromotion = 'default') {
    // Giảm giá khi người dùng đặt trước sản phẩm của Nike
    if(typePromotion === 'preOrder') {
        return originalPrice * 0.8; // Giảm 20%
    } 

    // Khuyễn mãi thông thường
    if(typePromotion === 'promotion') {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
    }

    // Black Friday
    if(typePromotion === "blackFriday") {
        return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
    }

    // ...Còn nhiều dịp khác (5/5, 11/11,...), mỗi dịp khuyễn mãi đều phải viết if

    // Không có khuyễn mãi
    if(typePromotion === 'default') {
        return originalPrice;
    }   

    // => Phá vỡ nguyên tắc đơn trách nhiệm (Single Responsibility) trong SOLID, chưa kể nếu 1 chỗ lỗi thì BANH luôn nguyên cái hàm lớn
}
console.log('------>PRICE:::', getPrice(300, 'preOrder'));