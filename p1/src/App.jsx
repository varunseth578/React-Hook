//UseRef

import { useEffect,useRef, useState } from "react";

function App(){
  const [incomeTax,setIncome]=useState(2000);
  const divRef = useRef();

  useEffect(()=>{
    setTimeout(() => {
      divRef.current.innerHTML = 10
    },5000);
    },[])

    
    return (
      <div>
        hii <div ref={divRef}>{incomeTax}</div> 
      </div>
    )
  }


  export default App;