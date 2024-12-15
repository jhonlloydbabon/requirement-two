import React from 'react';
import '../App.css';

export default function HeaderDashboard() {
  return (
    <div className='row'>
        <div className='pt-4 pb-3 d-flex justify-content-between align-items-center'>
            <h4>Customers</h4>
            <div className='d-flex gap-2'>
                <button className='btn btn-light'>Import</button>
                <button className='btn btn-primary'>Add Customer</button>
            </div>
        </div>
        <ul className='gap-3 list-unstyled d-flex py-2 border-bottom'>
                <li className='active'>Overview</li>
                <li>Table</li>
                <li>List view</li>
                <li>Segment</li>
                <li>Custom</li>
        </ul>
    </div>
  )
}
