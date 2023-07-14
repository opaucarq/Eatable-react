import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Edit from "./pages/Edit";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Product from "./pages/Product";

function App() {
  
  return (
    <div style={{ minHeight: "calc(100% - 200px)", paddingBottom: "100px" }}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element = {
              <>
                <Main></Main>
              </>
            }
          />
          <Route 
            path="/show/:id" 
            element={
              <>
                <Product></Product>
              </>
            }
          />
          <Route 
            path="/edit/:id" 
            element = {
              <Edit></Edit>
            } 
          />
          <Route
            path="/create"
            element = {
              <Create></Create>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
