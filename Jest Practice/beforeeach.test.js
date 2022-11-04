
const beforeeach= require('./beforeeach')
const common=require('./common')

beforeEach(()=>
{
    console.warn(common());
})
test("fetch data testing",()=>{

    expect(beforeeach()).toBe('Hello')
})
test("fetch data testing",()=>{

    expect(beforeeach()).toBe('Hello')
})