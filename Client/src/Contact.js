import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import Drawer from 'react-drag-drawer';

class Contact extends Component {
  constructor(){
    super()
    this.state = {
      inputs: {
        firstName: "",
        lastName: "",
        email: "",
        content: "",
      }
    }
  }

  handleChange = e => {
    const {name,value} = e.target
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(() => {
      return {
        inputs: {
          firstName: "",
          lastName: "",
          email: "",
          content: "",
        }
      }
    })
  }

  // toggle = () => {
  //   let {toggle} = this.state
  //   this.setState({toggle: !toggle})
  // }

  // logState = () => {
  //   console.log(`Drawer now ${this.state.open ? "open" : "closed"}`)
  // }

  render() {
    // const {open} = this.state
    let {firstName, lastName, email, content} = this.state.inputs
    return (
      <div>
        <div className="contact">
          <h1 className="contactTitle">Contact Us</h1>
          <form className="form" onSubmit={this.handleSubmit}>
          <input className="input" type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} required/>
          <input className="input"  type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange} required/>
          <input className="input"  type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required/>
          <input className="input"  type="content" name="content" placeholder="Tell us anything" value={content} onChange={this.handleChange} required/>
          {/* <button>Submit</button> */}
          <Link className="linkHome button" to={"/contact/submitted"}>
          Submit
          </Link>
          </form>
        </div>
        {/* <div> 
          <Drawer
          open = {open}
          onRequestClose={this.toggle}
          >
            <div>
              Thank you for your Submission! We will be in contact within 3-5 business days. Have a nice days!
            </div>
          </Drawer>
        </div> */}
      </div>
    );
  }
}

export default Contact;