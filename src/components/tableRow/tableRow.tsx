import React, { useState } from 'react';
import "../../pages/employeeList/employeeList.css"
import BluePencil  from '../../assets/blue-pencil.svg'
import dustbin from '../../assets/dustbin.svg'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { DeletePopup } from '../popup/deletePopup';

export type Status = 'Active' | 'Inactive' | 'Probation';

export interface Employee {
  id:number;
  name: string;
  EmployeeId: string;
  joiningDate: string;
  role: string;
  status: Status;
  experience: string;
  address?:string;
}

export const EmployeeRow = ({ employee }:{employee:Employee}) => {
  
  const [modalOpen,setModalOpen]=useState(false)

 const navigate=useNavigate()

  const handleDelete = () => {
    console.log('Employee deleted');
    setModalOpen(false);
  };

  const goToEmployee=(id: number)=>{
    console.log(id)
    navigate(`${id}`)
  }


  return (
    <div className="employee-row" >
      <div onClick={()=>goToEmployee(employee.id)}>{employee.name}</div>
      <div>{employee.EmployeeId}</div>
      <div>{employee.joiningDate}</div>
      <div>{employee.role}</div>
      <div className={`status ${employee.status.toLowerCase()}`}>{employee.status}</div>
      <div>{employee.experience}</div>
      <div className="actions">
        <button className="delete" onClick={()=>setModalOpen(true)}>
          <img src={dustbin}></img>
        </button>
        
        <Link to={`${employee.id}/update`}>
        <button className="edit">
          <img src={BluePencil}></img>
        </button>
        </Link>
      </div>
      <DeletePopup isOpen={modalOpen} onClose={()=>setModalOpen(false)} onConfirm={handleDelete}></DeletePopup>
    </div>
  );
};
