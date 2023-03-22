import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    }
  }
  render() {
    const { firstName, lastName } = this.state; 
    return (
      <div>
        <div className="mb-3">
          <label htmlFor="firstName" className='form-label'>First Name:</label>
          <input type="text" className='form-control' name="firstName" id="firstName" onChange={(evt) => this.setState({firstName: evt.target.value})}/>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className='form-label'>Last Name:</label>
          <input type="text" className='form-control' name="lastName" id="lastName" onChange={(evt) => this.setState({lastName: evt.target.value})} />
        </div>
      </div>
    );
  }
}

export default Input;