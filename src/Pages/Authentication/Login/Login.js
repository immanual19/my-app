import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import $ from 'jquery';
import './Login.css';
const Login = () => {
  const navigate=useNavigate();
  const [remMe,setRemMe]=useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit=async(data)=>{

      $.post('http://127.0.0.1:8080/wang/api/Login', { User: data.email, Pwd: data.password })
    .done(function(returnedData) {
      if (returnedData.rspCode === '200') {
        const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
        document.cookie = "token=" + returnedData.rspData[0].token + ";expires=" + expires + ";path=/";
        navigate('/dashboard');
      } else {
        alert('Login error');
      }
    })
    .fail(function() {
      alert('There was an error processing your request.');
    });

    }


    const handleRemChange=()=>{
      if(remMe===false){
          setRemMe(true);
      }
      else{
          setRemMe(false);
      }
      //console.log("Remember me Checked");
  }
  
    return (
        <div className='login'>
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full max-w-xs">
        <label className="label">
        </label>
        <input
        {...register("email", {
            required:{
                value:true,
                message:'Username'
            }
          })}
        type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
        <label className="label">
        {errors.email?.type==='required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type==='pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          
        </label>
        
        <input
        {...register("password", {
            required:{
                value:true,
                message:'Password is Required'
            }
          })}
        type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
        </div>
        <label className="label">
        {errors.password?.type==='required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type==='minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
      
      <div className="form-control">
  <label className="label cursor-pointer">
  <input type="checkbox" className="checkbox" onChange={handleRemChange}/>
        <h6>Remember Me</h6>
    <span className="label-text"></span> 
    <span className="label-text"></span> 
    <span className="label-text"></span> 
    <span className="label-text"></span> 
    <span className="label-text"></span> 
  </label>
</div>
<input className= 'flex btn w-full max-w-xs mx-auto items-center' type="submit" value='Sign In'/>
</form>

<p><small>New to App? <Link className='text-primary' to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;