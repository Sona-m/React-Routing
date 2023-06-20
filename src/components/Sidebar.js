import React from 'react';
import { Link , useLocation } from 'react-router-dom';

const Sidebar = () => {

const location = useLocation();

  const links=[{name:"Dropdown",path:"/dropdown"},
                 {name:"Accordion",path:"/accordion"},
                 {name:"Buttons",path:"/buttons"}]
  return (
    <div className='sticky flex flex-col text-blue-500 ml-5 '>
      {links.map((link)=>{
        return(
           <Link to={link.path} key={link.name} ClassName ={location.pathname === link.path ? 'active' : ''} >
            <ul>
                <li>{link.name}</li>
            </ul>
          </Link>
        )
      })}
    </div>
  );
};

export default Sidebar;