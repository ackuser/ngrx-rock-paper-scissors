export class Result {
    public winner: string;

    constructor(public player1: string, public player1_weapon: string, public player2: string, public player2_weapon: string) {
        this.player1 = player1;
        this.player1_weapon = player1_weapon;
        this.player2 = player2;
        this.player2_weapon = player2_weapon;
        this.winner = this.determineResult();
    }

    determineResult() {

        switch (this.player1_weapon) {
            case 'rock':
                if (this.player2_weapon === 'scissors') {
                    return this.player1;
                } else if (this.player2_weapon === 'paper') {
                    return this.player2;
                } else {
                    return 'draw';
                }

            case 'paper':
                if (this.player2_weapon === 'rock') {
                    return this.player1;
                } else if (this.player2_weapon === 'scissors') {
                    return this.player2;
                } else {
                    return 'draw';
                }

            case 'scissors':
                if (this.player2_weapon === 'paper') {
                    return this.player1;
                } else if (this.player2_weapon === 'rock') {
                    return this.player2;
                } else {
                    return 'draw';
                }

            default:
                return 'draw';
        }

    }
}
