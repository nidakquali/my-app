test("illustrate mocks", () => {
    // arrange
    const mock = jest.fn().mockReturnValue("mocked name")
    const greeter = require('./MockFunctions.js')
    greeter.getFullName = mock
 
    // act
    const result = greeter.greet("Nida", "Khan")
 
    // assert
    expect(result).toBe("Hello! mocked name")
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith("Nida","Khan")
})