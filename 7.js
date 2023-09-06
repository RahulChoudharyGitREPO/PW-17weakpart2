async function fetchDataFromMultipleEndpoints() {
  try {
    // Define the URLs for the two API endpoints
    const todoUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const postUrl = "https://jsonplaceholder.typicode.com/posts/1";

    // Use Promise.all to fetch data from both endpoints in parallel
    const [todoResponse, postResponse] = await Promise.all([
      fetch(todoUrl),
      fetch(postUrl),
    ]);

    // Check if any of the responses are not OK (status code 200)
    if (!todoResponse.ok || !postResponse.ok) {
      throw new Error("One or more API requests failed");
    }

    // Parse the JSON data from both responses
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    // Create and log the combined object
    const combinedData = {
      todo: todoData,
      post: postData,
    };
    console.log(combinedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to fetch data from both endpoints and log the combined object
fetchDataFromMultipleEndpoints();
