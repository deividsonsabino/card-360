import './App.css'
import sofa from './assets/sofa-image.png';
import sofa360 from './assets/sofa-360.gif';
import icon360 from './assets/360-vector.png';
import iconCross from './assets/cross-vector.png';
import { useState } from 'react';

function App() {
  const [image360, setImage360] = useState(false)



  return (
    <div className="container">
      <div className="image">
        <div>
          {image360 ?
            <img width={449} src={sofa360} />
            :
            <img src={sofa} />
          }
        </div>
        <button className="icon-button" onClick={() => setImage360(!image360)}>
          {image360 ?
            <img src={iconCross} />
            :
            <img src={icon360} />
          }

        </button>
      </div>
      <div className="infos">
        <span className="cod">CÓDIGO: 42404</span>
        <h1 className="title">Sofá Margot II - Rosé</h1>
        <span className="price">R$ 4.000</span>
        <button className="add-button">adicionar á cesta</button>
      </div>
    </div>
  )
}

export default App
