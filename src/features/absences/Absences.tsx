
import { Console } from 'console';
import React, { useEffect, useState } from 'react';  
import { Alert, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
 
import AbsencesTable from '../../components/AbsencesTable';
import { getAbsencesList, getMembersList } from './absencesSlice';


export function Absences() {

  const dispatch = useAppDispatch();

  const filter = () => {
    console.error('test filter');
  };

  useEffect(() => {
    
   dispatch(getAbsencesList());
   dispatch(getMembersList());
  }, [dispatch]);

  const {
    absences,
    loading,
    error,
  } = useAppSelector((state) => state.absencesReducer);
  
  return (
     <div>
      <Card>
      <Card.Header>Filter <i></i></Card.Header>
      <Card.Body>
       
      <Form>
      <Row>
        <Col>
        <label>Start Date :</label>
          <Form.Control type="date" id="StartDate" placeholder="Start Date" />
        </Col>
        <Col>
        <label>End Date :</label>
          <Form.Control type="date" id="EndDate" placeholder="End Date" />
        </Col>
        <Col>
        <label>Vacation Type :</label>
        <Form.Select aria-label="Vacation Type">
        <option value="all">All</option>
        <option value="vacation">vacation</option>
        <option value="sickness">sickness</option>
    </Form.Select>
        </Col>
      </Row>
      <br />
      <Row> 
        <Col> 
        </Col>
        <Col>
        <Button variant="primary" onClick={filter}>Filter</Button>
        </Col>
        <Col>
 
        </Col>
      </Row>
    </Form>

      </Card.Body> 
    </Card>
      <br></br>
      <Card>
      <Card.Header>Data <i></i></Card.Header>
      <Card.Body>
      {error &&  <Alert variant='danger'>Data is loading</Alert> }
      {loading ? (
       <Spinner animation="border" role="status">
       <span className="visually-hidden">Loading...</span>
     </Spinner>
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
