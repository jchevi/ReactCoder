import { useState } from "react"
import React from "react"
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"

export default function App() {
  const [contador, setContador] = useState (0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <>
      <Header contador={contador} />
      <ItemListContainer nombre="Ricardo" />
      <button onClick={sumar}>summar</button>
      <button onClick={restar}>restar</button>
      <Footer />
    </>
  );
}