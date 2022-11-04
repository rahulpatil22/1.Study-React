const callbackfunction=require('./callbackfunction')

test("testing callbackfunction",done=>{
    function callback(data)

    {
        try{
            expect(data).toBe('Hello callback')
            done()

        }catch(error)
     {
        done(error)
     }

    }
    callbackfunction(callback)
})