import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, FormControl, Card, Col, Container, Row, Image, border } from 'react-bootstrap';
function App() {
  return (
    <div className="App">

      <Navbar bg="white" expand="lg" >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "red" }}>Your are Welcome </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />
      <Row className='landing'>


        <Col>
          <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Your Adress" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder="Your Phone_Number" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary"   type="submit">
              Submit
            </Button>{'                                        '}
            <Button variant="primary"  type="reset">
              reset
            </Button>

            <br />
            <br />
            <Form.Group>
              <Form.File id="exampleFormControlFile1" />
            </Form.Group>

          </Form>
        </Col>
        <Col>
          <div>
            <Image src="image/ch.jpg" thumbnail style={{ marginRight: "10%", width: 400, height: 400, border: "none" }} />
          </div>
        </Col>
      </Row>
      <Card.Footer className="text-muted" bg="drak" variant="drak" >Copyright 2021 GOMYCODE</Card.Footer>
    </div>
  );
}

export default App;
