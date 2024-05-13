class Socket {
    constructor() {
        this.devices = [];
    }

    addDevice(device) {
        this.devices.push(device);
    }

    activate() {
        this.devices.forEach((device) => device.connect());
    }
}

class Tivi {
    connect() {
        console.log('Tivi connected');
    }
}

class Fridge {
    connect() {
        console.log('Fridge connected');
    }
}

class Fan {
    connect() {
        console.log('Fan connected');
    }
}

const socket = new Socket();
socket.addDevice(new Tivi());
socket.addDevice(new Fridge());
socket.addDevice(new Fan());
socket.activate();