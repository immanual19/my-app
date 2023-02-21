import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css';
const Login = () => {
  
    const navigate=useNavigate();
    const location=useLocation();

    let from=location.state?.from?.pathname || '/';

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [remMe, setRemMe]=useState(false);

    const onSubmit=async(data)=>{
        data.remme=remMe;
        await signInWithEmailAndPassword(data.email,data.password);
        
    }

    const handleRemChange=()=>{
        if(remMe===false){
            setRemMe(true);
        }
        else{
            setRemMe(false);
        }
        console.log("Remember me Checked");
    }
    
    useEffect(()=>{
      if(user||gUser){
        navigate(from,{replace:true});
      }
    },[user,gUser,from,navigate])

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
                message:'Email is Required'
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Provide a valid email'
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
            },
            minLength: {
              value: 6,
              message: 'Must be 6 characters or longer'
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
          <div className="divider">OR</div>
          <button
          onClick={()=>signInWithGoogle()}
          className="btn w-full max-w-xs btn-outline btn-success">Continue with Google</button>

        </div>
    );
};

export default Login;