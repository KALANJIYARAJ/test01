import React from 'react'

function EditUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
            <div className="form-group">
                <label>UserName</label>
                <input type={"text"} className="form-control"/>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form-group">
                <label>Email</label>
                <input type={"text"} className="form-control"/>
            </div>
        </div>
      <div className="col-lg-4">
            <div className="form-group">
                <label>Country</label>
               <select className="form-control">
                <option>India</option>
                <option>America</option>
                <option>Canada</option>
                <option>China</option>
               </select>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="form-group">
                <label>State</label>
               <select className="form-control">
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>UP</option>
                <option>Andhra</option>
               </select>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="form-group">
                <label>City</label>
               <select className="form-control">
                <option>Chennai</option>
                <option>Madurai</option>
                <option>Ramnad</option>
                <option>Tuticorin</option>
               </select>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="form-group">
                <label>Phone</label>
                <input type={"text"} className="form-control"/>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="form-group">
                <label>DOB</label>
                <input type={"date"} className="form-control"/>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="form-group">
                <label>Gender</label>
               <select className="form-control">
                <option>Male</option>
                <option>Female</option>
               </select>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="form-group">
                <input type={"submit"} className="btn btn-primary"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser