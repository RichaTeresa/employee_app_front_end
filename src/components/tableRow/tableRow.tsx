import React, { useState } from "react";
import "../../pages/employeeList/employeeList.css";
import BluePencil from "../../assets/blue-pencil.svg";
import dustbin from "../../assets/dustbin.svg";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { DeletePopup } from "../popup/deletePopup";
import { useDispatch } from "react-redux";
import { EMPLOYEE_ACTION_TYPES, type Employee } from "../../store/employee/employee.types";
import { useDeleteEmployeeMutation, } from "../../api-service/employees/employees.api";

export interface EmployeeList {
  id:number
  name: string;
  dateOfJoining: string;
  experience: number;
  role: string;
  status: string;
  employeeId: string;
  address: {
    line1: string;
    line2: string;
    houseNo: string;
    pincode: string;
  };
}

export const EmployeeRow = ({ employee }: { employee: Employee}) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteEmployee] = useDeleteEmployeeMutation();


  const handleDelete = (id:number) => {
    deleteEmployee({id});
    console.log(`Employee ${id} deleted`);
    setModalOpen(false);
  };

  const goToEmployee = (id: number) => {
    console.log(id);
    navigate(`${id}`);
  };

  return (
    <div className="employee-row">
      <div onClick={() => goToEmployee(employee.id)}>{employee.name}</div>
      <div>{employee.employeeId}</div>
      <div>{employee.dateOfJoining as unknown as string}</div>
      <div>{employee.role}</div>
      <div className={`status ${employee.status.toLowerCase()}`}>
        {employee.status}
      </div>
      <div>{employee.experience}</div>
      <div className="actions">
        <button className="delete" onClick={() => setModalOpen(true)}>
          <img src={dustbin}></img>
        </button>

        <Link to={`${employee.id}/update`}>
          <button className="edit">
            <img src={BluePencil}></img>
          </button>
        </Link>
      </div>
      <DeletePopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={()=>handleDelete(employee.id)}
      ></DeletePopup>
    </div>
  );
};
