const axios = require('axios')
jest.mock('axios');
  
describe("mock api calls", () => {
   test("mocking external endpoint in axios", () => {
  
       // arrange
       const mockedResponse = {data: {username:'test-user', address:'India'}}
       axios.get.mockResolvedValue(mockedResponse)
       const app = require('../ApiMock.js')
  
       // act
       app.getUserData()
  
       // asserts
       expect(axios.get).toHaveBeenCalled()
       expect(axios.get).toHaveBeenCalledWith('https://reqres.in/api/users/2')
  
   })
})