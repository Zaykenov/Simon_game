var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    return audio.play();
}

$("button").on("click", handler);

function handler(){
    var userChosenColour= $("button").attr("id");
    userClickedPattern.push(userChosenColour);
}


nextSequence();



