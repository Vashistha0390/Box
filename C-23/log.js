class Log{

    constructor(x,y,h,angle){
        var log_options ={
            restitiution: 0.5
        }
             
        this.log = Bodies.rectangle(x,y,20,h,log_options);
        this.w=20;
        this.h=h;
        Matter.Body.setAngle(this.log,angle)
        World.add(world,this.log)
    

}

    display(){
   var angle= this.log.angle
   push()
   rotate(angle)
   rectMode(CENTER);
    fill("brown")
    rect(this.log.position.x,this.log.position.y,this.w,this.h);
    pop()
}   
}