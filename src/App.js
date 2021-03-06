import {BrowserRouter , Routes , Route} from "react-router-dom"

import React from "react";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
function App() {
  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
             <Route path="/" exact element={<Login/>}/>
            </Routes>
        </BrowserRouter> 
  );
}
export default App;
