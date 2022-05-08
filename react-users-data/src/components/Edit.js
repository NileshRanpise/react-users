import React, { useState, useEffect } from "react";
import { NavLink,useHistory, useParams } from "react-router-dom";
import axios from "axios";



const Register = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const history = useHistory("");

 
  const [inpval, setINP] = useState({
    firstname: "",
    lastname: "",
    age: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const setdata = (e) => {

    console.log(e.target.value);
    
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {

    try {
      const students = await axios.get("http://13.232.117.163:4000/fetchusers");

      // setUserdata(students.data.data);
      setINP(students.data.data[0]);
    } catch (error) {
      console.log("Something is Wrong");
    }

  
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
  
    e.preventDefault();

    try {
      await axios.post(`http://13.232.117.163:4000/update/`, inpval)
      alert(" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n            User's Data Updated !!! \n\n ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n");
      history.push("/");
 
    } catch (error) {
      console.log("Something is Wrong");
     }
    

  };


  return (
    <div className="container mt-5">
      <NavLink to="/" className="btn btn-outline-dark" >Home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              firstname
            </label>
            <input
              type="text"
              value={inpval.firstname}
              onChange={setdata}
              name="firstname"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              lastname
            </label>
            <input
              type="text"
              value={inpval.lastname}
              onChange={setdata}
              name="lastname"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              age
            </label>
            <input
              type="text"
              value={inpval.age}
              onChange={setdata}
              name="age"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              value={inpval.phoneNumber}
              onChange={setdata}
              name="phoneNumber"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              password
            </label>
            <input
              type="password"
              value={inpval.password}
              onChange={setdata}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" onClick={updateuser} className="btn btn-outline-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
