interface Point {
    x: number;
    y: number;
  }
  
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;


  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };

  const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
  };

  interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
  };

  interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };

  type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.



type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,                                    //return type extract the return type of function type.
  y: 20
};





type PointPrinter = (p: { x: number; y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,                                           //Parameters extracts the parameter types of a function type as an array.
  y: 20
};