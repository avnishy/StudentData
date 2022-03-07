import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeStudentHouseno = this.onChangeStudentHouseno.bind(this);
    this.onChangeStudentStreet = this.onChangeStudentStreet.bind(this);
    this.onChangeStudentCity = this.onChangeStudentCity.bind(this);
    this.onChangeStudentState = this.onChangeStudentState.bind(this);
        
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: '',
      email: '',
      phone: '',
      rollno: '', 
      houseno: '',
      street: '',
      city: '', 
      state:''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          rollno: res.data.rollno,
          houseno: res.data.houseno,
          street: res.data.street,
          city: res.data.city,
          state: res.data.state
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
  onChangeStudentHouseno(e) {
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
      city: this.state.city,
      state: this.state.state
    };
    axios.put('http://localhost:8080/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.history.push('/student-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <h1 className="display-6">Enter Updated Student Data</h1>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" value={this.state.phone} onChange={this.onChangeStudentPhone} />
        </Form.Group>
        <Form.Group controlId="RollNo">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
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
          Update Student
        </Button>
      </Form>
    </div>);
  }
}