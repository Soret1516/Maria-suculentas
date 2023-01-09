import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hiperico from '../assets/Img/hiperico.jpg'
import melisa from '../assets/Img/melisa.jpg'
import lavanda from '../assets/Img/lavanda.jpg'

export function Products() {
const products = [
  {
    image: hiperico,
    name:'Hiperico', 
  genero:'Masculino', 
  Ref: 'PLANT001', 
  Tamaño: '1 metro',
   cantidad: '3', 
   descripcion:'El hipérico alivia los síntomas de la depresión leve o moderada y también es útil en casos de trastorno de espectro autista, ansiedad o agotamiento'
  },

  {
    image: melisa,
    name:'Melisa', 
  genero:'Femenino', 
  Ref: 'PLANT002', 
  Tamaño: '15 - 70 cm de alto',
   cantidad: '2', 
   descripcion:'Antidepresiva, estimulante y calmante, la melisa levanta el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico.'
  },

  {
    Image: lavanda,
    name:'Lavanda', 
  genero:'Femenino', 
  Ref: 'PLANT003', 
  Tamaño: '70 cm de alto',
   cantidad: '4', 
   descripcion:'Con sus propiedades calmantes y sedantes, la lavanda es apropiada para el tratamiento de la angustia, estrés e impresiones fuertes'
  }


]

  return (
    <div className= 'd-flex'>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {hiperico} />
      <Card.Body>
        <Card.Title>Hiperico</Card.Title>
        <Card.Text>
          <b>Sexo: </b> Masculino <br />
          <b>Referencia: </b>PLANT001 <br />
          <b>Tamaño: </b> Puede alcanzar un metro de alto <br />
          <b>Cantidad: </b> 3 <br />
          <b>Descripcion: </b>El hipérico alivia los síntomas de la depresión leve o moderada y también es útil en casos de trastorno de espectro autista, ansiedad o agotamiento <br />
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {melisa} />
      <Card.Body>
        <Card.Title>Melisa</Card.Title>
        <Card.Text>
          <b>Sexo: </b> Femenino <br />
          <b>Referencia: </b>PlANT002 <br />
          <b>Tamaño: </b>15 - 70 cm de alto<br />
          <b>Cantidad: </b> 2 <br />
          <b>Descripcion: </b>Antidepresiva, estimulante y calmante, la melisa levanta el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico. <br />
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

