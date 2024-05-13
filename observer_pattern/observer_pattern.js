//Observer co 2 thu: Observer va Subject ( người quan sát chủ thể và chủ thể)
class Observer {
    //Ví dụ chơi Liên Quân
    constructor(name) {
        this.namePick = name; //Pick tướng
    }

    updateStatus(location, pinger) {
        this.goToHelp(location, pinger);
    }

    goToHelp(location, pinger) {
        console.log(`${pinger}:::PING:::${JSON.stringify(location)} to ${this.namePick}`); // Thực hiện ping nhờ hỗ trợ
    }
}

class Subject {
    constructor() {
        this.observerList = [];
    }

    addObserver(observer) {
        this.observerList.push(observer);
    }

    notify(location, pinger) {
        this.observerList.forEach((observer) => observer.updateStatus(location, pinger)); //Thông báo cho các thành viên khác
    }
}

//Implement
const subject = new Subject();

// Pick tướng
const mganga = new Observer('Mganga');
const alice = new Observer('Alice');
const yorn = new Observer('Yorn');
const florentino = new Observer('Florentino');
const maloch = new Observer('Maloch');

// Add tướng vào team
subject.addObserver(mganga);
subject.addObserver(alice);
subject.addObserver(yorn);
subject.addObserver(florentino);
subject.addObserver(maloch);

// Push location to team
subject.notify({ long: 456, lat: 123});

console.log("Hello 123");