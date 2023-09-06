function sortAndLogTitles(books, callback) {
  // Extract titles using the map function
  const titles = books.map((book) => book.title);

  // Sort titles alphabetically
  titles.sort();

  // Call the callback function with the sorted titles
  callback(titles);
}

// Example usage:
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

function logTitles(titles) {
  console.log("Titles in alphabetical order:");
  titles.forEach((title) => console.log(title));
}

// Call the program with the book list and logTitles callback
sortAndLogTitles(books, logTitles);
