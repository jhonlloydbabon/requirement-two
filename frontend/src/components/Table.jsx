import React from 'react'

export default function Table() {
  return (
    <div className='row'>
        <table className='table border border-rounded'>
            <thead className='thead-light'>
                <tr>
                    <th>Company</th>
                    <th>About</th>
                    <th>Users</th>
                    <th>License Use</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Netflix</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius illo iure earum,</td>
                    <td>5</td>
                    <td>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
