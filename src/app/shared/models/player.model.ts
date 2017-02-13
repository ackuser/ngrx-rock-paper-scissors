export class Player {

    constructor(public name, public weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeName(name) {
        this.name = name;
    }
}