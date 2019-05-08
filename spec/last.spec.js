const last = require('../src/last.js')

test('last', ()=>{
    expect(last([1,3,5,7,3,4,6,7])).toBe(7)
})