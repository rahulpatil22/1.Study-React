const string=require('./string')

test("test for string",()=>{
    //expect(string()).toMatch('Hello') //as function
   // expect(string).toMatch('Hello')   //as variable
   // expect(string("Hello")).toMatch(/ll/)  // as part of string
   expect(string("Hello")).not.toMatch('Hello1') 
})