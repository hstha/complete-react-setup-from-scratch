import React from 'react';

import Outside from "../container/Outside";
import Inside from './container/Inside';

import './App.css';

const App = () => (
    <div className="container">
        <h1>Hello World, React!</h1>
        <Outside />
        <Inside />
    </div>
)

export default App;