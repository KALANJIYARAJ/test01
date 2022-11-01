import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function UserCreate() {
  const formik = useFormik(
    {
        initialValues:{
            name :"",
            email :"",
            country :"",
            state :"",
            city :"",
            phone :"",
            dob :"",
            gender :""
        },
        onSubmit :async (values) =>{
           try {
            const userdata = await axios.post("https://635fff92ca0fe3c21aaa41e9.mockapi.io/user",values)
           alert("Success")
        }
           catch(error){
            alert("Error")
           }
           }
        
    }
  );
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={formik.handleSubmit}>
          <div className="col-lg-6">
            <div className="form-group">
              <label>UserName</label>
              <input 
               name="name" 
               onChange={formik.handleChange}
               value ={formik.values.name}
               type={"text"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
              name="email" 
              onChange={formik.handleChange}
              value ={formik.values.email}
               type={"text"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select 
              name="country" 
              onChange={formik.handleChange}
              value ={formik.values.country}
              className="form-control">
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
              <select
              name="state" 
              onChange={formik.handleChange}
              value ={formik.values.state} className="form-control">
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
              <select 
              name="city" 
              onChange={formik.handleChange}
              value ={formik.values.city}
              className="form-control">
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
              <input
              name="phone" 
              onChange={formik.handleChange}
              value ={formik.values.phone} 
              type={"text"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>DOB</label>
              <input
              name="dob" 
              onChange={formik.handleChange}
              value ={formik.values.dob} 
              type={"date"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
              name="gender" 
              onChange={formik.handleChange}
              value ={formik.values.gender}
               className="form-control">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserCreate;
