import React, { useContext, useState } from 'react'
import LoginPage from './LoginPage'
import RegisterationPage from './RegisterationPage'
function FrontPage() {
 
    const[newUser, setNewUser]=useState(false)
    const changeNewUserBool=()=>{
        setNewUser(!newUser)
    }
  return (
    <>
      {newUser ? <RegisterationPage changeNewUserBool={changeNewUserBool}/>:
      <LoginPage changeNewUserBool={changeNewUserBool}/>}
      </>
    
  )
}

export default FrontPage
