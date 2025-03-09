function getThirdElement<T>(arr: T[]): T | undefined {

    if (arr.length < 3) {
        return undefined; 
    }
    return arr[2]; 
}

const numbers = [1, 2];
const words = ["apple", "banana", "cherry", "date"];

console.log(getThirdElement(numbers)); // Expected: undefined
console.log(getThirdElement(words));   // Expected: cherry
