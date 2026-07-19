 import { useEffect, useState} from "react";
 import api from "./services/api";

 function App() {
  const [ message, setMessage ] = useState("");

  useEffect(() => {
    api.get("/api/message").then((response) => {
      setMessage(response.data.message);
    }).catch((err) => {
      console.error(err);
    })
  }, [])
return (
<div>
  <h1> React and Express Integration</h1>
  <p>{message}</p>
</div>
  
)

 }
 export default App;
