import React from 'react';
import './Task1.css'

const Reason = ({ icons, text }) => {
  return (
    <div className="reasonContainer">
     <div>
     {icons}
      <h3>{text}</h3>
     </div>
    </div>
  )
}

export default Reason