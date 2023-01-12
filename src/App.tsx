import './App.css'
import sofa from './assets/sofa-image.png';
import icon360 from './assets/360-vector.png';

function App() {

  return (
    <div className="App">
      <div>
        <img src={icon360}/>
        <img src={sofa} />
      </div>
      <div>
        <span>código</span>
        <h1>Sofá Margot II - Rosé</h1>
        <span>R$ 4.000</span>
        <button>adicionar á cesta</button>
      </div>
    </div>
  )
}

export default App
