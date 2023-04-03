import logo from './logo.svg';
import './App.css';

const age = 16;

function App() {
  return (
    <> {/* <> its mean root*/}
    
        <ul>
          <li>Applesauce</li>
          { age > 15 && <li>Brussels Sprouts</li> }
          { age > 20 && <li>Oysters</li> }
          { age > 25 && <li>Grappa</li> }
        </ul>
    </>
  );
}

export default App;
//adsdaasdasdsdaads
