class Form{
    constructor(){
        
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        
        var inputBox = createInput("name");
        inputBox.position(130,160);
        var button = createButton("Start");
        button.position(250,200);
        var greeting = createElement("h3");
        button.mousePressed(function(){
            inputBox.hide();
            button.hide();
            var name = inputBox.value();
            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Welcome " + name);
            greeting.position(130,160);            
        });
    }
}