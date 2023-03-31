import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import InputZahl from './components/InputZahl';
import OutputGewonnen from './components/OutputGewonnen';
import RandomNumberGenerator from './controller/RandomNumberGenerator';

const App = props => {
  // eslint-disable-next-line
  const [maxZahl, setMaxZahl] = useState(10);
  const [zufallsZahl, setZufallsZahl] = useState(RandomNumberGenerator(maxZahl));
  console.log(zufallsZahl);
  const [versuche, setVersuche] = useState(0);
  const [gewonnen, setGewonnen] = useState(false);
  const [gespielteSpiele, setGespielteSpiele] = useState(0);

  const vergleicheZahlen = (gerateneZahl) => {
    setVersuche(versuche+1);
    if (gerateneZahl === zufallsZahl) {
      console.log('gewonnen!');
      setGewonnen(true);

    }
  }

  const resetGame = () => {
    setZufallsZahl(RandomNumberGenerator(maxZahl));
    setVersuche(0);
    setGewonnen(false);
    setGespielteSpiele(gespielteSpiele+1);
  }
  
  return (
    <div className="container">
      <h1>Zufallszahl erraten ...</h1>
      {(gespielteSpiele > 0) &&
        <h3>{gespielteSpiele} Spiel{(gespielteSpiele > 1)?'e':''} bereits gespielt</h3>
      }
      {!gewonnen &&
      <InputZahl 
        versuche={versuche}
        vergleicheZahlen={vergleicheZahlen}
        minZahl={1}
        maxZahl={maxZahl}
        gespielteSpiele={gespielteSpiele} />
      }
      {gewonnen &&
        <OutputGewonnen versuche={versuche} resetGame={resetGame} />
      }
    </div>
  );
}

export default App;
