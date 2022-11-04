const { Module } = require("module")
const { ModuleResolutionKind } = require("typescript")

function async()

{
    return new Promise((resolve,reject)=>{

        resolve('done')
    })
}
module.exports=async;