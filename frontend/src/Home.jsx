import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
   const [users, setUsers] = useState([]);

   // append new items

   useEffect(() => {
      axios
         .get("http://localhost:3000/users/get")
         .then((result) => setUsers(result.data))
         .catch((err) => console.log(err));
   }, []);

   // delete fn

   const handleDelte = (id) => {
      axios
         .delete("http://localhost:3000/deleteUser/" + id)
         .then((res) => {
            console.log(res);
            // window.location.reload();
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="main-content">
         <div className="add-btn">
            <Link to="/create" className="btn btn-success">
               Add
            </Link>
         </div>
         <div>
            <Table striped bordered hover>
               <thead className="">
                  <tr>
                     <th>Name</th>
                     <th>UserName</th>
                     <th>City</th>
                     <th>Options</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, index) => {
                     return (
                        <tr key={index}>
                           <td>{user.name}</td>
                           <td>{user.mail}</td>
                           <td>{user.city}</td>
                           <td className="d-flex gap-3">
                              <Link
                                 to={`/update/${user._id}`}
                                 className="btn btn-primary"
                              >
                                 Update
                              </Link>
                              <button
                                 className="btn btn-danger"
                                 onClick={(e) => handleDelte(user._id)}
                              >
                                 Delete
                              </button>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </Table>
         </div>
      </div>
   );
};
