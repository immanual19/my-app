import React, { useEffect } from 'react';
import $ from 'jquery';
const Table=()=> {

  useEffect(()=>{
    let str = document.cookie;
let index = str.indexOf('token=');
if (index !== -1) {
  str = str.substring(0, index) + str.substring(index + 6);
}
    console.log(str);
    const fileId = str;
    
    $.post('http://127.0.0.1:8080/wang/api/QueryFileStatus', { AccessToken: str, FileID: fileId})
    .done(function(returnedData) {
      if (returnedData.rspCode === '200') {
        console.log(returnedData);
      } else {
        console.log(returnedData);
        alert('Login error');
      }
    })
    .fail(function() {
      alert('There was an error processing your request.');
    });

  },[document.cookie])


    

  return (
    <div>
    <div class="overflow-x-auto">
  <table class="table w-25">
    
    <thead>
      <tr>
        
        <th>File Name</th>
        <th>Date</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      
      <tr>
        
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Download</td>
        
      </tr>
      
      <tr>
        
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Download</td>
        
      </tr>
     
      
    </tbody>
  </table>
</div>
    </div>
  );
}

export default Table;
