import React from 'react';
import {Link} from "react-router-dom";

const Submitted = () => {
  return (
    <div className="contact">
     <h1 className="contactTitle">Transmission Received</h1>
     <div className="submission">
     Thank you for your Submission! We will be in contact within 3-5 business days. Have a nice day!
     </div>
     <br/>
     <br/>
     <br/>
     <div>
    <Link className="anotherSub button linkHome" to="/contact">
      Send another submission
    </Link>
     </div>
    </div>
  );
};

export default Submitted;