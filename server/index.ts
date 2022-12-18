
import express from "express";
//import { members, absences } from "./api/api";

const PORT = 8080;
  
const app = express();
 
//Read data from json
const data = require('./api/api');

app.use(express.json());
 
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", 'true');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
  });

//Run server using #Yarn Server

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



//Test Rest API
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello" });
});
 
//Get members list
app.get('/api/getMembers', (req, res) => {
    data.members().then((datalist) => {
        res.send(datalist);
    });
});

//Get member
app.get('/api/getMember/:id', (req, res) => {
    data.members().then((datalist) => {
        const item = datalist.find(member => member.userId === parseInt(req.params.id));
        if(item){
            res.send(item);
        } 
    });
});

//Get absences list
app.get('/api/getAbsences', (req, res) => {
    data.absences().then((datalist) => {
        res.send(datalist);
    });
});

//Get absence
app.get('/api/getAbsence/:id', (req, res) => {
  data.absences().then((datalist) => {
      const item = datalist.find(absence => absence.id === parseInt(req.params.id));
      if(item){
          res.send(item);
      } 
  });
});
