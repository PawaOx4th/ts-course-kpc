/**
 * Unit: Excess Property Checks.
 */
// Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments.
// If an object literal has any properties that the “target type” doesn’t have, you’ll get an error:
// let mySquare = createSquare({ colour: "red", width: 100 });
// error: 'colour' not expected in type 'SquareConfig'
// There are two ways to get around this. The first way is to use a type assertion:
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way.
// If SquareConfig can have colour and width properties with the above types, but could also have any number of other properties, then we could define it like so:
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }
// We’ll discuss index signatures in a bit, but here we’re saying a SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.
// One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable: Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);

interface SquareConfig {
  height: number
  width: number
}

function createSquare(property: SquareConfig) {
  return { area: property.height * property.height }
}

const myConfig = { height: 100, width: 100, color: "red" }
