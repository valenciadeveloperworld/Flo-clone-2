const express = require("express");
const app = express();
const port= 3000;

app.use(express.json());


app.get("/qwerty", (req, res) => {
  res.json({message: "valencia"})
  console.log("test");
  
})

app.get("/regıster", (req, res) => {

  res.json({message: "valencia"})
  
})

app.listen(port, ()=> {console.log(`server is running`)})
                 
