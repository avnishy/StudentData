import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class CreateStudent extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeStudentCity = this.onChangeStudentCity.bind(this);
    this.onChangeStudentHouseno = this.onChangeStudentHouseno.bind(this);
    this.onChangeStudentStreet = this.onChangeStudentStreet.bind(this);
    this.onChangeStudentState = this.onChangeStudentState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      name: '',
      email: '',
      phone: '',
      rollno: '',
      houseno: '',
      street: '',
      city: '',
      state :''
    }
  }
  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeStudentPhone(e) {
    this.setState({ phone: e.target.value })
  }
  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }
  onChangeStudentHouseno(e){
    this.setState({ houseno: e.target.value })
  }
  onChangeStudentStreet(e) {
    this.setState({ street: e.target.value })
  }
  onChangeStudentCity(e) {
    this.setState({ city: e.target.value })
  }
  onChangeStudentState(e) {
    this.setState({ state: e.target.value })
  }
  
  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      rollno: this.state.rollno,
      houseno: this.state.houseno,
      street: this.state.street,
      city : this.state.city,
      state : this.state.state
    };
    axios.post('http://localhost:8080/students/create-student', studentObject)
      .then(res => console.log(res.data));
    this.setState({ name: '', email: '', phone: '', rollno: '', houseno:'', street: '', city:'', state:''})
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <h1 className="display-6">Enter Student Data</h1>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} required />
        </Form.Group>
        
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} required />
        
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="Phone" value={this.state.phone} onChange={this.onChangeStudentPhone} required />
        </Form.Group>
        
        <Form.Group controlId="RollNo">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} required />
        </Form.Group>
        
        <br/>
        <label>Enter Student's Address</label>
        
        <div className="row g-3">
        <div className="col-sm-6"><Form.Group controlId="houseno">
          <Form.Label>House Number</Form.Label>
          <Form.Control type="text" value={this.state.houseno} onChange={this.onChangeStudentHouseno} required />
        </Form.Group>
        </div>
        <div className="col-sm-6">
        <Form.Group controlId="street">
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" value={this.state.street} onChange={this.onChangeStudentStreet} required />
        </Form.Group>
        </div>
        </div>

        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" value={this.state.city} onChange={this.onChangeStudentCity} required />
        </Form.Group>
        
        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" value={this.state.state} onChange={this.onChangeStudentState} required />
        </Form.Group>
        
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}