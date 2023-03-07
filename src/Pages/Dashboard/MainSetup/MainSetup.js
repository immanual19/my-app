import React, { useEffect, useState } from 'react';
import FileError from '../FileError/FileError';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import * as XLSX from 'xlsx'
import { toast } from 'react-toastify';

const MainSetup = () => {
const [fileError, setFileError] = useState(false);
const [user, loading, error] = useAuthState(auth);
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const [submitButton, setSubmitButton] = useState(false);
const [invalidUpload, setInvalidUpload] = useState(false);
const [file, setFile] = useState(null);

const onSubmit = async (data) => {
const formData = new FormData();
formData.append('DataFile', file, file.name);
let str = document.cookie;
let index = str.indexOf('token=');
if (index !== -1) {
  str = str.substring(0, index) + str.substring(index + 6);
}
    console.log(str);
const uploadUrl = `http://127.0.0.1:8080/wang/api/UploadFile?AccessToken=${str}`;
fetch(uploadUrl, {
  method: 'POST',
  body: formData
})
  .then(response => {
    if (response.status === 200) {
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }
  })
  .catch(error => {
    console.error('File upload failed:', error);
  });
}

const handleFileUpload = (event) => {
event.preventDefault();
const uploadedFile = event.target.files[0];
const fileName = uploadedFile.name;
const fileExtension = fileName.split('.').pop();
if (fileExtension === 'xlsx' || fileExtension === 'xls') {
setFile(uploadedFile);
} else {
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
<button className="btn btn-active btn-primary mx-2">Select a file</button>
<input type="file" className="input w-full max-w-xs" onChange={handleFileUpload} />
<label className="label">
{errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
</label>
</div>

<div class="grid grid-cols-2 gap-4 p-5">
  <div>
  <button class="btn">Add One Condition</button>
  </div>
  <div>
  <button class="btn">Add Clone</button>
  </div>
</div>



  <button class="btn m-5">Condition 1 setup</button><br />
  <button class="btn m-5">Condition 2 setup</button> <br />
  



<button className='btn w-full max-w-xs pt-5' type="submit">RUN</button>

</form>

{
    fileError && <FileError setFileError={setFileError}></FileError>
  }
  
</div>

);
};

export default MainSetup;