const gun = require("./gun")
const player = require("./player")

class game {
    constructor(){
        this.player1 = new player;
        this.player2 = new player;
        this.players = [this.player1, this.player2];
        this.currentPlayer = this.players[0];
        this.nextPlayer = this.player[1];
        this.gun = new gun()
    }

    start() {
        let chamber = this.gun.loadGun(1)
        this.gun.shuffle(chamber)
        const text = document.querySelector('text')
        text.innerText = `Gun is loaded, it is ${this.currentPlayer}'s turn.`
    }

    switchPlayers(){ //Switch player logic is to have an array of players which pushes out the first index and adds them to the back
        this.players.push(this.players.shift());
        this.currentPlayer = this.players[0];
    }

}

window.onload = () => {
    let game = new game()
        //Add a way for the rounds to be rotated between players 
        start();

       /* document.querySelector('.shootop').addEventListener('click', (event) => {
            event.preventDefault()
            let result = this.gun.pulltrigger()
            if(result === true){  
                this.nextPlayer.hp -= 1;
            }
                    
    })  */        

        document.querySelector('.shootme').addEventListener('click', (event) => {
            event.preventDefault();
            let result = this.gun.pulltrigger();
            if(result === true){
                this.players.shift()
                const text = document.querySelector('text')
                text.innerText = `${currentPlayer} has died`

            }else if(result === false){
                this.game.switchPlayers();
                const text = document.querySelector('text')
                text.innerText = `Was a blank, now its ${this.currentPlayer}'s turn.`

            }
            //Need to pull trigger for yourself and see if it is going to be valid with a true statement
    })
}


    //if(this.currentPlayer.hp = 0){players.shift}



// const rotation = () => {
//     for(let i = 1; i < 4; i++){

//     }
// }