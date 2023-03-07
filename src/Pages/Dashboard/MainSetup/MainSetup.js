import React, { useEffect, useState } from 'react';
import FileError from '../FileError/FileError';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import * as XLSX from 'xlsx'
import { toast } from 'react-toastify';
const MainSetup = () => {
    const[fileError,setFileError]=useState(false);
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
        // console.log(file);
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        console.log(fileExtension);
        if(fileExtension==='xlsx' || fileExtension==='xls'){
            reader.onload = () => {
                const data = reader.result;
                //console.log(data);
                const workbook = XLSX.read(data, {type: 'binary'});
                console.log(workbook.SheetNames);
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                //console.log(worksheet);
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                console.log(jsonData);
              };
              reader.readAsBinaryString(file);
        }
        else{
            setFileError(true);
            const form = document.querySelector('form');
            form.reset();
        }
        
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
            
            {
                fileError && <FileError setFileError={setFileError}></FileError>
            }

        </div>
    );
};

export default MainSetup;