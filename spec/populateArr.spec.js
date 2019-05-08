const populateArr = require('../src/populateArr')

test('populateArr',()=>{
    expect(populateArr(10).length).toBe(10)
})