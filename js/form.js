class Form{
    constructor(){

    }
    display(){
var title=createElement('h1');
title.html("CAR RACING GAME");
title.position(80,0);
var input=createInput(' name');
input.position(130,160);
var button =createButton('PLAY');
button.position(250,200);
var greeting=createElement('h2');

button.mousePressed(function(){
 input.hide();
 button.hide();
 var name =input.value();
playerCount+=1;
player.update(name);
player.updateCount(playerCount);

greeting.html("HEllo " +name);
greeting.position(130,160);


 
});



    }
}