const gun = require("./gun")

window.onload{
    while(player1.hp > 0 || player2.hp > 0 ){

        //Add a way for the rounds to be rotated between players 

        //need to add logic to wrap around the buttons where that gun can be shot and after increment to the next round
        document.querySelector('.shootop').addEventListener('click', (event) => {
            event.preventDefault()
            let result = this.gun.pulltrigger()
            if(result === true){  //If trigger is pulled on opponent check if the shifted index is true
                player2.hp -= 1;
            }
            i++;
    })




        document.querySelector('.shootme').addEventListener('click', (event) => {
            event.preventDefault()
            let result = this.gun.pulltrigger()
            if(result === true){
                player1.hp -= 1
                i++
            }

            //Need to pull trigger for yourself and see if it is going to be valid with a true statement
    })
    }
}

class Game {
    constructor(players){
        this.players = players;
        this.currentPlayer = this.players[0];
        this.gun = new gun()
    }

    start() {
        let chamber = this.gun.loadGun(1)
        this.gun.shuffle(chamber)
    
    }


}

// const rotation = () => {
//     for(let i = 1; i < 4; i++){

//     }
// }