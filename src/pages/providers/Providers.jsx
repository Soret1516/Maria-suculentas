import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ModalMs} from '../../components/ModalMs';
import defaultImg from '../../assets/Img/Usuario.png'
import { useState } from 'react';


export function Providers(props) {

const providersLS =  JSON.parse(localStorage.getItem('providers'))
const [providers,setProveedores] = useState(providersLS)

const inputs =[
  {name: 'name',type: 'text', label: 'Nombre'},
  {name: 'nit',type: 'text', label: 'Nit'},
  {name: 'direccion',type: 'text', label: 'Direccion'},
  {name: 'telefono',type: 'text', label: 'Numero de telefono'},
  {name: 'email =',type: 'email', label: 'Correo'},
  {name: 'barrio',type: 'number', label: 'barrio'},
  {name: 'descripcionEmpresa',type: 'text', label: 'Descripcion de la Empresa'},
  {name: 'descripcionProducto',type: 'text', label: 'Descripcion del Producto'},
  
  
]



const saveProvider = () => {
  const providersTemp =[...providers]
  const newProvider ={}
  inputs.forEach(inp =>{
    newProvider [inp.name] = document.getElementById(inp.name).value 
  })
  providersTemp.push({...newProvider, image: defaultImg})
  localStorage.setItem(providers,JSON.stringify(providersTemp))
  setProveedores(providersTemp)
}


  return (
    <div>
      <h2 className= 'text-center'>Proveedores</h2> <br />


    <ModalMs 
    heading={'Agregar proveedor'}
    btnText ={'Agreagar proveedor'}
    inputs= {inputs}
    btn1Text= {'Cancelar'}
    btn2Text={'Guardar'}
    btn2Method={saveProvider}
     />
          <Container>
        <Row>
        {
        providers.map((prov,i) => {
    return <Col key={i}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {prov.image} />
      <Card.Body>
        <Card.Title>{prov.name}</Card.Title>
        <Card.Text>
          <b>Nit: </b> {prov.nit} <br />
          <b>email: </b>{prov.email} <br />
          <b>Direccion: </b> {prov.direccion} <br />
          <b>Producto: </b> {prov.producto} <br />
          <b>Descripcion de producto: </b>{prov.descripcionProducto}<br />
          <b>Descripcion de Empresa: </b>{prov.descripcionEmpresa}<br />
          <b>Telefono: </b> {prov.telefno} <br />
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

