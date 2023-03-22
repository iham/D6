// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ListenDarstellung from './ListenDarstellung';
import Counter from '.counter';

function App() {
  return (
    <div className='container'>
      <h1>2<sup>x</sup></h1>
      <Counter />
      <ListenDarstellung powers={32} />
    </div>
  );
}

export default App;
