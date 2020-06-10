import React from 'react';
import LogoCss from './Logo.module.css';

const Logo = (props) => {
   return (
       <div>
           <h1 className={LogoCss.Main}>Simple Generator</h1>
       </div>
   )
}

export default Logo;