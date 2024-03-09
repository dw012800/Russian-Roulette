
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
        let fired = Gun.shift(); //the fired shot is the shifted bullet in the array
        return fired;
    }
}


let myGun = new Gun()
console.log(myGun.shuffle(myGun.loadGun(1)))
