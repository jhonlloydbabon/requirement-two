import React from 'react';
import { useDispatch } from 'react-redux';
import {closeModal} from '../redux/actions/modalAction';

export default function Modal() {
  const dispatch = useDispatch();
  return (
    <div className="container-fluid position-absolute w-100 h-100" style={{ position: "relative" }}>
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "black",
            opacity: 0.5,
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        ></div>
        <div className="row pt-5 d-flex justify-content-center position-relative" style={{ zIndex: 1 }}>
          <div className="col-4 bg-light p-4 border rounded">
             <div className='d-flex justify-content-end'>
              <p onClick={()=>dispatch(closeModal())} style={{cursor:"pointer"}}>X</p>
             </div>
             <div className=''>
                <h5><strong>Add Customer</strong></h5>
                <p>Share we're you work on your profile</p>
             </div>
             <div className='form-group gap-2'> 
                <div className='py-2'>
                  <label>Company</label>
                  <select name="" id="" className='form-control'>
                    <option value="Select Company">Select Company</option>
                    <option value="Netflix">Netflix</option>
                    <option value="Facebook">Facebook</option>
                  </select>
                </div>
                <div className='py-2'>
                  <label>User</label>
                  <input type="text" name="user" id="user" className='form-control' />
                </div>
                <div className='py-2 d-flex align-items-center gap-1'>
                  <input type="checkbox"/> 
                  <label>isLicense</label>
                </div>
                <div className='text-center py-2 border rounded' style={{backgroundColor:"#7F56D9", color:"#fff", cursor:"pointer"}}>
                    Add Customer
                </div>
             </div>
          </div>
        </div>
      </div>
  )
}
