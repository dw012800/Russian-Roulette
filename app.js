

class Gun {
    constructor() {
        this.chamber = [];
    }

    loadGun(round){
        for(let i = 0; i < round; i++){
            this.chamber.push(true);
        }
        while(this.chamber.length < 6){
            this.chamber.push(false)
        }
        return this.chamber;
    }
    
    shuffle(arr) {
        let currentIndex = arr.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
        }
      
        return arr;
      }
    
    pulltrigger() {
        let fired = this.chamber.shift(); //the fired shot is the shifted bullet in the array
        return fired;
    }
}

class Player1{
    constructor(){
        this.name = 'Player1'
        this.hp = 3;
    }
}

class Player2{
    constructor(){
        this.name = 'Player2'
        this.hp = 3;
    }
}

class game {
    constructor(){
        this.player1 = new Player1();
        this.player2 = new Player2();
        this.players = [this.player1, this.player2];
        this.currentPlayer = this.players[0];
        this.nextPlayer = this.players[1];
        this.gun = new Gun()
    }

    start() {
        let chamber = this.gun.loadGun(1)
        this.gun.shuffle(chamber)
        const text = document.querySelector('.text')
        text.innerText = `Gun is loaded, it is ${this.currentPlayer.name}'s turn.`
        console.log('game started')
    }

    switchPlayers(){ //Switch player logic is to have an array of players which pushes out the first index and adds them to the back
        this.players.push(this.players.shift());
        this.currentPlayer = this.players[0];
        this.nextPlayer = this.players[1];
    }

    // updatehp(){
    //     const
    // }
}

