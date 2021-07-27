
const misFunciones = require('./basic.test2') 


describe ("Tests", () => {

    test("Checking types - Test 1", () => {
      const newValue = "This is a string"
      
      expect(misFunciones.isString(newValue)).toBe(true)
    })

    test("Checking types - Test 2", () => {
      const newValue = 2
      expect(misFunciones.isInteger(newValue)).toBe(true)
    })
    test("Checking types - Test 3", () => {
      const newValue = false
      expect(misFunciones.isBoolean(newValue)).toBe(true)
    })
  })

  test("Checking arrays", () => {
    const newArray = [0,1,2]
    expect(newArray.length).toBe(3)
  })

  test("Checking arrays", () => {
    const newArray = ["A","B","C"]
    
    // Add new value to the array by code

    newArray.push("D")
    expect(newArray.length).toBe(4)

    // Print the new value
    console.log(newArray)
    console.log(newArray[3])
  })

  test("Checking objects", () => {
    const newObject = {
      name: "rodrigo",
      lastname: "Berasain"
    }
      
    expect(newObject.name).toBe("rodrigo")
    expect(newObject.lastname).toBe("Berasain")
      

    console.log(newObject.lastname)

    // Add a new value to the object
    // Print the object
    // print the new value and perform a new assert
   

    
    
  })

  

