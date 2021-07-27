
  function isString (value) {
    return typeof(value) === "string"
  }
  
  function isInteger (value){
    return typeof(value) === "number"
  }
  
  function isBoolean (value){
    return typeof(value) === "boolean"
  }

  exports = module.exports = {
     isString, 
     isInteger,
     isBoolean
}

