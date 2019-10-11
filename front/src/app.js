import React from 'react';
import RouterComponent from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./component/Navbar/menu";

const App = () => {
    return (
        <div className="App">
            <Menu/>
            <RouterComponent/>
        </div>
    );
};

export default App;
