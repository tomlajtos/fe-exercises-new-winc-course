- Functionality #1:   
	- user should be able to choose any drink that is shown in the `<DrinkList />` component. 
	- use event handlers and `useState` to register the users choice

	- state: `userDrink` setState: `setUserDrink` &rArr; in `<App/>`    
		(track it here since it affects	`<DrinkSearch/>` and `<DrinkChoice/>`
	- pass `setUserDrink` to `<DrinkSearch/>` &rArr; it has the `<DrinkList/>`

- Functionality #2:
	- reseting the user's choice with a dedicated button

	- update and use the `<Button />` component

- Functionality #3:
	- implement search function
	- extend the `<TextInput/>` and  `<DrinkSearch/>` components
	- write filter function and use it as __drinks prop__ instead of __availableDrinks__
