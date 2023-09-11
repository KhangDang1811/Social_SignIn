
import Home from './Google/Home';
import SignIn from './Google/SignIn';
import React, { useEffect, useState } from "react";
function App() {
//   const [value,setValue] = useState('')
//   useEffect(()=>{
//     setValue(localStorage.getItem('email'))
// },[])
  return (
    <div className="App">
      <SignIn/>
      {/* <span>{value}</span>
      {
        value ? (
          <Home/>
        ):('')
      } */}
    </div>
  );
}

export default App;
