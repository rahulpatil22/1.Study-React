const async=require('./async');

test("async function",async()=>{
    const data=await async();
    expect(data).toBe('done')
})
