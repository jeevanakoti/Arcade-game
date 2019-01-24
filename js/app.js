// Enemies our player must avoid
var lifes=3;
var coins=0;
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
this.x=x;
this.y=y;
this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Rock.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x+=this.speed*dt;
    if(this.x>550){
        this.x=-100;
        this.speed=30*Math.floor(Math.random()*20);
    }
    /* here we calculate the speed and lifes of the player */
    if(player.x < this.x + 80 && player.x + 47> this.x && player.y < this.y + 30 && 30 + player.y  > this.y)
        {
            player.x=200;
            player.y=380;
            if(lifes<= 3 && lifes >=0)
            {
                if(lifes===0)
                {
                    lifes=4;
                }

            lifes-=1;
            document.getElementById('life').innerText=lifes;
            if(lifes===2)
                alert("you have two lifes more");
            if(lifes==1)
                 alert("you have one life more");
            // alert('lifes')
            if(lifes===0)
                alert("you have no more lifes");
            if(lifes===3)
            {
                alert("GAME STARTED AGAIN");
                coins=0;
                document.getElementById('credits').innerText=coins;
            }
        }
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Player=function(x,y,speed)
{
    this.x=x;
    this.y=y;
    this.speed;
    this.sprite='images/char-princess-girl.png'
};
Player.prototype.update=function()
{
    if (this.x<0) {
        this.x=0;
    }
    if(this.y<0){
        coins+=1;
        document.getElementById('credits').innerText=coins;
        this.x=200;
        this.y=300;
    }
    if(this.x>400)
    {
        this.x=400;
    }
    if(this.y>400)
    {
        this.y=380;
    }
    if(this.y>500)
       {
          coins+=1;
          document.getElementById('credits').innerText=coins;
       }
    
}


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}
//here it denoted the direction to be move and the measurements of their movements
Player.prototype.handleInput=function(eventHappened){
    switch(eventHappened){
        case 'left':
            this.x-=50;
            break;
        case 'right':
            this.x+=50;
            break;
        case 'up':
            this.y-=50;
            break;
        case 'down':
            this.y+=50;
            break;
    }
}
player=new Player(200,380,50);
    var allEnemies=[];
    var enemy;
    var positions=[80,150,230];
    positions.forEach((pos)=>{
        enemy=new Enemy(3,pos,100*Math.floor(Math.random()*512))
        //enemy speed(x,y,speed)
        allEnemies.push(enemy)
    });
    // body...
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
