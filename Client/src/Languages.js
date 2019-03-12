import React from 'react';
import "./App.css";
import list from "./idiomas.json";
import {Link} from "react-router-dom";

const Languages = () => {
  const mappedLanguages = list.map(language => 
    <Link 
      className="mapLang" 
      key={language._id} 
      to={`/languages/${language._id}`}
    >
      <div className="langPage">
        {language.name} 
        <br/> 
        <img src={language.imgUrl} alt=""/>
      </div>
    </Link>)
  return (
    <div className="lang">
      <div className="container mapLang">  
        {mappedLanguages}
      </div>
    </div>
  );
};

export default Languages;