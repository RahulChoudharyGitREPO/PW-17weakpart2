function greetWithPromise(name) {
  return new Promise((resolve, reject) => {
    if (typeof name !== "string" || name.trim() === "") {
      reject(new Error("Invalid input. Please provide a valid name."));
    } else {
      const greeting = `Hello, ${name}!`;
      resolve(greeting);
    }
  });
}

// Example usage:
const name = "Mithun";

greetWithPromise(name)
  .then((greeting) => {
    console.log(greeting); // Output: Hello, Mithun!
  })
  .catch((error) => {
    console.error(error.message);
  });
