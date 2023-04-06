import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./routing";

const App = props => {
    return (
        <Router>
            <Routing/>
        </Router>
    );
};


export default App;