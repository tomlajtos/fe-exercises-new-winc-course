import * as io from "./io.js";

const itemTypes = {
    customers: ["name", "email"],
    flavours: ["name", "price"],
    orders: ["customerId", "date", "status", "orderDescription"],
};

const flavourLowestPrice = 0.5;
const flavourHighestPrice = 10;
const flavourNameMinimumLength = 2;
const customerNameMinimumLength = 2;
const orderDescriptionMinimumLength = 8;

// Some proxies so events.js does not have to talk to io.js
const getItem = io.getItem;
const getItems = io.getItems;

//Flavour validation
//validation helper - flavour
const getFlavours = async() => await io.getItems("flavours");

//validation helper - flavour
const getFlavourNames = async(filterById = -1) => {
    let flavours = await getFlavours();
    if (filterById > 0) {
        flavours = flavours.filter(flavour => flavour.id !== filterById);
    }
    return flavours.map(flavour => flavour.name);
};

//validation helper - flavour
const isANumber = value => {
    const converted = parseInt(value);
    return !Number.isNaN(converted);
};

//validation helper - flavour
const numberIsInRange = (number, lower, upper) =>
    number >= lower && number <= upper;

//validation helper - flavour | order | customer
const stringHasMinimumLength = (str, length) => str.length >= length;

//validaton helper - flavour | order | customer
const stringConsistsOfLettersOnly = str => {
    // Regular expression, not necessary to know this.
    const re = /^[a-zA-Z\s]*$/;
    return re.test(str);
};

const validateFlavour = async(operation, { name, price, id }) => {
    let errors = [];
    const currentFlavours = await getFlavourNames();

    // Cannot add flavour that already exists.
    if (operation === "add" && currentFlavours.includes(name)) {
        errors.push(`There\`s already a flavour called ${name}`);
    }

    // Cannot change flavour name to one that already exists.
    if (operation === "update") {
        const otherFlavourNames = await getFlavourNames(id);
        if (otherFlavourNames.includes(name)) {
            errors.push(`There\`s already a flavour called ${name}`);
        }
    }

    // Name must be x or more characters
    if (!stringHasMinimumLength(name, flavourNameMinimumLength)) {
        errors.push(
            `The name of an icecream flavour needs to be at least ${flavourNameMinimumLength} characters long`
        );
    } else {
        // Only letters allowed
        if (!stringConsistsOfLettersOnly(name)) {
            errors.push(
                "The name of an icecream flavour can only consist of the letters a to z and spaces in between."
            );
        }
    }

    if (!isANumber(price)) {
        errors.push("The price needs to be a number.");
    } else {
        // Only useful to validate this value when it's a number
        if (!numberIsInRange(price, flavourLowestPrice, flavourHighestPrice)) {
            // Price must be a number
            errors.push(
                `The price of a kilo of icecream needs to be between ${flavourLowestPrice} and ${flavourHighestPrice}.`
            );
        }
    }
    return errors;
};

//CUSTOMER VALIDATION
//validation helper - customer
const getCustomers = async() => await io.getItems("customers");

//validation helper - customer | order
const getCustomerIds = async() => {
    const customers = await getCustomers();
    return customers.map(customer => customer.id);
};

//validation helper - customer | delete customer
const getCustomer = async id => await io.getItem("customers", id);

//validation helper - customer
const getCustomerEmails = async(filterById = -1) => {
    let customers = await getCustomers();
    if (filterById > 0) {
        customers = customers.filter(customer => customer.id !== filterById);
    }
    return customers.map(customer => customer.email);
};

