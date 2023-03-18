import React, { useEffect, useState } from 'react';
import $ from 'jquery';
const Table3=({fileInfo})=> {
//console.log(fileInfo);

  return (
    <div className='my-2'>
    <div className="overflow-x-auto">
  <table className="table w-25">
    
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Date</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      
      <tr>
        
        <td>Data From Backend</td>
        <td>Data From Backend</td>
        <button className="btn btn-accent mx-2">Download</button>
        <button className="btn btn-accent mx-2">Del</button>
        <button className="btn btn-accent mx-2">Clone</button>
        
      </tr>
      
      <tr>
        
        <td>Data From Backend</td>
        <td>Data From Backend</td>
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

export default Table3;
