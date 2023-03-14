import React from 'react';

const FileError = ({setFileError}) => {


    const handleClick=()=>{
        setFileError(false);
    }


    return (
        <div>
<input type="checkbox" id="my-modal-6" className="modal-toggle" checked />


<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">File Error Occurred!</h3>
    <p className="py-4">You have chosen invalid file to upload</p>
    <div className="modal-action">
      <label for="my-modal-6" id="my-button" className="btn" onClick={handleClick}>Close!</label>
    </div>
  </div>
</div>

        </div>
    );
};

export default FileError;