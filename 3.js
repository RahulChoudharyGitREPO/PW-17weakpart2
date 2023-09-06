function ageInDays(person) {
  // Concatenate the first name and last name into fullName
  const fullName = `${person.firstName} ${person.lastName}`;

  // Calculate age in days
  const ageInDays = person.age * 365; // Assuming 365 days in a year

  // Define the callback function to log the message
  function logMessage() {
    console.log(
      `The person's full name is ${fullName} and their age in days is ${ageInDays}.`
    );
  }

  // Return the callback function
  return logMessage;
}

// Example usage:
const personInfo = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const logAgeInDays = ageInDays(personInfo);

// Calling the callback function to log the message
logAgeInDays(); // Output: The person's full name is John Doe and their age in days is 10950.
