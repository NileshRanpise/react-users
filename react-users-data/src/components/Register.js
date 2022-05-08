import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
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

  const addinpdata = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://13.232.117.163:4000/adduser`, inpval);

      alert(
        " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n            Added New User !!! \n\n ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n"
      );
      history.push("/");
    } catch (error) {
      console.log("Something is Wrong");
      alert("error");
    }
  };

  return (
    <div className="container mt-5 needs-validation">
      <NavLink to="/" className="btn btn-outline-dark">
        Home
      </NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label" required>
              First Name
            </label>
            <input
              type="text"
              value={inpval.firstname}
              onChange={setdata}
              name="firstname"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Last Name
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
            <label for="validationDefaultUsername" className="form-label">
              Email ID
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
              Age
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
              Mobile No.
            </label>
            <input
              type="number"
              value={inpval.phoneNumber}
              onChange={setdata}
              min={10}
              required
              name="phoneNumber"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={inpval.password}
              onChange={setdata}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              minLength={10}
              maxLength={12}
              required
            />
          </div>

          <button
            type="submit"
            onClick={addinpdata}
            className="btn btn-outline-dark"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
