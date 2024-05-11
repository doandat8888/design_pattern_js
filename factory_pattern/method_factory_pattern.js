// Giả sử công ty ăn nên làm ra, mở rộng hợp tác với nhiều đơn vị => Có nhiều transport service
class Car {
    constructor({ name = 'Ford Ranger 2023', doors = 2, price = '10 VNĐ', customerInfo = {}}) {
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

// Add truck service
class Truck {
    constructor({ name = 'Thaco Huyndai 2024', doors = 4, price = '30 VNĐ', customerInfo = {}}) {
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

// Add ship service
class Ship {
    constructor({ name = 'DBoat 2024', doors = 10, price = '200 VNĐ', customerInfo = {}}) {
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

class ServiceLogicstics {
    transportClass = Car;
    getTransport(customerInfo) {
        return new this.transportClass(customerInfo);
    }
}


// Áp dụng Factory Method pattern
// Cách 1:
// Order car for customers
const serviceLogicstics = new ServiceLogicstics();
console.log("Car service 1:::", serviceLogicstics.getTransport({ customerInfo: { name: 'Dat Doan', cargoVolume: '50kg' }}));

// Order truck for customers
serviceLogicstics.transportClass = Truck;
console.log("Truck service 1:::", serviceLogicstics.getTransport({ customerInfo: { name: 'Viet Doan', cargoVolume: '100kg' }}));

// Order ship for customers
serviceLogicstics.transportClass = Ship;
console.log("Ship service 1:::", serviceLogicstics.getTransport({ customerInfo: { name: 'Hoang Doan', cargoVolume: '1000kg' }}));

// Cách 2:
class TruckService extends ServiceLogicstics {
    transportClass = Truck;
}

class ShipService extends ServiceLogicstics {
    transportClass = Ship;
}

const truckService = new TruckService();
console.log("Truck service 2:::", truckService.getTransport({ customerInfo: { name: 'Viet Doan', cargoVolume: '100kg' }}));

const shipService = new ShipService();
console.log("Ship service 2:::", shipService.getTransport({ customerInfo: { name: 'Hoang Doan', cargoVolume: '1000kg' }}));

