// Tính toán tổng tiền Shopee
class Discount {
    calc(value) {
        return value * 0.9;
    }
}

class Shipping {
    calc() {
        return 5000;
    }
}

class Fees {
    calc(value) {
        return value * 1.05;  // 5% VAT
    }
}

class ShopeeFacadePattern {
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }
    
    calc(price) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

// Hàm này chạy khi người dùng click vào nút Buy, còn việc tính toán sẽ do hệ thống tính
function buy(price) {
    const shopeeFacadePattern = new ShopeeFacadePattern();
    return shopeeFacadePattern.calc(price);
}

console.log(buy(120000));

