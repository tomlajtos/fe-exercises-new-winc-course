const ROOT_URL = "http://localhost:3000/";
const API_KEY = "Vz2FpaZAXr0hu9EJP70X";

// A function that returns a function so we can set ROOT_URL and API_KEY exactly
// once.
const generateSendRequest =
	(root_url, api_key) =>
		async (method, url_part = "", body = false) => {
			const url = `${root_url}${url_part}`;
			const options = {
				method,
			};
			if (!["GET", "DELETE"].includes(method)) {
				options.body = JSON.stringify(body);
				options.headers = {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${api_key}`,
				};
			}
			const response = await fetch(url, options);

			let result;
			switch (response.status) {
				case 200:
				case 201:
					result = await response.json();
					break;
				default:
					console.log(`🚨 The backend responded with status ${response.status}.`);
					console.log(`URL: ${url}`);
					console.log(`options:`, options);
					break;
			}
			return result;
		};

// This is the function we're going to call.
const sendRequest = generateSendRequest(ROOT_URL, API_KEY);

const getItems = async itemType => {
	const items = await sendRequest("GET", itemType);
	return items;
};

// const getItem = async (itemType, itemId) => {
// 	const itemUrl = `${itemType}/${itemId}`; 
// 	const item = await sendRequest("GET", itemUrl);
// 	return item;
// };
const getItem = async (itemType, itemId) => {
	const items = await getItems(itemType);
	const [item] = items.filter(item => item.id === itemId);
	return item;
};

const addItem = (itemType, data) => {
	const result =  sendRequest("POST", itemType, data);
	return result;
};

const updateItem = (itemType, itemId, data) => {
	const itemUrl = `${itemType}/${itemId}`; 
	const result = sendRequest("PUT", itemUrl, data);
	return result;
};

const deleteItem = (itemType, itemId) => {
	const itemUrl = `${itemType}/${itemId}`; 
	const result = sendRequest("DELETE", itemUrl);
	return result;
};

export { addItem, getItem, getItems, updateItem, deleteItem };
