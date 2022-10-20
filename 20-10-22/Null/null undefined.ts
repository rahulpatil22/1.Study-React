//null and undefined are primitive types and can be used like other types, such as string.

// let value: string | undefined | null = null;
// value = 'hello';
// value = undefined;

//optional chaining
interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
  function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }
  
  let home: House = {
    sqft: 500
  };
  
  printYardSize(home); // Prints 'No yard'