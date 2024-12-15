import React from 'react'

export default function Navigation() {
  return (
    <div className='col-3 p-2 border rounded'>
        <h4>Untitled UI</h4>
        <div className='py-3'>
          <input type='text' placeholder='Search' className='form-control'/>
        </div>
        <div>
          <p>Home</p>
          <p></p>
        </div>
    </div>
  )
}
