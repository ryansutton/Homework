//create Item class
class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//extend Item class with GameConsoles and VideoGames classes
class GameConsoles extends Item {
    constructor(id, name, price, consoleType) {
        super(id, name, price);
        this.consoleType = consoleType;
    }
}

class VideoGames extends Item {
    constructor(id, name, price, consoleType, videoGameCategory) {
        super(id, name, price);
        this.videoGameCategory = videoGameCategory;
    }
}

//create new objects using created classes
const ps5 = new GameConsoles(1, "Playstation 5", "$499.00", "PS5");
const nba2K23 = new VideoGames(2, "NBA 2K23", "$59.99", "PS5", "Sports");
const spiderman = new VideoGames(3, "Spiderman", "$59.99", "PS5", "Action/Adventure");

console.log(ps5);
console.log(nba2K23);
console.log(spiderman);