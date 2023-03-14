import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { List, OrderedMap } from 'immutable';
const Table2=(props)=> {

useEffect(()=>{
  let str = document.cookie;
  let index = str.indexOf('token=');
  if (index !== -1) {
    str = str.substring(0, index) + str.substring(index + 6);
  }  
  console.log(str);
  const FileIDList=props.fileInfo.map(({fileID})=>({fileID}));
  console.log(FileIDList);
  $.post('http://127.0.0.1:8080/wang/api/QueryFileListStatus', {AccessToken:str,FileList:FileIDList})
    .done(function(returnedData) {
      if (returnedData.rspCode === '200') {
        console.log("Query File List Status: ",returnedData); 

      } else {
        console.error(`Failed to get file list: ${returnedData.rspMsg}`);
      }
    })
    .fail(function() {
      console.error('Failed to get file list');
    });
},[document.cookie])
  return (
    <div className='my-2'>
    <div className="overflow-x-auto">
  <table className="table w-25">
    
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
        <td>Something</td>
        <button className="btn btn-accent mx-2">Download</button>
        <button className="btn btn-accent mx-2">Del</button>
        <button className="btn btn-accent mx-2">Clone</button>
        
      </tr>
      
      <tr>
        
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <button className="btn btn-accent mx-2">Download</button>
        <button className="btn btn-accent mx-2">Del</button>
        <button className="btn btn-accent mx-2">Clone</button>
      </tr>
     
      
    </tbody>
  </table>
</div>
    </div>
  );
}

export default Table2;
