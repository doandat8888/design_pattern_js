class RoundRobin {
    constructor() {
        if(RoundRobin.instance) {
            return RoundRobin.instance;
        }
        RoundRobin.instance = this;
        this.servers = [];
        this.index = 0;
    }

    addServer(server) {
        this.servers.push(server);
    }

    getNextServer() {
        if(!this.servers.length) {
            throw new Error("No servers available");
        }
        console.log("This index: ", this.index);
        const server = this.servers[this.index];
        // Modulos algorithm
        this.index = (this.index + 1) % this.servers.length;
        return server;
    }
}

const loadBalancer = new RoundRobin();
const loadBalancer1 = new RoundRobin();

console.log(loadBalancer === loadBalancer1);

loadBalancer.addServer("server 1");
loadBalancer.addServer("server 2");
loadBalancer.addServer("server 3");

console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());