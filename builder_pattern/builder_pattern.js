class FifaOnlinePlayer {
    constructor(builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.position = builder.position;
        this.age = builder.age;
        this.nationality = builder.nationality;
        this.club = builder.club;
    }

    toString() {
        let player = 'Player\n'
        player += 'Id: '+ this.id + '\n';
        player += 'Name: '+ this.name + '\n';
        player += 'Position: '+ this.position + '\n';
        player += 'Age: '+ this.age + '\n';
        player += 'Nationality: '+ this.nationality + '\n';
        player += 'Club: '+ this.club + '\n';
        return player;
    }
}

class FifaOnlinePlayerBuilder {
    constructor() {
        this.id = '';
        this.name = '';
        this.position = '';
        this.age = '';
        this.nationality = '';
        this.club = '';
    }

    withId(id) {
        this.id = id;
        return this;
    }

    withName(name) {
        this.name = name;
        return this;
    }

    withPosition(position) {
        this.position = position;
        return this;
    }

    withAge(age) {
        this.age = age;
        return this;
    }

    withNationality(nationality) {
        this.nationality = nationality;
        return this;
    }

    withClub(club) {
        this.club = club;
        return this;
    }

    build() {
        return new FifaOnlinePlayer(this);
    }
}

const builderPattern = new FifaOnlinePlayerBuilder();

const ronaldoBuilder = builderPattern
                        .withId(1)  
                        .withName('Ronaldo')
                        .withPosition('Forward')
                        .withAge(30)
                        .withNationality('Portuguese')
                        .withClub('Real Marid')
                        .build();

const messiBuilder = builderPattern
                        .withId(2)
                        .withName('Messi')
                        .withPosition('Forward')
                        .withAge(35)
                        .withNationality('England')
                        .withClub('FC Barcelona')
                        .build();

console.log("Ronaldo info:", ronaldoBuilder.toString());
console.log("Messi info:", messiBuilder.toString());