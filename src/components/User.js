import { useState } from "react";


const User = ({name}) => {
    const [count] = useState(0)
    const [count2] = useState(2)
  return (
    <div className="outer">
      <h1>{name}</h1>
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>ds514@hotmail.com</h2>
      <h3>Faridabad</h3>
    </div>
  );
};

export default User;
