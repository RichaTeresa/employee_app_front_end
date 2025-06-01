import { useState } from "react";
import { CommonForm } from "../../components/common-form/commomForm";
import "./updateEmployee.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_ACTION_TYPES, type EmployeeState } from "../../store/employee/employee.types";

export const UpdateEmployeeForm = () => {
  

  const { id } = useParams();
  const employee = useSelector((state:EmployeeState)=>state.employees.find(emp => emp.id.toString() === id)
  );
   const dispatch = useDispatch();

  
  const [values, setValues] = useState({
      name:employee?.name||"",
      employeeId:employee?.employeeId||"",
      dateOfJoining: employee?.dateOfJoining||"",
      experience: employee?.experience||0, 
      department: employee?.departmentId||"",
      role: employee?.role||"",
      status: employee?.status||"",
      email: employee?.email||"",
      password: employee?.password||"",
      age: employee?.age||0,
      houseNo: employee?.address?.houseNo||"",
      line1: employee?.address?.line1||"",
      line2: employee?.address?.line2||"",
      pincode: employee?.address?.pincode||""
    });


  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/employees");
  };

  const UpdateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
     if (!employee) {
    console.error("Employee not found");
    return;
  }

  dispatch({
    type: EMPLOYEE_ACTION_TYPES.UPDATE,
    payload: {
      id: employee.id,
      name: values.name,
      dateOfJoining: values.dateOfJoining,
      experience: values.experience,
      role: values.role,
      status: values.status,
      email: values.email,
      password: values.password,
      age: values.age,
      employeeId: values.employeeId,
      departmentId: values.department,
      address: {
        line1: values.line1,
        line2: values.line2,
        houseNo: values.houseNo,
        pincode: values.pincode
      }
    }
  });

    navigate("/employees");
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
                type="submit"
                buttonName="Update"
                className="Create"
                id="Create"
                onClick={UpdateEmployee}
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
