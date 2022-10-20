export{}
//casting with as
let x: unknown = 'hello';
console.log((x as string).length);

//casting with <>
let y: unknown = 'hello';
console.log((<string>y).length);


//force casting
let z = 'hello';
//console.log(((z as unknown) as number).length);

