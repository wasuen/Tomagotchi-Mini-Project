$('.start').on('click', (e) => {
    console.log('this button is working');
    game.createGame();
})

const game = {
    createGame(){
        let name = prompt('Name your new Pet Tomagotchi');
        const tomagotchi = new Tomagotchi(name);
        console.log(tomagotchi);
    }
}