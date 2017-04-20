class Vector {
  constructor(){
    this.dimension = arguments.length;
    if (arguments.length > 0) {
      this.x = arguments[0]
      this.r=(()=>this.x)()
    }
    if (arguments.length > 1) {
      this.y = arguments[1]
      this.g=(()=>this.y)()
    }
    if (arguments.length > 2) {
      this.z = arguments[2]
      this.b=(()=>this.z)()
    }
    if (arguments.length > 3) {
      this.w = arguments[3]
      this.a=(()=>this.w)()
    }
  }
  dot(v1, v2) {

  }
  cross(v1, v2) {

  }
  length(){

  }
}
module.exports = Vector