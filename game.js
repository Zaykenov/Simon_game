var gamePattern=[];//Gaming set
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];//User response to the game pattern
//Initial level
var level=0;
//Checking whether button keydown called only one time
var started= false;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keydown(function(){
    if(!started){
        $("#level-title").html("Level "+level);
        nextSequence();
        started=true;
    }
});

//Creation of function that will respond to the new tasks
function nextSequence(){
    //Clearing array for the next sequence
    userClickedPattern=[];
    $("#level-title").html("Level "+ level++)
    //Chose of a random button 
    //Adding this random element to the array
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //Creation of animation
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //Sound of initial element
    playSound(randomChosenColour);
}

$(".btn").click(function(){
    //Adding id of pressed button to the array
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //Sound for pressed buttons
    //Calling for checkAnswer function
    checkAnswer(userClickedPattern.length-1);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    });


function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        //This if statement prevent typing correct answer after incorrect answer was chosen
        if(userClickedPattern.length===gamePattern.length){
        setTimeout(nextSequence, 1000);};
    }else{
        var wrong= new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("#level-title").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level=0;
    started=false;
    gamePattern=[];
}


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

//Step 6 Adding animations to button press

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}







