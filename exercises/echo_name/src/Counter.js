import React, { useState } from "react";

const Counter = (props) => {
  const initialValue = props.count || 0;
  const [count, setValue] = useState(initialValue);
  return (
    <div>
      {count}
      <button onClick={() => setValue(count + 1)}>+</button>
    </div>
  );
};

export default Counter;