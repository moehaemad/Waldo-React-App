import React from 'react';
import Logo from './Logo.module.css';

const logo = (props) => {
   return (
       <div>
           <h1 className={Logo.Main}>Where's Waldo</h1>
       </div>
   )
}

export default logo;