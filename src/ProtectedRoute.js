import React, { Children } from 'react'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './context/AuthContext';


const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const {isAuth } = useContext(AuthContext);
  
  console.log('protected' , isAuth)
React.useEffect(()=>{
  if(!isAuth){
navigate('/')
  }
},[])
return (
  <>{isAuth&&<div>{children}</div>
}</>
)
}

export default ProtectedRoute;