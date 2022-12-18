import React, { useEffect, useState } from 'react';  
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAbsencesList } from './absencesSlice';
 
import AbsencesTable from '../../components/AbsencesTable';
import Pag from '../../components/Paging';
 
export function Absences() {

  const [currentData, setCurrentData] = useState([]);
  const [page, setPage] = useState(1);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    
   // dispatch(getAbsencesList());
  }, [dispatch]);

  const {
    absences,
    loading,
    error: error,
  } = useAppSelector((state) => state.absencesReducer);
 
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = absences.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages =absences.length != 0 ? Math.ceil(absences.length / recordsPerPage) : 1;

  return (
     <div>
      <Card>
      <Card.Header>Filter <i></i></Card.Header>
      <Card.Body>
       
      <Form>
      <Row>
        <Col>
          <Form.Control type="date" placeholder="Date" />
        </Col>
        <Col>
        <Form.Select aria-label="Vacation Type">
        <option value="all">All</option>
        <option value="vacation">vacation</option>
        <option value="sickness">sickness</option>
    </Form.Select>
        </Col>
      </Row>
    </Form>

      </Card.Body> 
    </Card>
      <br></br>
      <Card>
      <Card.Header>Data <i></i></Card.Header>
      <Card.Body>
      {loading ? (
        <label>Data is loading</label>
      ) : (
        <> 
        <label>Total absences is : {absences.length}</label>
        <AbsencesTable data={absences}></AbsencesTable>  
       
        </>
        //<label>Data is test {absences.length} </label>
      )} 
      </Card.Body>
    </Card>  
    </div>
  );
}
