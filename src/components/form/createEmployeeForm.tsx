import { useState } from "react";
import { CommonForm } from "../common-form/commomForm";
import "./createEmployeeForm.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_ACTION_TYPES, type EmployeeState } from "../../store/employee/employee.types";


export const CreateEmployeeForm = () => {
  const [values, setValues] = useState({
    name: "",
    employeeId:"",
    dateOfJoining: "",
    experience: 0, 
    department: "",
    role: "",
    status: "",
    houseNo: "",
    line1: "",
    line2: "",
    pincode:""
  });


  const employees=useSelector((state:EmployeeState)=>state.employees)
  console.log(employees)
    const dispatch=useDispatch()

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const CreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
  

    dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload: {
            id: employees.length + 1,
            name: values.name,
            dateOfJoining: values.dateOfJoining,
            experience: values.experience,
            role: values.role,
            status: values.status,
            employeeId:values.employeeId,
            departmentId: values.department,
            address: {
                line1: values.line1,
                line2: values.line2,
                houseNo: values.houseNo,
                pincode: values.pincode
            }
        }})
    navigate("/employees");
  };


  

  return (
    <>
      <main>
        <div className="form-head">
          <h2>Create Employee</h2>
        </div>
        <div className="section-container">
          <form>
            <CommonForm isEdit={false}
              values={values}
              onChange={(field, value) =>
                setValues({ ...values, [field]: value })
              }
            ></CommonForm>
            <div className="form-button">
              <Button
                buttonName="Create"
                className="Create"
                id="Create"
                onClick={CreateEmployee}
              ></Button>
              <Button
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
