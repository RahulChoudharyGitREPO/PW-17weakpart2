function doubleArrayElements(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  if (typeof callback !== "function") {
    throw new Error("Callback must be a function");
  }

  const doubledArray = [];

  for (let i = 0; i < arr.length; i++) {
    doubledArray.push(callback(arr[i]));
  }

  return doubledArray;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];

function double(element) {
  return element * 2;
}

const doubledResult = doubleArrayElements(inputArray, double);
console.log(doubledResult); // Output: [2, 4, 6, 8, 10]
