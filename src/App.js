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

 // const [products,setProducts] = useState(productsArray)

  useEffect(() => {
    if(!localStorage.getItem('products')) {
      localStorage.setItem('products',JSON.stringify(products))

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
