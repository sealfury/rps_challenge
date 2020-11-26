## The RPS Challenge
This is the Rock/Paper/Scissors challenge for week 5 of the Craft Academy boot camp.  We were presented a challenge to design a rock/paper/scissors game, 
in the style of a tech interview, using only previous assignments and official documentation as points of reference.

## Links:
Deployment link: [Rock/Paper/Scissors](https://whs-rps-challenge.netlify.app/) 

## Tested with:
- Cypress for acceptance test
- Jest with Enzyme for component testing
- *testing of the scoring system is a WIP*

## Dependencies:
To run locally you will need to install the packages in the package.json using a package manager for JavaScript.\
On top of the packages from the bootstrap we are also using:
- Cypress
- Enzyme
- Semantic-ui-react
- React

## Acknowledgements:
- [The Cooper Challenge](https://github.com/sealfury/cooper_client)
- [Semantic UI Documentation](https://react.semantic-ui.com/)
- [MDN JS web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Improvement plans
- Move Separate Components to import into `App.jsx`
    - `Grid`
    - `Message`
- Write component tests for `Grid` and `Message`
- Functionality
    - Improve `checkForVictory` function
    - Add function to flash score upon change
- Finalize mock for `computerChoice` in Cypress test

## License
This app is open source software licensed as MIT.