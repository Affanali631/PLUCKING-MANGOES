class SlingShot
{
   constructor(a,b)
   {
    var options = 
    {
       bodyA:a,
       pointB:b,
       stiffness:0.04,
       length:1
    }
  //  this.bodyA=a;
    //this.pointB=b;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
   }
   display()
   {
      if(this.chain.bodyA)
      {
      var p1=this.chain.bodyA.position;
      var p2=this.chain.pointB;
      push()
      strokeWeight(5);
      line(p1.x,p1.y,p2.x,p2.y);
      pop();
      }
   }
   attach(body){
		this.chain.bodyA=body;
	}
   fly()
   {
     this.chain.bodyA=null
   }
}