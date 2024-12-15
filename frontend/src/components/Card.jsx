import React from 'react';

export default function Card({title, count, percent}) {
  return (
    <div className='col-4 p-1 border rounded d-flex'>
      <div className='col-6'>
         <p>{title}</p>
         <strong>{count}</strong>
      </div>
      <div className='col-6'>
      </div>
    </div>
  )
}
