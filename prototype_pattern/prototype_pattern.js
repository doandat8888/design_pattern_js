class FifaOnlinePlayer {
    constructor(name, team, position, goals) {
        this.name = name;
        this.team = team;
        this.position = position;
        this.goals = goals;
    }

    score() {
        this.goals++;
    }

    clone() {
        return new FifaOnlinePlayer(this.name, this.team, this.position, this.goals);
    }
}

const prototypePattern = new FifaOnlinePlayer('Ronaldo', 'Real Marid', 'FW', 0);

const ronaldo = prototypePattern.clone();

const messi = prototypePattern.clone();
messi.name = 'Messi';
messi.team = 'Barca';
messi.goals = 1;


console.log("Ronaldo clone from pattern: ", ronaldo);
console.log("Messi clone from pattern: ", messi);