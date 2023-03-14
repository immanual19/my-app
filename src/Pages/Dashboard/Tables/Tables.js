import React, { useEffect, useState } from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import $ from 'jquery';
const Tables = ({fileInfo}) => {
    const [data1,setData1]=useState([]);
    const [token,setToken]=useState("");
  useEffect(()=>{
    let str = document.cookie;
let index = str.indexOf('token=');
if (index !== -1) {
  str = str.substring(0, index) + str.substring(index + 6);
}

setToken(str);


$.post('http://127.0.0.1:8080/wang/api/QueryFiles', { AccessToken: str, Status: "All" })
  .done(function(returnedData) {
    if (returnedData.rspCode === '200') {
      console.log(returnedData.rspData);
      //setData2(returnedData.rspData);
      setData1(returnedData.rspData);
    } else {
      console.error(`Failed to get file list: ${returnedData.rspMsg}`);
    }
  })
  .fail(function() {
    console.error('Failed to get file list');
  });



  },[document.cookie])




    return (
        <div>
            <Table1 fileInfo={data1}></Table1>
            <Table2 fileInfo={data1}></Table2>
            <Table3 fileInfo={data1}></Table3>
        </div>
    );
};

export default Tables;