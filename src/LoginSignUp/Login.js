import axios from "axios";
import {  useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";
import "./login.css"
const token =localStorage.getItem("token")
function LoginButton(){
    const navigate=useNavigate()
  
    const [user,setUser]=useState(
        {
            email:"",
            password:""
        }
    )
   
  const changeme=(e)=>{
        setUser({...user,
        [e.target.name]:e.target.value
        })
    }


    const handle=(e)=>{

e.preventDefault()
        axios.post("https://eccommorce-backend.onrender.com/api/login",user,{headers:{"authorization":`Bearer${token}`}})
        .then((res)=>{
            console.log(res)
          alert(res.data.msg) 
          localStorage.setItem("token",res.data.token)
        //   localStorage.setItem("name",res.data.name)

        //   if(token){
            navigate('/groceries') 
        //   } else{
           
        //     navigate('/login') 
        //   }
              
        })

        setUser({
            email:"",
            password:""

        })
    }

    // useEffect(()=>{
    //     
    //     if(token){
    //         navigate("/login")
    //     }
    // })
    
    return(
        <div className="login">
            <div className="under_login"> 
            <h1 className="headingtwo">Login Page</h1>
            <h2 style={{color:"gray"}}>Hello Friends</h2>
        <h3 style={{color:"gray"}}>Enter your personal details and start journey with us</h3>
            </div>
            <div className="under_div_login">
            <h1 className="create_accc" style={{color:'gray'}}>Login Account</h1>
            <form>
     
      <label htmlFor="emaillogin" className="emaillogin">Email</label>
      <input type="email" className="emailloginid" name="email" id="emaillogin" placeholder="enter your email" value={user.email} onChange={changeme} /><br/>
      <label htmlFor="passwordlogin" className="passwordlogin">Password</label>
      <input type="password" id="passwordlogin" name="password" placeholder="enter your password" value={user.password} onChange={changeme} className="passwordinput"/><br/><br/>
     
     
      <button onClick={handle} className="loginbtn_main">Login</button><br/>
      
      <NavLink to="/register" >go to register page</NavLink>

        </form>
            </div>
       
        </div>
    )
}
export default LoginButton;