
import { ProductForm } from "./ProductForm"
import { Products } from './Products'

export function Main(props) {
  const page = props.page

  if(page === 'productos') {
    return <Products/>
  } else if(page === 'clientes') {
    return <h2>Clientes</h2>
  } else if(page === 'proveedores') {
    return <h2>Proveedores</h2>
  } else {
    return <h2>Inicio</h2>
  }
}