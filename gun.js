
class gun {
    constructor() {
        this.chamber = [];
    }

    loadGun(round){
        for(let i = 0; i < round; i++){
            chamber.push(true);
        }
        while(chamber.length < 6){
            chamber.push(false)
        }
        return chamber;
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
        let fired = gun.shift(); //the fired shot is the shifted bullet in the array
        return fired;
    }
}

console.log(gun.loadGun(1))