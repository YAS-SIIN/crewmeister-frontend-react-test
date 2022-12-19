
import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DataTable from 'react-data-table-component';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { filData } from '../../utils/models';
import { getAbsencesList } from './absencesSlice';


export function Absences() {

  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vacationType, setVacationType] = useState('');

  /**
 * method to get period time
 * @returns date and time 
 */
  const getPeriod = (startDate: string, endDate: string) => {
    // To set two dates to two variables
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return `${Difference_In_Days + 1} Day`;
  }


  /**
 * method to filter data
 * @returns filtered list
 */
  const filter = () => {

    const _filData = new filData();
    _filData.startDate = startDate;
    _filData.endDate = endDate;
    _filData.type = vacationType;

    dispatch(getAbsencesList(_filData));
  };

  const columns = [
    { name: 'Member name', selector: row => row.memberName },
    { name: 'Type of absence', selector: row => row.type },
    { name: 'Period', selector: row => getPeriod(row.startDate, row.endDate) },
    { name: 'Member note', selector: row => row.memberNote },
    { name: 'Status', selector: row => row.confirmedAt ? 'Confirmed' : row.rejectedAt ? 'Rejected' : 'Requested' },
    { name: 'Admitter note', selector: row => row.admitterId ? row.admitterNote : '' },
  ];

  useEffect(() => {

    dispatch(getAbsencesList());
  }, [dispatch]);

  const {
    absences,
    loading,
    error,
  } = useAppSelector((state) => state.absencesReducer);

  return (
    <div>
      <Alert variant="warning">
        <h5>Crewmeister challange test - programmer : Yasin Asadnezhad</h5>
      </Alert>

      <Card>
        <Card.Header>Filter <i></i></Card.Header>
        <Card.Body>

          <Form>
            <Row>
              <Col>
                <label>Start Date :</label>
                <Form.Control type="date" id="StartDate" placeholder="Start Date" onChange={(e) => { setStartDate(e.target.value); }} />
              </Col>
              <Col>
                <label>End Date :</label>
                <Form.Control type="date" id="EndDate" placeholder="End Date" onChange={(e) => { setEndDate(e.target.value); }} />
              </Col>
              <Col>
                <label>Vacation Type :</label>
                <Form.Select aria-label="Vacation Type" onChange={(e) => { setVacationType(e.target.value); }}>
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
          {error && <Alert variant='danger'>There is an error</Alert>}
          {!error && loading ? (
            <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
          ) : (
            <>
              {!error && absences && (<><label>Total absences is: {absences.length}</label> <DataTable columns={columns} data={absences} pagination /></>)}

            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
