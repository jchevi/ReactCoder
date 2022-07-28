import React from 'react';
import CartWidget from './CartWidget';

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="" className="nav-logo" />
        <h1>MercadoSneakers</h1>
        <ul>
          <li><a href="#">link 1</a></li>
          <li><a href="#">link 2</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
