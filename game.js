var gamePattern=[];
var userPattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;
var started=false;
$(document).keydown(function(){
    if(!started)
    {
        nextSequence();
        started=true;
    }
});
function nextSequence(){
    userPattern=[];
    level++;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    // console.log($("#"+randomChosenColor));

}
$(".btn").click(handler);
function handler(){
    // console.log(this);
    var userChosenColor=this.id;
    userPattern.push(userChosenColor);
    // console.log(userPattern);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(userPattern.length-1);

}
function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(colour)
{
    $("#"+colour).addClass("pressed");
    setTimeout(function (){
        $("#"+colour).removeClass("pressed");
    },100);
}
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userPattern[currentLevel])
    {
        if(gamePattern.length===userPattern.length)
        {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else
    {
        wrongAnswer();
    }
}
function wrongAnswer(){
    $("body").addClass("red");
    setTimeout(function(){
        $("body").removeClass("red");
    },200);
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game over😔! Press any key to Restart");
    startOver();

}
function startOver(){
    level=0;
    gamePattern=[];
    userPattern=[];
    started=false;
}
//lkfsenkjefnjken