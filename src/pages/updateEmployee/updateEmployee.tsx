import { useEffect, useState } from "react";
import { CommonForm } from "../../components/common-form/commomForm";
import "./updateEmployee.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";

import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeState,
  type Role,
  type Status,
} from "../../store/employee/employee.types";

import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../../api-service/employees/employees.api";

export const UpdateEmployeeForm = () => {
  const { id } = useParams();
  // const employee = useAppSelector(state=>state.employee.employees.find(emp => emp.employeeId.toString() === id))
  const { data: employee } = useGetEmployeeByIdQuery({ id });
  const [updateEmployeeApi] = useUpdateEmployeeMutation();

  function formatDate(dateString: string): string {
    const date=new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = String(date.getFullYear()); 
  return `${year}-${month}-${day}`;
}

  const [values, setValues] = useState({
    id: 0,
    name: "",
    employeeId: "",
    dateOfJoining: "",
    experience: "" as unknown as number,
    departmentId: "",
    role: "" as Role,
    status: "" as Status,
    email: "",
    password: "",
    age: "" as unknown as number,
    houseNo: "",
    line1: "",
    line2: "",
    pincode: "",
  });

  useEffect(() => {
    if (employee) {
      setValues({
      id: employee.id,
      name: employee.name,
      employeeId: employee.employeeId,
      dateOfJoining:formatDate(employee.dateOfJoining),
      experience: employee.experience,
      departmentId: employee.departmentId,
      role: employee.role,
      status: employee.status,
      email: employee.email,
      password: employee.password,
      age: employee.age,
      houseNo: employee.address.houseNo,
      line1: employee.address.line1,
      line2: employee.address.line2,
      pincode: employee.address.pincode,
    });
    }
  }, [employee]);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/employees");
  };

  const editEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      id: values.id,
      employeeId: values.employeeId,
      name: values.name,
      dateOfJoining: values.dateOfJoining,
      experience: Number(values.experience),
      role: values.role,
      status: values.status,
      email: values.email,
      password: values.password,
      age: Number(values.age),
      deptId: Number(values.departmentId),
      address: {
        line1: values.line1,
        line2: values.line2,
        houseNo: values.houseNo,
        pincode: values.pincode,
      },
    };

    try {
      await updateEmployeeApi({ id: values.id, payload }).unwrap();
      console.log("payload" ,payload)
      navigate("/employees");
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <>
      <main>
        <div className="form-head">
          <h2>Edit Employee</h2>
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
                onClick={editEmployee}
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
