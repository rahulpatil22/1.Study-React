const fetchdata=require('./fetchdata')

test("promise testing",()=>{

    return fetchdata().then((data)=>{
        expect(data).toBe('Hello');
    })
})