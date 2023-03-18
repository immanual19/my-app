import React, { useState } from 'react';
import AddUser from './AddUser';

const Authority = () => {
    const [addUser,setAddUser]=useState(false);
    const handleClick=()=>{
        setAddUser(true);
    }
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
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>Admin</td>
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