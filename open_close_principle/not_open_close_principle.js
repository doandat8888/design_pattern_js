class Socket {
    constructor(tivi, fridge) {
        this.tivi = tivi;
        this.fridge = fridge;
    }

    activate() {
        this.tivi.connect();
        this.fridge.connect();
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

const socket = new Socket(new Tivi(), new Fridge());
socket.activate();