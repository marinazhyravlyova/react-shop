import { array } from "./array";

const mappedArray = (array || []).map(element => {
    return element.name;
});

console.log(array, ' Mapped array', mappedArray);

const result = [true, true, true, true].every(element => {
    return element;
});