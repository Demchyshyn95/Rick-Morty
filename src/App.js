import React from "react";
import {Redirect, Route, Switch} from "react-router";

import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Locations from "./components/Locations/Locations";
import MyWatchList from "./components/MyWatchList/MyWatchList";
import Navbar from "./components/Navbar/Navbar";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";


function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={ Home }/>
                <Route path='/characters' exact  component={ Characters }/>
                <Route path='/characters/:id'   component={ SingleCharacter }/>
                <Route path='/episodes'  component={ Episodes }/>
                <Route path='/locations'  component={ Locations }/>
                <Route path='/myWatchList'  component={ MyWatchList }/>
                <Redirect to='/'/>
            </Switch>
        </div>
    );
}

export default App;
