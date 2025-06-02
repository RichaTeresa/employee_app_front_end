import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import UncontrolledLogin from "./pages/login/uncontrolledLogin";
import { Layout } from "./components/layout/layout";
import NotFound from "./pages/notFound/notFound";
import { CreateEmployeeForm } from "./components/form/createEmployeeForm";
import { EmployeeDetails } from './pages/employeeDetails/employeeDetails';
import  EmployeeList  from "./pages/employeeList/employeeList";
import { UpdateEmployeeForm } from "./pages/updateEmployee/updateEmployee";
import { Provider } from "react-redux";
import store from "./store/store";


const router=createBrowserRouter([
  {
    path:"/",
    element: <Navigate to="/login"/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/employees",
    element:<Layout/>,
    children:[
      {index:true, element:<EmployeeList/>},
      {path:":id",element:<EmployeeDetails/>},
      {path:"create",element:<CreateEmployeeForm/>},
      {path:":id/update",element:<UpdateEmployeeForm/>}
    ]
  },
  {
    path:"/login/uncontrolled",
    element:<UncontrolledLogin/>
  },
  {
    path:"*",
    element:<NotFound/>
  },
  
])




function App() {
  return (
    <><Provider store={store}>
       <RouterProvider router={router}/>
       {/* <UncontrolledLogin/> */}
      {/* <Login /> */}
      {/* <CreateEmployee/> */}
      </Provider>
    </>
  );
}

export default App;
