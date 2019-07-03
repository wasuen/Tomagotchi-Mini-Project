$(".modal").modal({
    fadeDuration: 100,
    fadeDelay: 0.50
  });

$('.submit').on('click', (e) => {
    console.log('this button is working');
    console.log($(e.target).prop('tagName'));
    $('.submit').hide()
    if(e.target.tagName === 'A'){
        const numberOfPlayers = $(e.target).text();
        game.initTomagotchi();
        game.setHunger();
        game.setBoredom();
        game.setSleep();
    }
});

const game = {
    hunger: 10,
    sleep: 10,
    bored: 10,
    initTomagotchi() {
        const tomagotchi = new Tomagotchi($('.tname').val());
        console.log(tomagotchi);
        $('h2').text($('.tname').val())
    },
    setHunger(){
        const timer = setInterval(() => {
            this.hunger --;
            if(this.hunger === 0){
              console.log('Pet Died')
              clearInterval(timer)
            }
          $('.hunger').text(`${this.hunger}`);
        }, 5000);
    },
    setSleep(){
        const timer = setInterval(() => {
            this.sleep --;
            if(this.sleep === 0){
              clearInterval(timer);
              console.log('Pet Died')
            }
          $('.sleepy').text(`${this.sleep}`);
        }, 10000);
    },
    setBoredom(){
        const timer = setInterval(() => {
            this.bored --;
            if(this.bored === 0){
              clearInterval(timer);
              console.log('Pet Died')
            }
          $('.bored').text(`${this.bored}`);
        }, 5000);
    }
}