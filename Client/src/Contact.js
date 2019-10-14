import React, { Component } from 'react';
import {Link} from "react-router-dom";

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
          number: "",
          firstName: "",
          lastName: "",
          email: "",
          content: "",
        }
      }
    })
  }

  render() {
    let {number, firstName, lastName, email, content} = this.state.inputs
    return (
      <div>
        <div className="contact">
          <h1 className="contactTitle">Contact Us</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="number"
              placeholder="Phone Number"
              value={number}
              onChange={this.handleChange}
              required
            />

            <input
              className="input"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleChange}
              required
            />

            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleChange}
              required
            />

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />

            <input
              className="input"
              type="conten
              t" name="content"
              placeholder="Tell us anything"
              value={content}
              onChange={this.handleChange}
              required
            />
            <Link
            className="linkHome button"
            to={"/contact/submitted"}>
              Submit
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;