import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ModalMs} from '../../components/ModalMs';
import defaultImg from '../../assets/Img/Plantanew.png'
import { useState } from 'react';


export function Products(props) {

const productsLS =  JSON.parse(localStorage.getItem('products'))
const [products,setProducts] = useState(productsLS)

const inputs =[
  {name: 'name',type: 'text', label: 'Nombre'},
  {name: 'genero',type: 'text', label: 'Sexo'},
  {name: 'Referencia =',type: 'text', label: 'Referencia'},
  {name: 'tamaño',type: 'text', label: 'tamaño'},
  {name: 'cantidad',type: 'number', label: 'Cantidad'},
  {name: 'descripcion',type: 'text', label: 'Descripcion'},
]



const saveProduct = () => {
  const productsTemp =[...products]
  const newProduct ={}
  inputs.forEach(inp =>{
    newProduct [inp.name] = document.getElementById(inp.name).value 
  })
  productsTemp.push({...newProduct, image: defaultImg})
  localStorage.setItem('products',JSON.stringify(productsTemp))
  setProducts(productsTemp)
}


  return (
    <div>
      <h2 className= 'text-center'>Productos</h2> <br />


    <ModalMs 
    heading={'agregar productos'}
    btnText ={'Agreagar productos'}
    inputs= {inputs}
    btn1Text= {'Cancelar'}
    btn2Text={'Guardar'}
    btn2Method={saveProduct}
     />
          <Container>
        <Row>
        {
        products.map((plantas,i) => {
    return <Col key={i}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {plantas.image} />
      <Card.Body>
        <Card.Title>{plantas.name}</Card.Title>
        <Card.Text>
          <b>Sexo: </b> {plantas.genero} <br />
          <b>Referencia: </b>{plantas.Ref} <br />
          <b>Tamaño: </b> {plantas.tamano} <br />
          <b>Cantidad: </b> {plantas.cantidad} <br />
          <b>Descripcion: </b>{plantas.descripcion}<br />
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        })
      }
        </Row>
      </Container>
    </div>
  );
}

