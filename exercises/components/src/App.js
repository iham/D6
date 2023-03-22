import 'bootstrap/dist/css/bootstrap.css';
import Panel from './Panel';
import Counter from './Counter';

function App() {
  const changeTitle = (evt) => {
    document.title = 'Changed Title';
  }
  return (
    <div className="container mt-5">
      <button onClick={changeTitle} className="btn btn-sm btn-secondary mb-5">Change Title</button>
      <Counter />
      <div className="mb-3">
        <Panel title='Panel 1' collapsed>
          <h3>Cupcakes FTW!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem iste delectus similique quos natus aperiam expedita ipsum libero deleniti asperiores necessitatibus laboriosam, accusantium accusamus nam laborum error omnis eos!</p>
        </Panel>
      </div>
      <div className="mb-3">
        <Panel title='Panel 2' />
      </div>
      <div className="mb-3">
        <Panel title='Panel 3'>
          <h3>Burgers FTW!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem iste delectus similique quos natus aperiam expedita ipsum libero deleniti asperiores necessitatibus laboriosam, accusantium accusamus nam laborum error omnis eos!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem iste delectus similique quos natus aperiam expedita ipsum libero deleniti asperiores necessitatibus laboriosam, accusantium accusamus nam laborum error omnis eos!</p>
        </Panel>
      </div>
    </div>
  );
}

export default App;