//TODO, await getCustomer, getCustomerEmails, getCustomerIds
const validateCustomer = async(operation, { email, name, id }) => {
	const errors = [];
	const customerEmails = await getCustomerEmails();
	
	//email field cannot be empty
	if (!stringHasMinimumLength(email, 1)) {
		errors.push("Please provide an email address.");
	}
	//must be an email that is not in use
	else if ( operation === "add" && customerEmails.includes(email) || 
			 operation === "update" && customerEmails.includes(email)) {
		errors.push("There is a user registerd with the same email address, please provide a different one.");
	}

	// name must be more than 2 chars
	if (!stringHasMinimumLength(name, 2)){
		errors.push("Your name must be minimum 2 characters long");
	}
	// only spaces and letters allowed
	else if (!stringConsistsOfLettersOnly(name)) {
		errors.push("Onlly letters and spaces are accepted as characters.");
	}
	
	return errors;
};

// ORDER VALIDATION
//validation helper - order
const getOrderStatusList = () => ["unpaid", "paid", "transit", "delivered"];

// validation helper - delete customer
const getOrders = async() => await io.getItems("orders");

// validation helper - delete customer
const getOrder = async id => {
    const orders = await getOrders();
    return orders.find(order => order.id === id);
};

const validateOrder = async(
    _operation, { customerId, date, status, orderDescription }
) => {
    let errors = [];

    // Customer must exist.
    const customerIds = await getCustomerIds();
    if (!customerIds.includes(customerId)) {
        errors.push(`Please select a customer for this order.`);
    }

    // Date is required, validation is too complex for now.
    if (date === "") {
        errors.push("Date is a required field");
    }

    // Status must be one of the valid values.
    if (!getOrderStatusList().includes(status)) {
        errors.push("The given status is not valid.");
    }

    // Order description must be x or more characters.
    if (!stringHasMinimumLength(orderDescription, orderDescriptionMinimumLength)) {
        errors.push(
            `The description of an order needs to be at least ${orderDescriptionMinimumLength} characters long`
        );
    }
    return errors;
};

// VALIDATION BEFORE UPDATING A DB ITEM
const validateAddUpdate = async(operation, itemType, data) => {
    let errors;
    switch (itemType) {
        case "flavours":
            errors = await validateFlavour(operation, data);
            break;
        case "customers":
            errors = await validateCustomer(operation, data);
            break;
        case "orders":
            errors = await validateOrder(operation, data);
            break;
        default:
            errors = ["Incorrect itemType"];
            break;
    }
    return [errors.length > 0, errors];
};

// VALIDATION BEFORE CUSTOMER DELETION
const validateDeleteCustomer = async id => {
    let errors = [];
    //  Customers may only be deleted if there are no orders for them.
    const orders = await getOrders();
    const numberOfOrdersForCustomer = orders.filter(
        order => order.customerId == id
    ).length;
    if (numberOfOrdersForCustomer > 0) {
        const customer = await getCustomer(id);
        errors.push(
            `Customer "${customer.name}" cannot be deleted, they still have ${numberOfOrdersForCustomer} orders.`
        );
    }
    return errors;
};

// VALIDATION BEFORE ORDER DELETION
const validateDeleteOrder = async id => {
    let errors = [];
    //  Orders may only be deleted if they have status "delivered".
    const order = await getOrder(id);

    if (order.status !== "delivered") {
        errors.push(
            "That order cannot be deleted. Only delivered orders can be deleted."
        );
    }

    return errors;
};

// VALIDATION BEFORE DELETING A DB ITEM
const validateDelete = async(itemType, itemId) => {
    let errors = [];
    if (itemType === "customers") {
        errors = await validateDeleteCustomer(itemId);
    }
    if (itemType === "orders") {
        errors = await validateDeleteOrder(itemId);
    }
    return [errors.length > 0, errors];
};

const addItem = (itemType, data) => {
    return io.addItem(itemType, data);
};
const updateItem = (itemType, itemId, data) => {
    return io.updateItem(itemType, itemId, data);
};
const deleteItem = (itemType, itemId) => {
    return io.deleteItem(itemType, itemId);
};

export {
    getItem,
    getItems,
    getCustomerEmails,
    getCustomers,
    getCustomer,
    getOrderStatusList,
    itemTypes,
    addItem,
    updateItem,
    deleteItem,
    validateAddUpdate,
    validateDelete,
};
