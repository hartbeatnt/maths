var chai = require('chai')

const testMethodsExist = (obj, methods) => {
  if (typeof obj !== 'object') 
    throw new Error("ERR: testMethodsExist first parameter must be an object")
  if (!Array.isArray(methods)) 
    throw new Error("testMethodsExist second parameter must be an array")
  methods.forEach(method=>{
    chai.expect(obj[method]).to.exist
    chai.expect(obj[method]).to.be.a('function')
  })
}

module.exports.testMethodsExist = testMethodsExist