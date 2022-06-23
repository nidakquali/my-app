test("illustrate spy", () => {
    // arrange
    const greeter = require('./MockFunctions.js')

    const getFullNameSpy = jest.spyOn(greeter, 'getFullName')
    //const getFullNameSpy = jest.spyOn(greeter, 'getFullName').mockImplementation()
    
    // act
    const result = greeter.greet("Nida", "Khan")

    // assert
    expect(getFullNameSpy).toHaveBeenCalled()
    expect(result).toBe("Hello! Nida Khan")
    expect(getFullNameSpy).toHaveBeenCalledWith("Nida","Khan")

})
