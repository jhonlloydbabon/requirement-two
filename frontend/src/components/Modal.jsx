import React from 'react'

export default function Modal() {
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
          <div className="col-4 bg-light p-3 border rounded">
            <h5>Add Customer</h5>
          </div>
        </div>
      </div>
  )
}
