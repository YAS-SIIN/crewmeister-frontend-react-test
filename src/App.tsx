import React from 'react'; 
import { Absences } from './features/absences/Absences';
import './App.css';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  pageHeader: {
    color: '#ffc107',
    border: '1px solid', 
    borderRadius: '5px',
    backgroundColor: '#055160',
    height: '40px',
    margin: {
      top: 10,
      right: 0,
      bottom: 10,
    }
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
       <h3 className={classes.pageHeader}>Crewmeister challange test - programmer : Yasin Asadnezhad</h3>  
    
        <Absences />
    </div>
  );
}

export default App;
