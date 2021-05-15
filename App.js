import React, {useState} from "react";

const App =()=>{
  const purple = "#8e44ad";
  const [bg,setBg] = useState(purple);
  const [name,setname] = useState('Click me');

  const bgChange=()=>{
    
    const purple="#d2dbdd";
    setBg(purple);
    setname("WOW 😉");
    
  };
  const bgBack=()=>{
    
    const pup ="#8e44ad";
    setBg(pup);
    setname("oouch 🤷‍♀️");
    
  };
  
  return (
    <>
    <div style={{backgroundColor : bg}}>
      <button className={"but"} onClick = {bgChange} onDoubleClick={bgBack}>{name}</button>
    </div>
    </>
  );
}
export default App;
