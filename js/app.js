
$(".modal").modal({
    fadeDuration: 100,
    fadeDelay: 0.50
  });

$('.submit').on('click', (e) => {
    console.log($(e.target).prop('tagName'));
    $('.submit').hide()
    if(e.target.tagName === 'A'){
        const numberOfPlayers = $(e.target).text();
        game.initTomagotchi();
        game.setMineral();
        game.setGas();
        game.setEnergy();
        game.setAge();
    }
});

const game = {
    mineral: 10,
    gas: 10,
    energy: 10,
    age: 0,
    initTomagotchi() {
        const tomagotchi = new Tomagotchi($('.tname').val());
        console.log(tomagotchi);
        $('h3').text($('.tname').val())
    },
    setMineral(){
      $('#mineral').on('click', (e) => {
        this.mineral += 1;
        $('.mineral').text(`${this.mineral}`);
      });
        const timer = setInterval(() => {
            this.mineral --;
            if(this.energy === 0 || this.gas === 0){
              clearInterval(timer);
            };
            console.log(this.mineral)
            if(this.mineral === 0){
              $('img').attr('src','images/wasted.png');
              clearInterval(timer);
            }
          $('.mineral').text(`${this.mineral}`);
        }, 7000);
    },
    setGas(){
      $('#gas').on('click', (e) => {
        this.gas += 1;
        $('.gas').text(`${this.gas}`);
      });
        const timer = setInterval(() => {
            this.gas --;
            if(this.energy === 0 || this.mineral === 0){
              clearInterval(timer);
            };
            if(this.gas === 0){
              $('img').attr('src','images/wasted.png');
              clearInterval(timer);
            };
          $('.gas').text(`${this.gas}`);
        }, 3000);
    },
    setEnergy(){
      $('#energy').on('click', (e) => {
        this.energy += 1;
        $('.energy').text(`${this.energy}`);
      });
        const timer = setInterval(() => {
            this.energy --;
            if(this.gas === 0 || this.mineral === 0){
              clearInterval(timer);
            };
            if(this.energy === 0){
              $('img').attr('src','images/wasted.png');
              clearInterval(timer);
            };
          $('.energy').text(`${this.energy}`);
        }, 5000);
    },    
    setAge(){
      const timer = setInterval(() => {
          this.age ++;
          if(this.energy === 0 || this.gas === 0 || this.mineral === 0){
            clearInterval(timer);
          };
          if(this.age === 5){
            $('img').attr('src','images/Zergling.gif');
          } else if(this.age === 15){
            $('img').attr('src','images/Hydralisk.gif');
          } else if(this.age === 20){
            $('img').attr('src','images/Ultralisk.gif');
          };
        $('.age').text(`${this.age}`);
      }, 1000);
  }
    
}