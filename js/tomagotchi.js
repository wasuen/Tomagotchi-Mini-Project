class Tomagotchi {
    constructor(name){
        this.name = name;
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
    }
    nameTomagotchi(){
        this.tomagotchiName = '';
        prompt('Name your new Pet Tomagotchi', this.tomagotchiName);
        console.log(this.tomagotchiName)
    }
}