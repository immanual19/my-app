import React, { useEffect, useState } from 'react';

const Table1=({fileInfo})=> {

  return (
    <div className='my-2'>
    <div className="overflow-x-auto">
  <table className="table w-25">
    
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Status</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      
    {fileInfo.map((item, index) => (
      <tr key={index}>
        <td>{item?.name}</td>
        <td>{item?.status}</td>
        <td>
          <button className="btn btn-accent mx-2">Download</button>
          <button className="btn btn-accent mx-2">Clone</button>
        </td>
      </tr>
    ))}
    </tbody>
  </table>
</div>
    </div>
  );
}

export default Table1;
