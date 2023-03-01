// Basics Exercise: simple fetching.
const BASE_URL = "http://localhost:3000";

// helper function to fetch json object
const fetchJson = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

// Create an async function fetchUsers.
const fetchUsers = async (base_url) => {
    const url = `${base_url}/users`;
        // console.table(users);
    const users = await fetchJson(url);
    return users;
}

// Call the fetchUsers function.
// fetchUsers(BASE_URL);
// Comment out the call to fetchUsers once you have a button to trigger the request.

// Select the button that is on the page.
const fetchButton = document.querySelector(".fetch-button");
// Add fetchUsers as the event listener to the button.
// fetchButton.addEventListener("click", () => fetchUsers(BASE_URL));
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
const fetchPostAndComments = async (postId) => {
    const postUrl = `${BASE_URL}/posts/${postId}`;
    const commentsUrl = `${BASE_URL}/comments?postId=${postId}`

    // fetch users object await it later
    const asyncUsers = fetchUsers(BASE_URL);
    // fetch post of specified id
    const asyncPost = fetchJson(postUrl);
    //fetch comments for specific post
    const asyncComments = fetchJson(commentsUrl);

    const users = await asyncUsers;
    const post = await asyncPost;
    const comments = await asyncComments;

    const getUser = function(userAction) {
        const [user] = users.filter(usr => usr.id === userAction.userId);
        return user;
    }

    //log post info and comments
    console.group(`Post (id:${postId})`);
    console.log("user:", getUser(post).name);
    console.log("text:", post.body);
    console.log("Comments:");
    comments.forEach(comment => {
        console.log(`> ${getUser(comment).name}: ${comment.comment}`);
    });
    console.groupEnd();
}

// fetchPostAndComments("f4c8a31e");
fetchButton.addEventListener("click", () => fetchPostAndComments("892a4ba3"));
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
