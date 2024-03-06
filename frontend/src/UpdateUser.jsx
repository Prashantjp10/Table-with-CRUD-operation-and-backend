import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const UpdateUser = () => {
   const { id } = useParams();
   const [name, setName] = useState();
   const [mail, setMail] = useState();
   const [city, setCity] = useState();
   const navigate = useNavigate();

   useEffect(() => {
      axios
         .get("http://localhost:3000/getUser/" + id)
         .then((result) => {
            setName(result.data.name);
            setMail(result.data.mail);
            setCity(result.data.city);
         })
         .catch((err) => console.log(err));
   }, []);

   const handleUpdate = (e) => {
      e.preventDefault();
      axios
         .put("http://localhost:3000/updateUser/" + id, { name, mail, city })
         .then((result) => {
            console.log(result);
            navigate("/");
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="create-user">
         <header className="text-center">Update User</header>
         <div className="d-flex  justify-content-center align-items-center">
            <form className="w-50 p-1" onSubmit={handleUpdate}>
               <div className="p-1 input-field">
                  <label>Name</label>
                  <input
                     type="text"
                     placeholder="Enter Your Name"
                     value={name || ""}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div className="p-1 input-field">
                  <label>Mail</label>
                  <input
                     type="text"
                     placeholder="Enter Your Email"
                     value={mail || ""}
                     onChange={(e) => setMail(e.target.value)}
                  />
               </div>
               <div className="p-1 input-field">
                  <label>City</label>
                  <input
                     type="text"
                     placeholder="Enter Your City"
                     value={city || ""}
                     onChange={(e) => setCity(e.target.value)}
                  />
               </div>
               <div className="p-1">
                  <button className="btn btn-primary">Submit</button>
               </div>
            </form>
         </div>
      </div>
   );
};
