// Basics Exercise: simple fetching.
const BASE_URL = "http://localhost:3000";
// Create an async function fetchUsers.
const fetchUsers = async(base_url) => {
    const url = base_url + "/users"
    const response = await fetch(url);
    const users = await response.json();
    console.table(users);
}

// Call the fetchUsers function.
// fetchUsers(BASE_URL);
// Comment out the call to fetchUsers once you have a button to trigger the request.

// Select the button that is on the page.
const fetchButton = document.querySelector(".fetch-button");
// Add fetchUsers as the event listener to the button.
fetchButton.addEventListener("click", () => fetchUsers(BASE_URL));
// End of Basics Exercise.

// =================================================================

// Intermediate Exercise: fetching multiple related resources.

// Write the fetchPostAndComments async function.

// First store the users in a constant. You can reuse the fetchUsers function for this
// or write a generic helper function that fetches something and converts it to JSON.

// Fetch the post.

// Fetch the comments.

// Find the author of the post.

// Log the author's name and the content of the post.

// Loop over the comments

// For each comment find the author, and log their name, and the comment.

// Select the button that is on the page.

// Fetch a specific Post and its comments on clicking the button.

// End of Intermediate Exercise.

// =================================================================

// Advanced Exercise: fire off multiple requests.

// Rewrite the fetchPostAndComments async function.

// First, we should not await any of the fetches.

// Await users and post.

// Log out the post's author and the body.

// Await the comments.

// For each comment find the author, and log their name, and the comment.

// Select the button that is on the page.

// Fetch a specific Post and its comments on clicking the button.

// End of Advanced Exercise.
