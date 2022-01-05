import React from 'react';
import ReactDOM from 'react-dom';

// if its a file we write we need to write a file reference as opposed to what we did above^
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDT-pvzAYs1Z9QBMADdI_Qw48wdGLkJAUw';

// Create a new component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));