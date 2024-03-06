import React, { useState } from "react";
import { Button } from "react-bootstrap";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const CreateUser = () => {
   const [name, setName] = useState();
   const [mail, setMail] = useState();
   const [city, setCity] = useState();

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post("http://localhost:3000/createUser", { name, mail, city })
         .then((result) => {
            console.log(result);
            navigate("/");
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="create-user">
         <header className="text-center">Add User</header>
         <div className="d-flex  justify-content-center align-items-center">
            <form className="w-50" onSubmit={handleSubmit}>
               <div className="p-1 input-field">
                  <label>Name</label>
                  <input
                     type="text"
                     placeholder="Enter Your Name"
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div className="p-1 input-field">
                  <label>Mail</label>
                  <input
                     type="text"
                     placeholder="Enter Your Email"
                     onChange={(e) => setMail(e.target.value)}
                  />
               </div>
               <div className="p-1 input-field">
                  <label>City</label>
                  <input
                     type="text"
                     placeholder="Enter Your City"
                     onChange={(e) => setCity(e.target.value)}
                  />
               </div>
               <div className="p-1 py-2 d-flex gap-4 ">
                  <button className="btn btn-primary">Submit</button>
                  <Link to="/" className="btn btn-warning">
                     Cancel
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};
