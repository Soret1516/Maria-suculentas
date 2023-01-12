import{ useEffect,useState} from "react"
import { Header } from './components/Header';
import { Main } from './pages/main/Main';
import './App.css';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import hiperico from './assets/Img/hiperico.jpg'
import melisa from './assets/Img/melisa.jpg'
import lavanda from './assets/Img/lavanda.jpg'
import verbena from './assets/Img/verbena.jpg'
import clientsImg from'./assets/Img/Usuario.png'
import providerImg from './assets/Img/Usuario.png'

function App() {
  const  [page, setPage] = useState('inicio')

  const products= [
    {
      image: hiperico,
      name:'Hiperico', 
    genero:'Masculino', 
    Ref: 'PLANT001', 
    tamano: '1 metro',
     cantidad: '3', 
     descripcion:'El hipérico alivia los síntomas de la depresión leve o moderada y también es útil en casos de trastorno de espectro autista, ansiedad o agotamiento'
    },
  
    {
      image: melisa,
      name:'Melisa', 
    genero:'Femenino', 
    Ref: 'PLANT002', 
    tamano: '15 - 70 cm de alto',
     cantidad: '2', 
     descripcion:'Antidepresiva, estimulante y calmante, la melisa levanta el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico.'
    },
  
    {
      image: lavanda,
      name:'Lavanda', 
    genero:'Femenino', 
    Ref: 'PLANT003', 
    tamano: '70 cm de alto',
     cantidad: '4', 
     descripcion:'Con sus propiedades calmantes y sedantes, la lavanda es apropiada para el tratamiento de la angustia, estrés e impresiones fuertes'
    },

    {
      image: verbena,
      name:'Verbena', 
    genero:'Femenino', 
    Ref: 'PLANT004', 
    tamano: '1mtr de alto',
     cantidad: '5', 
     descripcion:'La verbena es una hierba tónica reconstituyente del sistema nervioso, beneficiosa para la digestión y útil para aliviar la tensión, cefaleas, depresión, agotamiento y estrés.'
    }
  
  
  ]

  const clients= [
  {
    image: clientsImg,
    nombre: 'Dayana carolina',
    documentos:'1127874625',
    email:'Dayana@hotmail.com',
    direccion:'calle 45 #45-45',
    barrio:'villa hermosa',
    telefono:'3128934887',
  },

  {
    image: clientsImg,
    nombre: 'Lola mento',
    documentos:'1127856275',
    email:'lolament044@hotmail.com',
    direccion:'calle 75 #74-64',
    barrio:'Poblado',
    telefono:'31257261748',
  },

  {
    image: clientsImg,
    nombre: 'Leonardo mijares',
    documentos:'11274836849',
    email:'Leo134@hotmail.com',
    direccion:'calle 89 #23-90',
    barrio:'Envigado',
    telefono:'31257386627',
  },

  {
    image: clientsImg,
    nombre: 'Josbert calderon',
    documentos:'11287645278',
    email:'Josbertcladron@hotmail.com',
    direccion:'calle 58 #35-06',
    barrio:'Robledo',
    telefono:'312573461327',
  },

  ]

  const providers =[
    {
      image: providerImg,
      nombre:'AmericaS AUNA ',
      nit:'37628941',
      email:'americasAuna134@hotmail.com',
      direccion:'calle 47 #49-84',
      producto:'Envigado',
      descripcionProducto:'Planta MELISA levanta el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico.',
      descripcionEmpresa:'grupo de salud a nivel regional con cerca de 6000 colaboradores, que cuenta con una red de clínicas',
      telefono:'42479178',
    },

    {
      image: providerImg,
      nombre:'AmericaS AUNA ',
      nit:'37628941',
      email:'americasAuna134@hotmail.com',
      direccion:'calle 47 #49-84',
      producto:'Envigado',
      descripcionProducto:'Planta MELISA levanta el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico.',
      descripcionEmpresa:'grupo de salud a nivel regional con cerca de 6000 colaboradores, que cuenta con una red de clínicas',
      telefono:'42479178',
    }


  ]

 // const [products,setProducts] = useState(productsArray)

  useEffect(() => {
    if(!localStorage.getItem('products')) {
      localStorage.setItem('products',JSON.stringify(products))

    }
    if(!localStorage.getItem('clients')) {
      localStorage.setItem('clients',JSON.stringify(clients))

    }
    if(!localStorage.getItem('providers')) {
      localStorage.setItem('providers',JSON.stringify(providers))

    }
    
    
  })

  return (
    <div>
    <Header setPage={setPage}/>
    <Main page={page}/>
    <Footer/>
    </div>
  );
}

export default App;