//  window.onload = () => {
    let newGame = new game()
        //Add a way for the rounds to be rotated between players 
        newGame.start();
       /* document.querySelector('.shootop').addEventListener('click', (event) => {
            event.preventDefault()
            let result = this.gun.pulltrigger()
            if(result === true){  
                this.nextPlayer.hp -= 1;
            }
                    
    })  */        
        const p1hpbar = document.querySelector('.p1hp')
        p1hpbar.innerText = `Player1: ${newGame.player1.hp} HP`

        const p2hpbar = document.querySelector('.p2hp')
        p2hpbar.innerText = `Player2: ${newGame.player2.hp} HP`


        document.querySelector('.shoot-op').addEventListener('click', (event) => {
            event.preventDefault();
            let result = newGame.gun.pulltrigger();
            if(result === true){
                    //What is causing the players array that is being printed to be different from the nextPlayer?
                    newGame.nextPlayer.hp = newGame.nextPlayer.hp - 1;
                    if(newGame.nextPlayer.hp > 0){ 
                        if(newGame.nextPlayer.name === 'Player1'){
                            const p1hpbar = document.querySelector('.p1hp')
                            p1hpbar.innerText = `Player1: ${newGame.player1.hp} HP`
                        }
                        else if(newGame.nextPlayer.name === 'Player2'){
                            const p2hpbar = document.querySelector('.p2hp')
                            p2hpbar.innerText = `Player2: ${newGame.player2.hp} HP`
                        }
                        newGame.gun.loadGun(1);
                        newGame.gun.shuffle(newGame.gun.chamber);
                        const text = document.querySelector('.text');
                        text.innerText = `${newGame.nextPlayer.name} was shot, gun is loaded again, its ${newGame.nextPlayer.name}'s turn.`
                        newGame.switchPlayers();
                        console.log(newGame.nextPlayer.name)
                        
                        
                    }

                    else if(newGame.nextPlayer.hp === 0) {
                        console.log(newGame.nextPlayer.name)
                        const p1hpbar = document.querySelector('.p1hp')
                            p1hpbar.innerText = `Player1: ${newGame.player1.hp} HP`
                        const p2hpbar = document.querySelector('.p2hp')
                            p2hpbar.innerText = `Player2: ${newGame.player2.hp} HP`
                        const text = document.querySelector('.text');
                            text.innerText = `${newGame.nextPlayer.name} is dead.`

                        if(newGame.nextPlayer.name === 'Player1'){
                            console.log('player1 is dead')
                            const deadimage1 = document.querySelector(".player1-dead-person")
                            const liveimage1 = document.querySelector(".player1-live-person")
                            liveimage1.classList.remove("active")
                            deadimage1.classList.add("active")
                        }
                        else if(newGame.nextPlayer.name === 'Player2'){
                            console.log('player2 is dead')
                            const deadimage2 = document.querySelector(".player2-dead-person")
                            const liveimage2 = document.querySelector(".player2-live-person")
                            liveimage2.classList.remove("active")
                            deadimage2.classList.add("active")
                        }

                        }
                console.log(newGame.players)
            }

            else if(result === false){
                
                console.log(newGame.players)
                console.log(newGame.nextPlayer.name)
                console.log(newGame.currentPlayer.name)
                const text = document.querySelector('.text')
                text.innerText = `Was a blank, now ${newGame.nextPlayer.name}'s turn`
                newGame.switchPlayers();
            }
        })

        document.querySelector('.shoot-me').addEventListener('click', (event) => {
            event.preventDefault();
            let result = newGame.gun.pulltrigger();
            if(result === true){
                newGame.currentPlayer.hp = newGame.currentPlayer.hp - 1;
                if(newGame.currentPlayer.hp > 0){
                    console.log(newGame.currentPlayer.name)
                    const p1hpbar = document.querySelector('.p1hp')
                        p1hpbar.innerText = `Player1: ${newGame.player1.hp} HP`
                    const p2hpbar = document.querySelector('.p2hp')
                        p2hpbar.innerText = `Player2: ${newGame.player2.hp} HP`

                    if(newGame.currentPlayer.name === 'Player1'){
                            const p1hpbar = document.querySelector('.p1hp')
                            p1hpbar.innerText = `Player1: ${newGame.player1.hp} HP`
                        }
                        else if(newGame.currentPlayer.name === 'Player2'){
                            const p2hpbar = document.querySelector('.p2hp')
                            p2hpbar.innerText = `Player2: ${newGame.player2.hp} HP`
                        }
                    newGame.gun.loadGun(1);
                    newGame.gun.shuffle(newGame.gun.chamber);
                    const text = document.querySelector('.text')
                    text.innerText = `${newGame.currentPlayer.name} was shot, gun is loaded again, it's ${newGame.nextPlayer.name}'s turn`
                    newGame.switchPlayers();
                }
                else if(newGame.currentPlayer.hp === 0){
                    console.log(newGame.currentPlayer.name)
                    const p1hpbar = document.querySelector('.p1hp')
                        p1hpbar.innerText = `Player1: ${newGame.player1.hp} HP`
                    const p2hpbar = document.querySelector('.p2hp')
                        p2hpbar.innerText = `Player2: ${newGame.player2.hp} HP`
                    const text = document.querySelector('.text');
                        text.innerText = `${newGame.currentPlayer.name} is dead.`

                    if(newGame.currentPlayer.name === 'Player1'){
                            console.log('player1 is dead')
                            const deadimage1 = document.querySelector(".player1-dead-person")
                            const liveimage1 = document.querySelector(".player1-live-person")
                            liveimage1.classList.remove("active")
                            deadimage1.classList.add("active")
                    }
                        else if(newGame.currentPlayer.name === 'Player2'){
                            console.log('player2 is dead')
                            const deadimage2 = document.querySelector(".player2-dead-person")
                            const liveimage2 = document.querySelector(".player2-live-person")
                            liveimage2.classList.remove("active")
                            deadimage2.classList.add("active")
                        }

                    }
                    
                } 
                else if(result === false) {
                    console.log(newGame.currentPlayer.name)
                    console.log(newGame.players)
                    const text = document.querySelector('.text')
                    text.innerText = `Was a blank, now its ${newGame.currentPlayer.name}'s turn again.`
                }
            } //Need to pull trigger for yourself and see if it is going to be valid with a true statement
    )



// const rotation = () => {
//     for(let i = 1; i < 4; i++){

//     }
// }