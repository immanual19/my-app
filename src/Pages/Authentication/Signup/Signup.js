import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [passMissMatch,setPassMissmatch]=useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = async (data) =>{
      if(data.password!==data.repassword){
        setPassMissmatch(true);
      }
      else{
        await createUserWithEmailAndPassword(data.email,data.password);
        
      }  
    }    
    return (
        <div className='flex justify-center items-center'>
        <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Signup</h2>
          <form onSubmit={handleSubmit(onSubmit)}>


<div class="form-control w-full max-w-xs">
<label class="label">
  <span class="label-text">Email</span>
</label>
<input
type="email"
placeholder="Your Email"
class="input input-bordered w-full max-w-xs"
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
/>
<label class="label">
{errors.email?.type==='required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type==='pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  
</label>
</div>



<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
  </label>
  <input
  type="password"
  placeholder="Password"
  class="input input-bordered w-full max-w-xs"
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
  />
  <label class="label">
  {errors.password?.type==='required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type==='minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
    
  </label>
  </div>

  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Reenter Password</span>
  </label>
  <input
  type="password"
  placeholder="Password"
  class="input input-bordered w-full max-w-xs"
  {...register("repassword", {
    required:{
        value:true,
        message:'Password is Required'
    },
    minLength: {
      value: 6,
      message: 'Must be 6 characters or longer'
    }
  })}
  />
  <label class="label">
  {errors.password?.type==='required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type==='minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {passMissMatch && <span class="label-text-alt text-red-500">Passwords did not match.</span>}
  </label>
  </div>

<input className= 'flex btn w-full max-w-xs mx-auto items-center' type="submit" value='Sign up'/>
<p className='flex items-center w-64 my-2 mx-auto'><small>Already have an account? <Link className='text-primary' to='/'>Click to Login</Link></small></p>


</form>


      <div className="divider">OR</div>
      <button
    onClick={()=>signInWithGoogle()}
      className="btn btn-outline btn-success">Continue with Google</button>
    </div>
  </div>
  
</div>
   
        
    );
};

export default SignUp;