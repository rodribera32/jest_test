function isString (value) {
  return typeof(value) === "string"
}

describe ("Tests", () => {

  test("Checking types - Test 1", () => {
    const newValue = "This is a string"
    expect(isString(newValue)).toBe("string")
  })

  test("Checking types - Test 2", () => {
    const newValue = 2
    expect(isInteger(newValue)).toBe("number")
  })

  test("Checking types - Test 3", () => {
    const newValue = false
    expect(isBoolean(newValue)).toBe(true)
  })

  test("Checking arrays", () => {
    const newArray = [0,1,2]
    expect(lengthOfArray(newArray)).toBe(5)
  })

  test("Checking arrays", () => {
    const newArray = [0,1,2]
    // Add new value to the array by code
    expect(lengthOfArray(newArray)).toBe(4)

    // Print the new value
  })

  test("Checking objects", () => {
    const newObject = {
      name: "rodrigo"
    }
    expect(newObject.name).toBe(6)

    // Add a new value to the object
    // Print the object
    // print the new value and perform a new assert
  })

  test("Checking imports", () => {
    // Move the functions to another file and import it
    // Modify the functions called in the tests
  })
})
