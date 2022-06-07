import React from "react";
import './Navi.css';
import {Link} from 'react-router-dom';

function Navi () {
  return (
    <div className="nav">
      <Link to='/'>Home</Link>
      <Link to='/about' state={{fromNavigation: true}}>About</Link>
    </div>
  );
}

export default Navi;