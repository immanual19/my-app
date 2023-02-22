import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import * as XLSX from 'xlsx'
const MainSetup = () => {
    const [user, loading,error]=useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [submitButton,setSubmitButton]=useState(false);
    const [invalidUpload, setInvalidUpload]=useState(false);
    const onSubmit=async(data)=>{
        console.log(data);
    }

    const handleFileUpload = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const data = reader.result;
          const workbook = XLSX.read(data, {type: 'binary'});
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          console.log(jsonData);
        };
        reader.readAsBinaryString(file);
      };
      

    return (
        <div className='mt-2 w-1/2 mx-auto text-center'>
        <h1 className='text-primary'>Mr/Mrs, {user?.displayName} Please upload your xlsx or xls file</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='my-5'>
            <button class="btn btn-active btn-primary mx-2">Select a file</button>
            <input type="file" class="input w-full max-w-xs" onChange={handleFileUpload}/>
            <label class="label">
            {errors.image?.type==='required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
            </label>
            </div>
            {submitButton &&<input className='btn w-full max-w-xs' type="submit" value='Update'/>}
            </form>
        </div>
    );
};

export default MainSetup;