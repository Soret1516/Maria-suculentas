import{useState} from "react"
import { Header } from './components/Header';
import { Main } from './components/Main';
import './App.css';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const  [page, setPage] = useState('inicio')

  return (
    <div>
    <Header setPage={setPage}/>
    <Main page={page}/>
    <Footer/>
    </div>
  );
}

export default App;
