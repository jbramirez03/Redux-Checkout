<h1 align="center">Redux-Checkout</h1> 
  
[LinkedIn]: https://www.linkedin.com/in/jason-barrera-ramirez-b2a473204/
![license-badge](https://img.shields.io/badge/License-MIT-blueviolet)
![followers](https://img.shields.io/github/followers/jbramirez03?style=social)

[mit]: https://choosealicense.com/licenses/mit/

## Summary

This is a Full-Stack application that utilizes Redux in order to manage the state of a cart with Stripe.js implemented in the Front-end.
With items in the store and the categories for those items being saved in a database, with GraphQl making calls to the database to retrieve product and user information.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Challenges](#challenges)
- [Technologies](#technologies)
- [Future development](#future-development)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)
- [Link](#link)

## Usage

In order to checkout a set of items you must first create a user account, once you see the option to add items in a cart they will display in the top right corner. Once you decide you would like to checkout you can click on checkout and a total of all the items and the total price for your order will be displayed as well as a form to input a payment method.

## Functionality

## Credits

Jason Barrera-Ramirez<br>
[<img aling="left" width="26px" alt="LinkedIn" src="https://user-images.githubusercontent.com/82244776/128110957-497edff3-59dc-41d6-89bc-be7570e441fe.png">][linkedin]<br>

## License

This Project is covered by the [MIT] license

## Challenges

The main challenge for this application was utilizing Redux in order to create a global state that is accessible to any component in the ui as well as anywhere in the application. The next big challenge found with this project was getting the store created with an initial state for each state that was to be managed.

## Technologies

[<img align="left" width="26px" alt="javascript" src="https://user-images.githubusercontent.com/82244776/132110201-fd810d53-561a-490f-a690-1735d4479281.png">][javascript]
[<img align="left" width="26px" alt="CSS" src="https://user-images.githubusercontent.com/82244776/132110242-a351f140-471c-4447-a513-91c2b8a166d7.png">][css]
[<img align="left" width="26px" alt="html" src="https://user-images.githubusercontent.com/82244776/132110258-65db95d8-f35b-4a2d-a091-8051a6b6f4f2.png">][html]
[<img align="left" width="26px" alt="nodejs" src="https://user-images.githubusercontent.com/82244776/134751947-5908a635-9d69-4dc7-8c4c-aeb9ea0fce66.png">][node]
[<img align="left" width="28px" alt="mysql" src="https://user-images.githubusercontent.com/82244776/137418230-eaf9e0c6-8be9-49e3-93c8-2246d4e7db42.png">][mongodb]
[<img align="left" width="26px" alt="heroku" src="https://user-images.githubusercontent.com/82244776/132110346-720c197f-d193-4c6f-b84d-e9dc0420bba9.png">][heroku]
[<img align='left' width='26px' alt='react' src='https://user-images.githubusercontent.com/82244776/137604115-dcc195ed-27dd-4fad-adf1-2fb635ae074e.png'>][react]
[<img align='left' width='26px' alt='bootstrap' src='https://user-images.githubusercontent.com/82244776/139557061-3fc54b2b-1db1-48a8-b699-8259d113ff21.png'>][bootstrap]
[<img align='left' width='26px' alt='graphql' src='https://user-images.githubusercontent.com/82244776/139560352-83ec0210-522a-47a6-b0e5-2ef317f6921f.png'>][graphql]
[<img align='left' width='26px' alt='graphql' src='https://user-images.githubusercontent.com/82244776/140623986-34f26dac-a60b-4210-9144-80ae20f93db5.png'>][redux]
[<img align="left" width="26px" alt="github" src="https://user-images.githubusercontent.com/82244776/132110367-f5e3b9f5-b3cb-49c1-be7c-aded0df1b8c1.png">][github]<br><br>

[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[github]: https://docs.github.com/en
[react]: https://reactjs.org/docs/getting-started.html
[node]: https://nodejs.org/en/docs/
[mongodb]: https://www.mongodb.com/
[heroku]: https://devcenter.heroku.com/categories/reference
[bootstrap]: https://getbootstrap.com/docs/4.1/getting-started/introduction/
[graphql]: https://graphql.org/
[redux]: https://redux.js.org/

## Features

The main feature for this application is the ability to keep track of the amount of items you select in a cart which is based on the state in the redux store. The changes to a cart are made by calling an action that is defined in the reducer which could be as simple as adding an item, removing or counting the total items.

## Future Development

The next big feature to be added to this site is being able to keep track of what is your most viewed item or if you would like to save an item to look at a later time in order to keep track of what you like from the store.

## How to Contribute

Fork the Repo and make a pull request for code to be reviewed and considered for merge to main branch.

## Questions

If there are any questions about the project get in contact with me at my [Email](mailto:jason1287712@gmail.com)

## Link

This is the link to the live site on
