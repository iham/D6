// import './App.css';
import Input from './Input';
import Output from './Output';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';

function App () {

  return (
    <div className='container'>
      <h1>Hello ...</h1>
      <Counter count={5}/>
      {/* <Input />
      <Output /> */}
    </div>
  );
}

export default App;
