class Bird{
    
    constructor(x,y){
        var rectangle_options ={
            restitution: 1.0
        }                
    this.rectangle = Bodies.rectangle(x,y,50,50, rectangle_options);
   
    World.add(world,this.rectangle);
    }
     
    display(){
        this.rectangle.position.x= mouseX
        this.rectangle.position.y = mouseY
        rectMode(CENTER);
        fill("yellow")
        rect(this.rectangle.position.x, this.rectangle.position.y, 50, 50);
                                                                                                                                                                   
    }


}