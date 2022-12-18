import React from 'react'
import { Alert } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'; 
import { Absence } from '../utils/models';

/**
 * method to get period time
 * @returns date and time 
 */
const getPeriod = (startDate: string, endDate: string) => {
  debugger
    // To set two dates to two variables
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);
 
  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();
    
  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return `${Difference_In_Days + 1} Day`;
}

const AbsencesTable = (data: any) => {
  

debugger
  return (  
    <>
    <Table className="table" striped bordered hover>
        <thead>
            <tr>
                <th scope='col'>ID</th> 
                <th scope='col'>Member name</th> 
                <th scope='col'>Type of absence</th> 
                <th scope='col'>Period</th> 
                <th scope='col'>Member note</th> 
                <th scope='col'>Status</th>
                <th scope='col'>Admitter note</th>

            </tr>
        </thead>
        <tbody>
        {data === undefined || data.data === undefined || data.data === null || data.data.length === 0 ? ( 
      <tr>
      <td colSpan={7}> <Alert variant='danger'>Data is empty</Alert> </td>
  </tr>
      ) : (
        data.data.map((item: Absence) => (
                <tr>
                    <td>{item.id} </td>
                    <td>{item.userId} </td>
                    <td>{item.type} </td>
                    <td>{getPeriod(item.startDate, item.endDate)} </td>
                    <td>{item.memberNote} </td>
                    <td>{item.confirmedAt ? 'Confirmed' : 'Rejected'} </td>
                    <td>{item.admitterId ? item.admitterNote : ''} </td>
                </tr>
            ))
            )}
        </tbody>
    </Table>

    </>
  ) 
}

export default AbsencesTable