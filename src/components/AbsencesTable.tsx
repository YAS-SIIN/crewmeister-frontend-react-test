import React from 'react'
import { Alert } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'; 
import { Absence } from '../utils/models';

const AbsencesTable = (data: any) => {
debugger
  return (  
    <>
    <Table className="table" striped bordered hover>
        <thead>
            <tr>
                <th scope='col'>ID</th> 
                <th scope='col'>admitterNote</th> 

            </tr>
        </thead>
        <tbody>
        {data === undefined || data.data === undefined || data.data === null || data.data.length === 0 ? ( 
      <tr>
      <td colSpan={2}> <Alert variant='danger'>Data is empty</Alert> </td>
  </tr>
      ) : (
        data.data.map((item: Absence) => (
                <tr>
                    <td>{item.id} </td>
                    <td>{item.admitterNote} </td>
                </tr>
            ))
            )}
        </tbody>
    </Table>

    </>
  ) 
}

export default AbsencesTable