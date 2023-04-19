const razvanService = require('./razvanService');

describe('Razvan service', () => {
  it('Test 1', async () => {
    razvanService.razvanIsValid = jest.fn().mockReturnValue(true);
    
    // const isValidMock = jest.spyOn(razvanService, 'razvanIsValid');
    // isValidMock.mockImplementation(() => {
    //   return true;
    // });

    expect(() => {
      razvanService.razvan();
    }).not.toThrow();
  });
});
