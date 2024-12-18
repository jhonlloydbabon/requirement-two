import React from 'react';
import { useSelector } from 'react-redux';

export default function Table() {
  const result = useSelector((state)=>state.companyUser.response);
  console.log(result);
  
  return (
    <div className="row">
      <table className="table border border-rounded">
        <thead className="highlight-header-footer">
          <tr>
            <th>Company</th>
            <th>About</th>
            <th>Users</th>
            <th>License Use</th>
          </tr>
        </thead>
        <tbody style={{height:"100px", overflow:"auto"}}>
        {
          result.map((v,k)=>(
            <tr>
            <td>{v.company_name}</td>
            <td style={{ width: "400px" }}>{v.company_description}</td>
            <td><img src={v.user_profile} style={{width:"20px"}} /></td>
            <td>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </td>
          </tr>
          ))
        }
        </tbody>
        <tfoot className="highlight-header-footer">
          <tr>
            <td colSpan="4">
              <div className="d-flex justify-content-between">
                <button className="btn btn-light border">Previous</button>
                <span>Page 1 of 3</span>
                <button className="btn btn-light border">Next</button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
