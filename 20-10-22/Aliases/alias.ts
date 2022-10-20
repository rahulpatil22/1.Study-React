type varType = string | number ;



// let a : string | number | boolean =20;
// let b : string | number | boolean =40;
// let c : string | number | boolean ="hello";

// let a: varType = 20;
// let b: varType = 40;
// let c: varType = "hello";

function helloType(a:varType,b:varType)
{
    console.warn(a,b)
}
helloType(20,"Hello")