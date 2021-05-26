class SlingShot{
    constructor(bodyA, position){
       var options = {
           bodyA: bodyA,
           pointB: position,
           stiffness: 0.08,
           length: 10
       };
       this.sling = Constraint.create(options);
       World.add(world, this.sling);
       this.position = position;
       this.bodyA = bodyA;
    }
    launch(){
        this.sling.bodyA = null;
    }
    attach(){
        this.sling.bodyA = this.bodyA;
    }
    display(){
        if(this.sling.bodyA){
            var position = this.sling.bodyA.position;
            line(this.position.x, this.position.y, position.x, position.y);
            
        }
    }
}