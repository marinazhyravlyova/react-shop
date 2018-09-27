import { object } from './array';

const getSortedObjectPropertyNames = (object) => {
    return Object.keys(object).sort();
};

console.log(object, ' Sorted properties: ', getSortedObjectPropertyNames(object));