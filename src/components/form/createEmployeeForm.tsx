import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import { CommonForm } from "../common-form/commomForm";
import "./createEmployeeForm.css";
import Button from "../button/Button";
import {  type EmployeeState ,type Role,type Status} from "../../store/employee/employee.types";
import { useCreateEmployeeMutation } from "../../api-service/employees/employees.api";


export const CreateEmployeeForm = () => {
  const [values, setValues] = useState({
    name: "",
    employeeId:"",
    dateOfJoining: new Date().toISOString().split("T")[0], 
    experience: "" as unknown as number, 
    departmentId: ""as unknown as number,
    role: "" as Role,
    status: "" as Status,
    email: "",
    password: "",
    age:"" as unknown as number,
    houseNo: "",
    line1: "",
    line2: "",
    pincode:""
  });
  

  const [error, setError] = useState("");
//  const employees=useAppSelector(state=>state.employee.employees)
 const [createEmployeeApi] = useCreateEmployeeMutation();

  
  // console.log(employees)


  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/employees");
  };

  const CreateEmployee = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    id: 0, 
    employeeId: values.employeeId,
    dateOfJoining: new Date(values.dateOfJoining),
    status: values.status,
    experience: Number(values.experience),
    name: values.name,
    email: values.email,
    age: Number(values.age),
    role: values.role,
    deptId: Number(values.departmentId),
    password: values.password,
    address: {
      houseNo: values.houseNo,
      line1: values.line1,
      line2: values.line2,
      pincode: values.pincode,
    },
  };
   
  createEmployeeApi(payload).unwrap()
  .then(()=>{
    navigate("/employees");
  })
  .catch((error)=>{
    console.log(error.data.message)
    setError("Employee could not be created")
  })
};


  return (
    <>
      <main>
        <div className="form-head">
          <h2>Create Employee</h2>
        </div>
        <div className="section-container">
          <form onSubmit={CreateEmployee}>
            <CommonForm isEdit={false}
              values={values}
              onChange={(field, value) =>
                setValues({ ...values, [field]: value })
              }
            ></CommonForm>
            <p style={{ color: "red" }}>{error}</p>
            <div className="form-button">
              <Button
                type="submit"
                buttonName="Create"
                className="Create"
                id="Create"
              ></Button>
              <Button
                type="reset"
                buttonName="Cancel"
                className="Cancel"
                id="Cancel"
                onClick={handleCancel}
              ></Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
