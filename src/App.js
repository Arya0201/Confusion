
import './App.css';

import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
           
             <NavbarBrand href='/'>ristorante con fusion </NavbarBrand>
           
        </Navbar>
      </div>
    )
  }
}


