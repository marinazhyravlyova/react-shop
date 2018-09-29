import { array } from "./array";

const removeElementFilter = (array, deletableObject) =>
    array.filter((object) => object !== deletableObject);

const removeElementReduce = (array, deletableObject) => {
    return array.reduce((newArray, currentObject) => {
        if (currentObject !== deletableObject) {
            return [
                ...newArray,
                currentObject,
            ];
        }

        return newArray;
    }, []);
};

console.log(array, ' Remove by filter:', removeElementFilter(array));
console.log(array, ' Remove by reduce:', removeElementReduce(array));