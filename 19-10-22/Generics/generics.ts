      export{}
      function user<T>(data:T):T
      {
        return data
      }
      console.warn(user({name:"krishna",age:'30'}).age)
