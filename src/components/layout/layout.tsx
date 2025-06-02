import * as React from "react";
import "./layout.css";
import { Sidebar } from "../sidebar/sidebar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { CreateEmployeeForm } from "../form/createEmployeeForm";





export const Layout = () => {

    const isLoggedIn=()=>{
  const token=localStorage.getItem("token");
  if(token)
   { return true;}
  return false
}
 
if(!isLoggedIn()){
    return<Navigate to="/"></Navigate>
}
    


  return (
    <div>
      <Sidebar />

      <Outlet />
    </div>
  );
};
