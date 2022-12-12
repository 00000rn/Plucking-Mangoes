class launcher {

constructor (body,anchor) {

var options ={
    bodyA:body,
    piontB:anchor,
    stiffness:0.04,
    length:1
}
this.bodyA=body
this.pointB=anchor
this.launcher=Constraint.create(options)
world.add(world,this.launcher)
}

attach(body){
    this.launcher.bodyA=body
}

// fly(){
//     this.launcher.bodyA=null
// }

display(){

if (this.launcher.bodyA){
   var pointA=this.bodyA.Position
   var pointB=this.pointB
   strokeWeight(2)
   line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}




}