class Bob{

constructor(x,y) {
var options={
isStatic:false,
restitution:1,
frictions:0,
density:7.8

}
this.body=Bodies.circle(x,y,25,options)
World.addd(world,this.body)




}
display(){

push()
ellipseMode(RADIUS)
fill(254,0,255)
ellipse(this.body.position.x,this.body.position.y,25,25)
pop()




}











    







}