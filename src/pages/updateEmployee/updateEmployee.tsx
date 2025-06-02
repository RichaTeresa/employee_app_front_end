import { useState } from "react";
import { CommonForm } from "../../components/common-form/commomForm";
import "./updateEmployee.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_ACTION_TYPES, type EmployeeState, type Role, type Status } from "../../store/employee/employee.types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { UpdateEmployee } from "../../store/employee/employeeReducer";
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from "../../api-service/employees/employees.api";

export const UpdateEmployeeForm = () => {
  

  const { id } = useParams();
  // const employee = useAppSelector(state=>state.employee.employees.find(emp => emp.employeeId.toString() === id))
  const {data:employee}=useGetEmployeeByIdQuery({id})
  console.log(employee)
  const [updateEmployeeApi] = useUpdateEmployeeMutation();
  
  const [values, setValues] = useState({
      id: employee?.id || 0,
      name: employee?.name || "",
      employeeId: employee?.employeeId || "",
      dateOfJoining: employee?.dateOfJoining as unknown as string || "",
      experience: employee?.experience || "" as unknown as number,
      departmentId: employee?.departmentId || "", // <-- Add this line
      role: employee?.role || "" as Role,
      status: employee?.status || "" as Status,
      email: employee?.email || "",
      password: employee?.password || "",
      age: employee?.age || "" as unknown as number,
      houseNo: employee?.address?.houseNo || "",
      line1: employee?.address?.line1 || "",
      line2: employee?.address?.line2 || "",
      pincode: employee?.address?.pincode || ""
    });


  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/employees");
  };

  const editEmployee = async(e: React.FormEvent) => {
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
    deptId: Number(values.departmentId), // ✅ Must be deptId
    address: {
      line1: values.line1,
      line2: values.line2,
      houseNo: values.houseNo,
      pincode: values.pincode,
    },
  };

  try {
    await updateEmployeeApi({ id: values.id, payload }).unwrap();
    navigate("/employees"); // or any success route
  } catch (err) {
    console.error("Update failed", err);
    // Show error message to user if needed
  }
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
