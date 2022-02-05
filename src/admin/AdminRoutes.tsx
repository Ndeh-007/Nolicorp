import React from "react";
import { Redirect, Route } from "react-router-dom"; 
import Admin from "./Admin";  

const AdminRoutes = () => {
  return (
    <> 
        <Route exact path="/admin/">
          <Redirect to="/admin/Services"></Redirect>
        </Route> 
        <Route exact path="/admin/:name">
          <Admin></Admin>
        </Route> 
    </>
  );
};

export default AdminRoutes;
