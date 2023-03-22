import React from 'react';

const Output = props => {
  const { firstName, lastName } = props;
  return (
    <div>
      <p>Hallo {firstName} {lastName}</p>
    </div>
  )
}


export default Output;


