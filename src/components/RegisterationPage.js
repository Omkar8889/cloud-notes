import React,{useState,useContext} from "react";
import NoteContext from '../context/notes/Notecontext'
import { NOTEACTIONS } from '../context/notes/noteState'

function RegisterationPage(props) {
  const {changeNewUserBool}=props
  const [viewPassword, setViewpassword]=useState(false)
  const {setLoggedIn,pullNotes,setnotes,pullUser,setUserToken}=useContext(NoteContext);


  const changePasswordVisiblity=()=>{
    setViewpassword(!viewPassword)
  }
  const startRegisteration=async(e)=>{
    e.preventDefault();
    try {
      var userToken= await pullUser(document.getElementById('new-email').value, document.getElementById('new-password').value,'createuser')
    console.log(userToken.authToken)
    if(!!userToken.authToken){
      setUserToken(userToken.authToken)
      var responce=await pullNotes(userToken.authToken);
      setnotes({type:NOTEACTIONS.FIRSTPULL,notes:responce})
      setLoggedIn(true)
    } else{
      document.getElementById('email').value='acc not found'
    }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='Login-page my-container'>
      <div className='slider'></div>
      <div className="Login-extra">
        <h1>have account?</h1>
        <p>Sign in to start using 'enter wesite title'</p>
        <button type="button" onClick={()=>changeNewUserBool()}> Sign in</button>
      </div>
      <div className="Login-form ">
        <h2>Sign in to website</h2>
        <form onSubmit={startRegisteration}>
            <input id='new-email' type="email" placeholder='enter email'/>
            <div className='position-relative'>
            <input id='new-password' type={viewPassword?'text':'password'} placeholder='enter password'/>
            <div onClick={()=>changePasswordVisiblity()} className="eye-ball">
              {viewPassword?<i class="fa-regular fa-eye-slash"></i>:
              <i className=" fa-regular fa-eye"></i>}
                </div>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </div>
      
    </div>
  );
}

export default RegisterationPage;
