
import express from "express";
import { json } from "stream/consumers";
import { filData } from "./models/models";
 
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
 
/**
 * service method to retrieve test data
 * @returns hello
 */
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello" });
});
  
/**
 * service method to retrieve absences data
 * @returns absences list
 */
app.post('/api/getAbsences', (req, res) => {
  console.log('body is ',req.body);
    var databody:filData = req.body;
 
    data.absences().then((datalist) => {
      if (!(databody.startDate === '')) {
        console.log('start date filter');
        datalist = datalist.filter(absence => absence.startDate >= databody.startDate);
      }
      if (!(databody.endDate === '')) {
        console.log('end date filter');
        datalist = datalist.filter(absence => absence.endDate <= databody.endDate);
      }
      if (!(databody.type === '' || databody.type === 'all')) {
        console.log('vacation type filter');
        datalist = datalist.filter(absence => absence.type === databody.type);
      }
        res.send(datalist);
    });
});


/**
 * service method to retrieve members data
 * @returns members list
 */
app.post('/api/getMembers', (req, res) => {
  console.log('body is ',req.body);
  data.members().then((datalist) => {
      res.send(datalist);
  });
});


/**
 * service method to retrieve a record of absence
 * @param id - id of absence
 * @returns absence
 */
app.get('/api/getAbsence/:id', (req, res) => {
  data.absences().then((datalist) => {
      const item = datalist.find(absence => absence.id === parseInt(req.params.id));
      if(item){
          res.send(item);
      } 
  });
});


/**
 * service method to retrieve a record of member
 * @param id - id of member
 * @returns member
 */
app.get('/api/getMember/:id', (req, res) => {
    data.members().then((datalist) => {
        const item = datalist.find(member => member.userId === parseInt(req.params.id));
        if(item){
            res.send(item);
        } 
    });
});
 
