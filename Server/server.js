const express = require("express");
const cors = require("cors");
const app = express();
const port= 3000;

app.use(express.json());


app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:5500"]
}))


app.get("/qwerty", (req, res) => {
  res.json({message: "valencia"})
  console.log("test");
  
})

app.post("/register", (req, res) => {

  console.log(req.body)
  res.json({ message: "Inscription recue" })
  
})

app.post("/login", (req, res) => {

  console.log(req.body)
  res.json({ message: "Connexion recue" })

})

app.listen(port, ()=> {console.log(`server is running`)})
                 
