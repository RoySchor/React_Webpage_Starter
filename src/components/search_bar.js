import React, { Component } from 'react';

// A class-based component as opposed to functional
class SearchBar extends Component {
    render() {
        // To tap into a browser event you must write
        // onNameOfEvent={reference to event handler}
        return <input onChange={(event) => console.log(event.target.value)} />;
    }
    
    
}
// Only exports the search bar component, needed since each file is siloed from one another
// So they need to be connected explicitly somehow
export default SearchBar; 
    
/** 
 * This is a function-based component
const SearchBar = () => {
  return <input />;  // This in JavaScript is React.creatElement(); thus why we need to import React
};
 

    * Naming Conventions: on or handler then name of element watching for event then name of event
    * Example: onInputChange() or handleInputChange
    * Whenever input changes run this or create an arrow function like we did above:
    onInputChange(event) {
        console.log(event.target.value);
    }
 */
