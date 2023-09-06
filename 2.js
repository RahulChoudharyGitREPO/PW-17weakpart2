function manipulateString(inputString) {
  // Convert the input string to uppercase
  const manipulatedString = inputString.toUpperCase();

  // Define the callback function
  function logString() {
    console.log(`The manipulated string is: ${manipulatedString}`);
  }

  // Return the callback function
  return logString;
}

// Example usage:
const input = "Hello, World!";
const logManipulatedString = manipulateString(input);

// Calling the callback function to log the manipulated string
logManipulatedString(); // Output: The manipulated string is: HELLO, WORLD!
