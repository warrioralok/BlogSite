import { useEffect } from "react";
import { updateApi } from "./Services/PostApi"

function App() {

  const getData = async () =>{
    const response = await updateApi();
    console.log(response);
  }
  
  useEffect(() =>{
      getData();
  },[])
  return(
    <h1>Rect CURD Operation</h1>
  )
}

export default App
