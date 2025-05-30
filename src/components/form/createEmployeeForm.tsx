import { useState } from "react";
import { CommonForm } from "../common-form/commomForm";
import "./createEmployeeForm.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../button/Button";

export const CreateEmployeeForm = () => {
  const [values, setValues] = useState({
    employeeName: "",
    employeeId:"",
    joiningDate: "",
    experience: 0,
    department: "",
    role: "",
    status: "",
    houseNo: "",
    line1: "",
    line2: "",
    pincode:""
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const CreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
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
