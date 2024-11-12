import { useEffect, useState } from 'react';
//import { createUser } from './api/api';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Registration = () => {
  const [user, setUser] = setState([]);


  return (
    <div style={{marginLeft: '600px'}}>
      <h1>REGISTRATION</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstname" placeholder="First Name" />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Last Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="age" placeholder="Age" />
          </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Registration;