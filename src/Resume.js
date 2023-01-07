import React from 'react';
import ResumePDF from "./Dante_Miller_Resume.pdf"
import "./Resume.css"
function Resume() {
return(
  <div className="resume">
    <h1 className="title"> 
      Resume
    </h1>
    <object className="resumepdf" height="1000" data={ResumePDF} type="application/pdf" width="960">
        <a href={ResumePDF} >Do not have the proper PDF plugin so download to view resume</a>
    </object>
  </div>

)
}
export default Resume;
