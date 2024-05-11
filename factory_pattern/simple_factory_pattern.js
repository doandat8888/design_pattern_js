// Without factory pattern
const serverLogicstics = (cargoVolume) => {
    switch (cargoVolume) {
        case 10:
            return {
                name: 'Truck 10',
                doors: 6,
                price: 1000000
            }
        case 20:
            return {
                name: 'Truck 20',
                doors: 8,
                price: 2000000
            }
    }
}

console.log("Without simple factory: ", serverLogicstics(20));

// With factory pattern
class ServiceLogicStics {

    constructor(name = 'Truck 10', doors = 6, price = 1000000) {
        this.name = name;
        this.doors = doors;
        this.price = price;
    }

    static getTransport(cargoVolume) {
        switch (cargoVolume) {
            case 10:
                return new ServiceLogicStics();
            case 20:
                return new ServiceLogicStics('Truck 20', 8, 2000000);
        }
    }
}

console.log("With simple factory: ", ServiceLogicStics.getTransport(10));
// Khi khởi tạo 1 class => Có tính prototype => Giá trị sử dụng bộ nhớ thấp