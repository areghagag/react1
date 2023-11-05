import { useState } from 'react';

 function AgeCounter() {
  const [age, setAge] = useState(21);

  function increment() {
    setAge(a => a + 1);
  }
  function increment3() {
    setAge(a => a + 3);
  }


  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment3();
        
      }}>+3</button>
      <br/>
      <br/>
      
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}
export default AgeCounter;