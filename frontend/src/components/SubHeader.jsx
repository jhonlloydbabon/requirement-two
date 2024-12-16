import React from 'react'

export default function SubHeader() {
  return (
    <div className='row py-3'>
        <div className='p-0 col-8 d-flex gap-2'>
            <button className='btn border btn-light'>All Time</button>
            <button className='btn border btn-light'>US, AU +4</button>
            <button className='btn border btn-light'>More Filter</button>
        </div>
        <div className='p-0 col-4'>
            <input type='text' name='search' placeholder='Search' className='form-control'/>
        </div>
    </div>
  )
}
