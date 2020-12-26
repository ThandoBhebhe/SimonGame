var gamePattern = []
var userClickedPattern = []
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var level = 0;

var called = false;


function nextSequence(){ //random color add to the sequence
    randomNum = Math.round(Math.random()*3);

    switch(randomNum){
        case 1: 
        gamePattern.push('red')
        break;

        case 2: 
        gamePattern.push('blue')
        break;

        case 3: 
        gamePattern.push('green')
        break;
        case 4: 
        gamePattern.push('yellow')
        break;
    }
}

$('.btn').click(function(event){ //get id of buttons
    playSound(event.target.id)
});

function playSound(idName){ //play appropriate sound and animation according to the id

    var userChosenColor = idName;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
    console.log('GP '+gamePattern)

    var sound = new Audio('./sounds/'+idName+'.mp3')
    sound.play();
}