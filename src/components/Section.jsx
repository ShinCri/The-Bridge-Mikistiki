import React, { useState, useEffect, Children } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Section = ({ pageInfo, children, section }) => {

   return(
      <section 
         id={`${pageInfo.name}-${section}-section`}
         class={`section ${pageInfo.name}-section`}
         style={sectionStyle[section]}
      >
         {children}
      </section>
   );
}

export default Section;