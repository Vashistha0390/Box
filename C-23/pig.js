class Pig{
    
    constructor(x,y){
        var rectangle_options ={
            restitution: 1.0
        }                
    this.rectangle = Bodies.rectangle(x,y,50,50,rectangle_options);
    //this.w=w;
    //this.h=h;
    World.add(world,this.rectangle);
    }
     
    display(){
    
        rectMode(CENTER);
        fill("green")
        rect(this.rectangle.position.x, this.rectangle.position.y, 50, 50)
                                                                                                                                                                
    }


}