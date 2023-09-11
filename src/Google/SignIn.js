import React, { useEffect, useState } from "react";
import {auth,ggprovider,fbprovider,twprovider} from "./config";
import {signInWithPopup} from "firebase/auth";

function SignIn(){
    
    const handleClick =()=>{
      
        signInWithPopup(auth,ggprovider).then((data)=>{
             localStorage.setItem("email",data.user.email)
           
        })
    }

    const handleClick1 =()=>{
        
        signInWithPopup(auth,fbprovider).then((data)=>{
             localStorage.setItem("facebook",data.user.email)
        })
    }
  
    const handleClick2 =()=>{
        
        signInWithPopup(auth,twprovider).then((data)=>{
            console.log("tw",data);
            //  localStorage.setItem("twitter",data)
        })
    }

    const storedEmail = localStorage.getItem('email');
   
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
return (
    <div>
        {storedEmail ?
        (<div>
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
        )
        :(
        <>
        <button onClick={()=>handleClick()}>Signin With Google</button>
        <button onClick={handleClick1}>Signin With Facebook</button>
        <button onClick={handleClick2}>Signin With Twitter</button>
        </>)
        }
    </div>
);
}
export default SignIn;