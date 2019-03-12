import React from 'react';
import list from "./idiomas.json";
// const Axios = require('axios')
import axios from 'axios'


class LanguageDetail extends React.Component {
  constructor(){
    super()

    this.state ={
      text: '',
      translatedText: ""
    }
  }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  getTranslation = name => {
    console.log(name)
    console.log(this.state.text)
    axios.post("/forwarder", {text: this.state.text, name}).then(res => {
      console.log(res)
      this.setState({
        translatedText: res.data.contents.translated
      })
    }).catch(err => console.log(err))
  }

  render() {
    let {_id} = this.props.match.params
    const language = list.find(lan => lan._id === _id)
    let {name} = language;

    return (
      <div className="details">
        <h1 className="langName">{name}</h1>
        <textarea 
          rows="10"
          cols="80"
          className="textArea" 
          type="text" 
          value={this.state.text} 
          name='text' 
          onChange={this.handleChange} 
        />
        <br/>
        <button 
          className="submit" 
          onClick={() => this.getTranslation(name)}
        >
          Translate
        </button>
        <h2 className="htwo">{this.state.translatedText}</h2>
      </div>
    );
  }
    
};

export default LanguageDetail;