import React from 'react';

const FileError = ({setFileError}) => {


    const handleClick=()=>{
        setFileError(false);
    }


    return (
        <div>
<input type="checkbox" id="my-modal-6" class="modal-toggle" checked />


<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">File Error Occurred!</h3>
    <p class="py-4">You have chosen invalid file to upload</p>
    <div class="modal-action">
      <label for="my-modal-6" id="my-button" class="btn" onClick={handleClick}>Close!</label>
    </div>
  </div>
</div>

        </div>
    );
};

export default FileError;