///<reference path="./utils.ts"/>
namespace UsersUtils
{
  export  class Users extends Parent implements userType{
        getName()
        {
            return this.name
        }
    }
}
let u1= new UsersUtils.Users();
u1.setName("arjun")
console.warn(u1.getName())