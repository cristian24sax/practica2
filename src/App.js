import './app.css'
import { NavBar } from "./components/navbar/NavBar";
import { Info } from "./components/info/Info";
import { Companies } from './components/companies/Companies';
import { Features } from './components/features/Features';
import { CardCompanies } from './components/cardsCompanies/CardCompanies';

function App() {
  return (
    <div className="App" >
        <div className="container-main">
          <NavBar/>
          <Info/>
          <Companies/>
        </div>
        <div className='features'>
          <Features/>
          <CardCompanies/>
          <h1>asdadas</h1>
          <h1>asdadas</h1>
          <h1>asdadas</h1>
          <h1>asdadas</h1>
        </div>
    </div>
  );
}

export default App;
