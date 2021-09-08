import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import {
  BrowserRouter as 
  
  useHistory,
  
} from "react-router-dom";


const SignUpForm = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [user_password, setPassword] = useState("");

  const userDetails={
    'firstName':firstName,
    'lastName':lastName,
    'username':username,
    'phone':phone,
    'department':department, 
    'user_password':user_password
  }

  // const [Details, setUserDetails] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
  
    // setUserDetails({...userDetails})
    console.log(userDetails);
    const userEndPoint='http://localhost:8000/tkUser/users'
    
    fetch(userEndPoint, {
      method: 'post',
      headers:{
          'Content-Type': 'application/json',
          // 'Content-Type':'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(userDetails),
    })
    .then(res=>{
      return res.json()
    })

.then(data=> {
console.log(data)
})

}
let history = useHistory(); 
      
    
    
  

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Card className="mx-auto my-2">
            <Card.Body>
              <Card.Title>
                <div className="mb-6">
                  <h3>SignUp Form</h3>
                </div>
              </Card.Title>
              <div className="mb-6">
                <Form onSubmit={handleSubmit} method="POST" action="/signup">
                  <div>
                    <Form.Text className="text-muted">
                      Please sign in here
                    </Form.Text>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter the first name"
                        name="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter the Last name"
                        name="lastName"
                        value={lastName}
                        onChange={(event) => setlastName(event.target.value)}
                       
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter a username"
                        name="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone"
                        name="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Select name="department" value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                        >
                        <option>Department</option>
                        <option>Production</option>
                        <option>Sales</option>
                        <option>Administrator</option>
                        <option></option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                      <Form.Control
                        type="password"
                        placeholder="Enter the Password"
                        name="user_password"
                        value={user_password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </Form.Group>
                  </div>
                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" name="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
