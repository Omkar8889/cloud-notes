import React,{useContext, useState} from 'react'
import '../components/css/loginPage/login.css'
import NoteContext from '../context/notes/Notecontext'
import { NOTEACTIONS } from '../context/notes/noteState'

function LoginPage(props) {
  const {changeNewUserBool}=props
  const {setLoggedIn,pullNotes,setnotes,pullUser,setUserToken}=useContext(NoteContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewPassword, setViewpassword]=useState(false)

  const changePasswordVisiblity=()=>{
    setViewpassword(!viewPassword)
  }
      const startLogin=async(e)=>{
        e.preventDefault();
        try {
          var userToken= await pullUser(document.getElementById('email').value, document.getElementById('current-password').value,'login')
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
        <div className="Login-form ">
          <h2>Sign in to website</h2>
          <form onSubmit={startLogin}>
          omkar@gmail.com
          12345678
              <input id='email' type="email" placeholder='enter email'/>
              <div className='position-relative'>
              <input id='current-password' type={viewPassword?'text':'password'} placeholder='enter password'/>
              <div onClick={()=>changePasswordVisiblity()} className="eye-ball">
              {viewPassword?<i class="fa-regular fa-eye-slash"></i>:
              <i className=" fa-regular fa-eye"></i>}
                </div>
              </div>
              <button type='submit'>Sign In</button>
          </form>
        </div>
        <div className="Login-extra">
          <h1>New Here?</h1>
          <p>Sign up to start using 'enter wesite title'</p>
          <button type="button" onClick={()=>changeNewUserBool()}> Sign Up</button>
        </div>
      </div>
    )
  }
  export default LoginPage