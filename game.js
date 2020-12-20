var gamePattern =[]

var buttonColours = ['red', 'blue', 'green', 'yellow'];


function nextSequence(){
    randomNum = Math.round(Math.random()*3);

    return randomNum;
}

var randomChosenColor = [nextSequence()]
gamePattern.push(randomChosenColor);

nextSequence();

$('.btn').click(function(event){
    playSound(event.target.className)
});

function playSound(name){
    switch(name){
        case ('btn green'): 
        console.log('clicked '+name);
        var greenAudio = new Audio('./sounds/green.mp3');
        greenAudio.play();
        break;
    
        case ('btn red'): 
        console.log('clicked '+name);
        var redAudio = new Audio('./sounds/red.mp3');
        redAudio.play();
        break;

        case ('btn blue'): 
        console.log('clicked '+name);
        var blueAudio = new Audio('./sounds/blue.mp3');
        blueAudio.play();
        break;

        case ('btn yellow'): 
        console.log('clicked '+name);
        var yellowfAudio = new Audio('./sounds/yellow.mp3');
        yellowAudio.play();
        break;
    }
}