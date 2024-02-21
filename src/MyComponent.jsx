import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();

  const [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Chun li");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toogleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName}>Set Name</button>
      <hr />

      <p>Age : {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <hr />

      <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toogleEmployedStatus}>Toggle Status</button>
      <hr />
    </div>
  );
}

export default MyComponent;
