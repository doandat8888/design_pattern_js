class Order {
    constructor(userId) {
        this.userId = userId;
        this.timeOrder = Date.now();
        this.products = [];
    }
}

class OrderManager {
    constructor() {
        this.order = null;
    }

    // create a new Order
    createOrder(userId) {
        this.order = new Order(userId);
        return this.order;
    }

    // add a product to the order
    addProductToOrder(product) {
        this.order.products.push(product);
    }

    // get order
    getOrder() {
        return this.order;
    }

    // check if the order is valid
    isValid() {
        return this.order.products.length > 0;
    }

    // send order to email
    sendEmail(email) {
        if(this.isValid()) {
            console.log(`Sending email to https://eccommerce/api/v1/order/sendOrder?email=${email} success`, this.order);
        }
        return 200;
    }
}

const orderManager = new OrderManager();

orderManager.createOrder('12e23rtffwwe');

orderManager.addProductToOrder({
    id: '3ert98223',
    name: 'Macbook Pro M1',
    price: 1000,
    quantity: 1,
    unit: 'USD'
});

orderManager.addProductToOrder({
    id: '3ert98224',
    name: 'Macbook Pro M2',
    price: 1000,
    quantity: 1,
    unit: 'USD'
});

console.log('Order info::::', orderManager.getOrder());
orderManager.sendEmail('abc@gmail.com');