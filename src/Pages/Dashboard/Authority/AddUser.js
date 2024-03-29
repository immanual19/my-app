import React from 'react';
import './AddUser.css';
const AddUser = ({setAddUser}) => {
    const handleClick=()=>{
        setAddUser(false);
    }
    return (
        <div>
        <div>
        <input type="checkbox" id="my-modal-7" className="modal-toggle" checked />
        
        
        <div className="modal modal-bottom sm:modal-middle xl:modal-xl">
          <div className="modal-box">
          <div class="grid grid-cols-12 gap-4">
  <div class="col-span-4">
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Check</th>
            <th>Text</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              F01
            </td>
           
          </tr>

          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              F02
            </td>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              F05
            </td>
          </tr>

          <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            F06
          </td>
        </tr>
    </tbody>    
  </table>
</div>
          </div>
         
          <div class="col-span-8">
          <h4>Account</h4>
          <p>Foreign Text: A</p>
<form>
          <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Username</span>
    
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text-alt"></span>
    <span class="label-text-alt"></span>
  </label>

  <label class="label">
    <span class="label-text">Password</span>
    
  </label>

  <input type="text" placeholder="password" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text-alt"></span>
    <span class="label-text-alt"></span>
  </label>
</div>
<input className= 'flex btn w-full max-w-xs mx-auto items-center' type="submit" value='Add'/>
</form>  

<div class="overflow-x-auto mt-2">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        
        <th>Text</th> 
        <th>Text</th> 
        <th></th> 
        
      </tr>
    </thead> 
    <tbody>
      <tr>
        
        <td>08475920128</td> 
        <td>Card Alam</td> 
        <td><button class="btn btn-sm">Button</button></td> 
        
      </tr>
      <tr>
        
        <td>3186584</td> 
        <td>Alam Tay</td> 
        <td><button class="btn btn-sm">Button</button></td> 
        
      </tr>
      
    </tbody> 
    <tfoot>
    </tfoot>
  </table>
</div>
          </div>
        </div>

            <div className="modal-action">
              <label for="my-modal-7" id="my-button" className="btn" onClick={handleClick}>Close!</label>
            </div>
          </div>
        </div>
        
                </div>
        </div>
    );
};

export default AddUser;