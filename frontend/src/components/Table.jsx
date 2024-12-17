import React from 'react';

export default function Table() {
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
        <tr>
            <td>Netflix</td>
            <td style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius illo iure earum,
            </td>
            <td>5</td>
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
          <tr>
            <td>Netflix</td>
            <td style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius illo iure earum,
            </td>
            <td>5</td>
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
          <tr>
            <td>Netflix</td>
            <td style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius illo iure earum,
            </td>
            <td>5</td>
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
          <tr>
            <td>Netflix</td>
            <td style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius illo iure earum,
            </td>
            <td>5</td>
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
