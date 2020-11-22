class Paper {
    //properties
    constructor(x,y,r){
        var options = {
        isStatic: false,
        restitution: 0.3,
        density: 1.2,
        friction: 0.5

    }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(myWorld,this.body);
    }

    //functions
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(3);
        fill(255,0,255);
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
