// Vấn đề: Nhân viên request tăng lươnng => Không đưa trực tiếp cho sếp mà thông qua thư kí (proxy) của sếp
class Boss {
    receiveRequest(offer) {
        console.log(`Boss received request: ${offer}`);
    }
}

// Proxy Secretary
class Secretary {
    constructor() {
        this.boss = new Boss();
    }

    receiveRequest(offer) {
        this.boss.receiveRequest(offer);
    }
}

class Employee {
    constructor(offer) {
        this.offer = offer;
    }
    request(target) {
        target.receiveRequest(this.offer);
    }
}

const emp = new Employee('Dat Doan up to 1200$ / month');
emp.request(new Secretary());
