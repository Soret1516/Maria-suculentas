import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ModalMs} from '../../components/ModalMs';
import defaultImg from '../../assets/Img/Usuario.png'
import { useState } from 'react';


export function Clients(props) {

const clientsLS =  JSON.parse(localStorage.getItem('clients'))
const [clients,setClients] = useState(clientsLS)

const inputs =[
  {name: 'name',type: 'text', label: 'Nombre'},
  {name: 'document',type: 'text', label: 'Documento'},
  {name: 'email =',type: 'email', label: 'Correo'},
  {name: 'direccion',type: 'text', label: 'Direccion'},
  {name: 'barrio',type: 'number', label: 'barrio'},
  {name: 'telefono',type: 'text', label: 'Numero de telefono'},
]



const saveClient = () => {
  const clientsTemp =[...clients]
  const newClient ={}
  inputs.forEach(inp =>{
    newClient [inp.name] = document.getElementById(inp.name).value 
  })
  clientsTemp.push({...newClient, image: defaultImg})
  localStorage.setItem('clients',JSON.stringify(clientsTemp))
  setClients(clientsTemp)
}


  return (
    <div>
      <h2 className= 'text-center'>Clientes</h2> <br />


    <ModalMs 
    heading={'Agregar cliente'}
    btnText ={'Agreagar cliente'}
    inputs= {inputs}
    btn1Text= {'Cancelar'}
    btn2Text={'Guardar'}
    btn2Method={saveClient}
     />
          <Container>
        <Row>
        {
        clients.map((cliente,i) => {
    return <Col key={i}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {cliente.image} />
      <Card.Body>
        <Card.Title>{cliente.name}</Card.Title>
        <Card.Text>
          <b>Documento: </b> {cliente.documentos} <br />
          <b>Correo: </b>{cliente.email} <br />
          <b>Direccion: </b> {cliente.direccion} <br />
          <b>Barrio: </b> {cliente.barrio} <br />
          <b>Numero de telefono: </b>{cliente.telefono}<br />
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

