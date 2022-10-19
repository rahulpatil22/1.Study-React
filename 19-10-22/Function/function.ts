function Cals(a:number,b?:number):number
{
    return b?a+b:a;
}
console.warn(Cals(100,50))