
import { EmployeeRow } from "../../components/tableRow/tableRow";
import "./employeeList.css";

import { Link, useSearchParams } from "react-router-dom";
import BLUE_CIRCLE from "../../assets/blue-circle-icon.svg"
import plus from '../../assets/plus-icon.svg'

import type { Employee, EmployeeState } from "../../store/employee/employee.types";
import { useAppSelector } from "../../store/store";
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from "../../api-service/employees/employees.api";

// const employeeDatalist= [
//   {
//     id: 1,
//     name: "John",
//     dateOfJoining: "2025-01-23",
//     experience: 3,
//     role: "HR",
//     status: "ACTIVE",
//     employeeId: "dfuy54g85478d8937",
//     address: {
//       line1: "22nd",
//       line2: "Baker Street",
//       houseNo: "22B",
//       pincode: "987890",
//     },
//   },
//   {
//     id: 2,
//     name: "Jane",
//     dateOfJoining: "2025-01-23",
//     experience: 3,
//     role: "HR",
//     status: "INACTIVE",
//     employeeId: "kg5903ej3uhg20943",
//     address: {
//       line1: "22nd",
//       line2: "Baker Street",
//       houseNo: "22B",
//       pincode: "987890",
//     },
//   },
//   {
//     id: 3,
//     name: "Mack",
//     dateOfJoining: "2025-01-23",
//     experience: 3,
//     role: "HR",
//     status: "ACTIVE",
//     employeeId: "f949h2948u3098g",
//     address: {
//       line1: "22nd",
//       line2: "Baker Street",
//       houseNo: "22B",
//       pincode: "987890",
//     },
//   },
//   {
//     id: 4,
//     name: "Max",
//     dateOfJoining: "2025-01-23",
//     experience: 3,
//     role: "HR",
//     status: "PROBATION",
//     employeeId: "nju3he3879e393e",
//     address: {
//       line1: "22nd",
//       line2: "Baker Street",
//       houseNo: "22B",
//       pincode: "987890",
//     },
//   },
// ];




const EmployeeList = () => {
  const newEmployee = useAppSelector((state) => state.employee.employees);
  console.log(newEmployee)
  const [searchParams, setSearchParams] = useSearchParams();
  const employees=useGetEmployeeListQuery({})

  console.log(employees)

  //  const employees=newEmployee.length!==0? newEmployee:employeeDatalist;

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
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="PROBATION">Probation</option>
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
          {(employees.data
            ? (filter && filter !== "All"
                ? employees.data.filter((employee:Employee) => employee.status === getFilter())
                : employees.data
              )
            : []
          ).map((employee:Employee, index) => (
            <EmployeeRow key={index} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
