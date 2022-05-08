import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const getdata = async (e) => {
    try {
      const users = await axios.get("http://13.232.117.163:4000/fetchusers");

      setUserdata(users.data.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleDelete = async (id) => {
    await axios.post(`http://13.232.117.163:4000/remove`, { id: id });

    var newuser = getuserdata.filter((item) => {
      console.log(item._id);
      return item._id !== id;
    });
    setUserdata(newuser);
    alert(
      " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n            User has been deleted !!! \n\n ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n"
    );
  };

  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/adduser" className="btn btn-success">
            <strong> Add User </strong>
            </NavLink>
          </div>

          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">Sr. No.</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email ID</th>
                <th scope="col">Contatct</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr key={id} >
                      <th scope="row">{id + 1}</th>
                      <td> {element.firstname} </td>
                      <td> {element.lastname}</td>
                      <td> {element.age}</td>

                      <td> {element.email}</td>
                      <td> {element.phoneNumber}</td>
                      <td>
                        <NavLink
                          to={`/update/${element._id}`}
                          className="btn btn-outline-warning"
                        >
                          <strong> Update </strong>
                        </NavLink>
                      </td>
                      <td>
                        <button
                          type="submit"
                          onClick={() => handleDelete(element._id)}
                          className="btn btn-outline-danger"
                        >
                         <strong> Delete</strong>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
