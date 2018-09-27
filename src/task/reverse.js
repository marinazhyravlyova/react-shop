import { array } from "./array";

const reversed = ([...array] || []).reverse();

console.log(array, ' Reversed array', reversed);
