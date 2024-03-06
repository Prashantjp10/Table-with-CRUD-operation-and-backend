import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CreateUser } from "./CreateUser";
import { UpdateUser } from "./UpdateUser";

function App() {
   return (
      <>
         <div>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/create" element={<CreateUser />}></Route>
                  <Route path="/update/:id" element={<UpdateUser />}></Route>
               </Routes>
            </BrowserRouter>
         </div>
      </>
   );
}

export default App;
