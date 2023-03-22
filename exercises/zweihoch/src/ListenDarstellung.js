import React from 'react';

class ListenDarstellung extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      powers: 0,
      items: []
    }
  }

  componentDidMount() {
    const powers = this.props.powers || 8;
    const items = [];
    for (let i = 0; i <= powers; i++) {
      items.push(2**i);
    }
    this.setState({ items });
  }
  
  render() {
    const { powers, items } = this.state;
    return (
      <div>
        <input type="number" onChange={(evt) => this.setState({powers: evt.target.value})} value={powers} />
        <table className='table table-dark table-striped table-bordered'>
          <thead>
            <tr>
              <th>Eingabe</th>
              <th>Ausgabe</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item, key) => {
            return (
             <tr key={`ListingDarstellung-${key}`}>
              <td>2<sup>{key}</sup></td>
              <td>{item}</td>
             </tr> 
            )}
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListenDarstellung;