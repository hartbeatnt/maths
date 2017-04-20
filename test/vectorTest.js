const expect = require('chai').expect
const Vector = require('../dev/Vector.js')
const { testMethodsExist } = require('./test.utils.js')

describe('Vector',()=>{
  it('should exist', ()=>{
    expect(Vector).to.exist
    expect(Vector).to.be.a('function')
  })
  it('should have methods', ()=>{
    let vector = new Vector();
    testMethodsExist(vector,['dot','cross','length'])
  })
  it('should work with 2D vectors',()=>{
    let vec2 = new Vector(1,2)
    expect(vec2.dimension).to.equal(2)
    expect(vec2.x).to.equal(1)
    expect(vec2.r).to.equal(1)
    expect(vec2.y).to.equal(2)
    expect(vec2.g).to.equal(2)
  })
  it('should work with 3D vectors',()=>{
    let vec3 = new Vector(1,2,3)
    expect(vec3.dimension).to.equal(3)
    expect(vec3.x).to.equal(1)
    expect(vec3.r).to.equal(1)
    expect(vec3.y).to.equal(2)
    expect(vec3.g).to.equal(2)
    expect(vec3.z).to.equal(3)
    expect(vec3.b).to.equal(3)
  })
  it('should work with 4D vectors',()=>{
    let vec4 = new Vector(1,2,3,4)
    expect(vec4.dimension).to.equal(4)
    expect(vec4.x).to.equal(1)
    expect(vec4.r).to.equal(1)
    expect(vec4.y).to.equal(2)
    expect(vec4.g).to.equal(2)
    expect(vec4.z).to.equal(3)
    expect(vec4.b).to.equal(3)
    expect(vec4.w).to.equal(4)
    expect(vec4.a).to.equal(4)
  })
})