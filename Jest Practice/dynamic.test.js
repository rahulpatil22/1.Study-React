const sum= require('./dynamic');

test('sum function test case',()=>{

    expect(sum(2,3)).not.toBe(4)
    expect(sum(2,3)).toBe(5)
})

test('sum function test case one',()=>{

    expect(sum(2,3)).not.toBe(4)
    expect(sum(2,3)).toBe(5)
})