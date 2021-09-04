var gamePattern=[];//Gaming set
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];//User response to the game pattern

//Creation of function that will respond to the new tasks
function nextSequence(){
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
    playSound(userChosenColour);
    });


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}


nextSequence();



