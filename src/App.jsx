import './App.css';
import {Typography,Button} from "@mui/material"

const App = ()=>{
  return (
    <div>
          <Typography variant="h1" component={"h6"} sx={{color:"green"}}>Hello World</Typography>
          <br>
          </br>
          <Button>Submit</Button>
          <Button variant="contained" sx={{color:"red",background:"pink",border:"dotted"}}>Container</Button>
          <Button variant="contained" sx={{background:"green"}}>Container</Button>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <button>NormalSubmit</button>
    </div>
  )
}

export default App
