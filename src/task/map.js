import { array } from "./array";

const mappedArray = (array || []).map(({ name }) => name);

console.log(array, ' Mapped array', mappedArray);

const result = [true, true, true, false].every(element => {
    return element;
});