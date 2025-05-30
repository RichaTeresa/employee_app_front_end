import { useState } from "react";
import { CommonForm } from "../../components/common-form/commomForm";
import "./updateEmployee.css";
import { useNavigate } from "react-router-dom";
import type { Employee } from "../../components/tableRow/tableRow";
import Button from "../../components/button/Button";

export const UpdateEmployeeForm = () => {
  const SampleEmployee = {
    employeeName: "richa",
    employeeId: "id1",
    joiningDate: "15-11-2021",
    experience: 2,
    department: "frontend",
    role: "HR",
    status: "ACTIVE",
    houseNo: "house1",
    line1: "123",
    line2: "456",
    pincode: "789",
  };

  const [values, setValues] = useState({
    employeeName: SampleEmployee.employeeName,
    employeeId: SampleEmployee.employeeId,
    joiningDate: SampleEmployee.joiningDate,
    experience: SampleEmployee.experience,
    department: SampleEmployee.department,
    role: SampleEmployee.role,
    status: SampleEmployee.status,
    houseNo: SampleEmployee.houseNo,
    line1: SampleEmployee.line1,
    line2: SampleEmployee.line2,
    pincode: SampleEmployee.pincode,
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
          <h2 >Edit Employee</h2>
        </div>
        <div className="section-container">
          <form>
            <CommonForm
              isEdit={true}
              values={values}
              onChange={(field, value) =>
                setValues({ ...values, [field]: value })
              }
            ></CommonForm>
            <div className="form-button">
              <Button
                buttonName="Update"
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
