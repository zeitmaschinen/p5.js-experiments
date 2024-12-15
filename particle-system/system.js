class System {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      
      this.particles = []; 
      this.num = 50;
      for (let i=0; i<this.num; i++) {
        this.particles.push(new Particle(this.x, this.y));
      }
      
      this.done = false;
    }
    
    update() {
      this.finished(); 
      for (let i=this.particles.length-1; i>=0; i--) {
        this.particles[i].update();
  
        if (this.particles[i].done) {
          this.particles.splice(i, 1);
        }
      }
    }
    
    display() {
      for (let i=0; i<this.particles.length; i++) {
        this.particles[i].display();
      }
    }
    
    finished() {
      if (this.particles.length == 0) {
        this.done = true;
      } else {
        this.done = false;
      }
    }
  }