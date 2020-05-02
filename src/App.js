import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from './home';
import PizzaForm from './pizzaform';
import './App.css'
const App = () => {
  return (
    <>
    <div className="nav">
     <NavLink to ='/' >Home</NavLink>
     <NavLink to ='/pizza'> Order Pizza</NavLink>
    </div>
    
    <Route path='/pizza' ><PizzaForm /></Route>
    <Route exact path='/'><Home /></Route>
    </>
  );
};
export default App;
