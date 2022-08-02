import React from 'react';
import Nav from "./Nav";
import CartWidget from './CartWidget';

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="" className="nav-logo" />
        <h1>MercadoSneakers</h1>
        <span className='material-symbols-outlined'>shopping_cart</span>
        <Nav />
        <CartWidget />
      </nav>
    </header>
  );
}
