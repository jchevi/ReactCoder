import React from "react"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ItemListContainer nombre="Ricardo"/>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}