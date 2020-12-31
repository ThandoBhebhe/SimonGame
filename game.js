$(document).one('keypress' ,function(){//listen to keypress and animate button at start of game

    var gamePattern = []
    var userClickedPattern = []
    var buttonColours = ['red', 'blue', 'green', 'yellow'];
    var level = 1;

    var randomNumber = Math.round(Math.random()*4)
    $('h1').text('LEVEL '+ level)
    
    switch(randomNumber){
        case 1: 
        animateRandomButton('red')
        break;

        case 2: 
        animateRandomButton('blue')
        break;

        case 3: 

        animateRandomButton('green')
        break;

        case 4: 
        animateRandomButton('yellow')
        break;
    }

var called = false;

function animateRandomButton(button){
    $('.'+button).addClass('pressed-animation')
    
    gamePattern.push(button)
    console.log(gamePattern)

    setTimeout(function(){
        $('.'+button).removeClass('pressed-animation')
    },1000)

}

function animateButton(button){
    $(button).addClass('pressed')
    setTimeout(function(){
        $(button).removeClass('pressed')
    },50)
}

function nextSequence(){ //random color add to the sequence

    userClickedPattern=[]
    randomNum = Math.round(Math.random()*4);
    $('h1').text('LEVEL '+(level+=1))

    switch(randomNum){
        case 1: 
        
        setTimeout(function(){
            animateRandomButton('red');
        },1000)

        break;

        case 2: 
        
        setTimeout(function(){
            animateRandomButton('blue');
        },1000)
        break;

        case 3: 
        
        setTimeout(function(){
            animateRandomButton('green');
        },1000)
        break;
        case 4: 
        
        setTimeout(function(){
            animateRandomButton('yellow');
        },1000)
        break;
    }
}

    function gameOver(){
                $('body').addClass('game-over')
                $('h1').text('GAME-OVER, FAILED AT LEVEL '+ level)
    }

    function checkCorrectness(){

        if(userClickedPattern.length == gamePattern.length){

            var stringifiedUserClickedPattern = JSON.stringify(userClickedPattern)
            var stringifiedGamePattern = JSON.stringify(gamePattern) 

            if(stringifiedUserClickedPattern == stringifiedGamePattern){
                nextSequence()
            }else{
                gameOver()
            }
            
        }else{
            var gamePatternSubArray = gamePattern.slice(0,userClickedPattern.length)

            var stringifiedGamePatternSubArray = JSON.stringify(gamePatternSubArray)
            var stringifiedUserClickedPatterns = JSON.stringify(userClickedPattern)

            if(stringifiedGamePatternSubArray != stringifiedUserClickedPatterns){
                gameOver()
            }
        }   
}

    $('.btn').click(function(event){//call playsound on click with the ID of the button

        animateButton('#'+event.target.id)
        playSound(event.target.id)
        userClickedPattern.push(event.target.id);
        checkCorrectness();
    });



    function playSound(idName){ //play appropriate sound and animation according to the id

        var userChosenColor = idName;
        var sound = new Audio('./sounds/'+idName+'.mp3')
        
        sound.play();
    }

})