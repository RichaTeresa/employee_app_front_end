import React, { useRef } from "react";
import { EmployeeRow } from "../../components/tableRow/tableRow";
import "./employeeList.css";
import type { Employee, Status } from "../../components/tableRow/tableRow";
import { Link, useSearchParams } from "react-router-dom";
import BLUE_CIRCLE from "../../assets/blue-circle-icon.svg"
import plus from '../../assets/plus-icon.svg'

const employeeData: Employee[] = [
  {
    id: 1,
    name: "Vishal M",
    EmployeeId: "Lazada",
    joiningDate: "12.04.2021",
    role: "Full Stack",
    status: "Inactive" as Status,
    experience: "5 Years",
  },
  {
    id: 2,
    name: "Susan Kurian",
    EmployeeId: "XYZ",
    joiningDate: "12.04.2021",
    role: "UI Engineer",
    status: "Probation" as Status,
    experience: "7 Years",
  },
  {
    id: 3,
    name: "Yugesh",
    EmployeeId: "XYZ",
    joiningDate: "12.04.2021",
    role: "Devops",
    status: "Active" as Status,
    experience: "6 Years",
  },
];

const EmployeeList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilter = () => {
    const filter = searchParams.get("filter");
    console.log(filter);
    return filter;
  };

  const filter = getFilter();

  return (
    <div className="employee-container">
      <div className="employee-list-wrapper">
        <div className="employee-list-header-row">
          <h2 className="employee-title">Employee List</h2>
          <div className="header-controls">
            <label>Filter By</label>
            <select
              className="status-filter"
              onChange={(event) => {
                const newSearchParam = new URLSearchParams(searchParams);
                newSearchParam.set("filter", event.target.value);
                setSearchParams(newSearchParam);
              }}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Probation">Probation</option>
            </select>
            <Link to="create" style={{textDecoration:"none"}}>
              <button className="edit-button">
            <div className="blue-circle">
            <img src={BLUE_CIRCLE} ></img>
            <img src={plus} className="plus-icon"></img>
            </div>
              Create </button>
            </Link>
          </div>
        </div>
        <div className="employee-list">
          <div className="employee-row header">
            <div>Employee Name</div>
            <div>Employee ID</div>
            <div>Joining Date</div>
            <div>Role</div>
            <div>Status</div>
            <div>Experience</div>
            <div>Action</div>
          </div>
          {(filter && filter !== ("All" as Status)
            ? employeeData.filter((employee) => employee.status === getFilter())
            : employeeData
          ).map((employee, index) => (
            <EmployeeRow key={index} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
