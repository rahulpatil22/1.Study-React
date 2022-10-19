interface usersTyped{
    name:string,
    age:number,
    address:any,
}
let users:usersTyped={
    name:'arjun',
    age:30,
    address:'INDIA'
}
let user:any={
    name:'arjun',
    age:30,
    address:'INDIA'
}
//any kind of value we are able to assign
user.name=10
console.warn(user)
users.name="krishna"
console.warn(users)