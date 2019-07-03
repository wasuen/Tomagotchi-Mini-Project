$("#linkedToModal").modal({
    fadeDuration: 100,
    fadeDelay: 0.50
  });

$('.submit').on('click', (e) => {
    console.log('this button is working');
    console.log($(e.target).prop('tagName'));
    if(e.target.tagName === 'A'){
        const numberOfPlayers = $(e.target).text();
        game.initTomagotchi();
}});

const game = {
    initTomagotchi() {
        const tomagotchi = new Tomagotchi($('.tname').val());
        console.log(tomagotchi);
        $('h2').text($('.tname').val())
    }
}