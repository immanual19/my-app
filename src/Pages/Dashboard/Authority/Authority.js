import React, { useState, useEffect } from 'react';
import AddUser from './AddUser';

const Authority = () => {
    const [addUser,setAddUser]=useState(false);
    const handleClick=()=>{
        setAddUser(true);
    }

    let token = document.cookie;
let index = token.indexOf('token=');
if (index !== -1) {
  token = token.substring(0, index) + token.substring(index + 6);
}
const [showToken, setShowToken] = useState(false);

  useEffect(() => {
    let timeout;
    if (showToken) {
      timeout = setTimeout(() => {
        setShowToken(false);
      }, 10000);
    }
    return () => clearTimeout(timeout);
  }, [showToken]);

  const maskedToken = `${token.slice(0, 2)}${"*".repeat(token.length - 10)}${token.slice(-2)}`;
console.log(token);
    return (
        <div>
            <h1>As API wasn't provided. This page will remain static until api is provided</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Title 1</th>
        <th>Title 2</th>
        <th>Title 3</th>
        <th>Title 4</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>
        <span style={{"marginRight":"1%"}}>{showToken ? token : maskedToken}</span>
      <button onClick={() => setShowToken(!showToken)} className='btn'>
        {showToken ? "Hide" : "Show"}
      </button>
        </td>
        
        <td><button class="btn btn-accent">Revise</button></td>
        <td><button class="btn btn-accent">ButtonName(F)</button></td>
        <td><button class="btn btn-accent">ButtonName(M)</button></td>
      </tr>
      
      <tr class="active">
        <th>2</th>
        <td>Owner</td>
        <td><button class="btn btn-accent">Revise</button></td>
        <td><button class="btn btn-accent">ButtonName(F)</button></td>
        <td><button class="btn btn-accent">ButtonName(M)</button></td>
      </tr>
      
      <tr>
        <th>3</th>
        <td>Operator</td>
        <td><button class="btn btn-accent">Revise</button></td>
        <td><button class="btn btn-accent">ButtonName(F)</button></td>
        <td><button class="btn btn-accent">ButtonName(M)</button></td>
      </tr>

      <tr className='active'>
        <th>4</th>
        <td>Supplier</td>
        <td><button class="btn btn-accent">Revise</button></td>
        <td><button class="btn btn-accent">ButtonName(F)</button></td>
        <td><button class="btn btn-accent">ButtonName(M)</button></td>
      </tr>
    </tbody>
    <br />
    <button class="btn btn-accent" onClick={handleClick}>Add</button>
  </table>
</div>

{
    addUser && <AddUser setAddUser={setAddUser}></AddUser>
}

        </div>
    );
};

export default Authority;