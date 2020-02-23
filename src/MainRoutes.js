import React from 'react';
import { Route, Switch } from "react-router-dom";
import Contact from "./contact/Contact";
import About from "./about/About";
import Home from "./home/Home";

const MainRoutes = (
        <Switch>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
)

export default MainRoutes;
