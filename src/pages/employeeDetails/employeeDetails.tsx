import { Link, useParams } from "react-router-dom";
import "./employeeDetails.css";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import type { EmployeeList } from "../../components/tableRow/tableRow";
import { DetailElement } from "../../components/detailElement/detailElement";
import BLUE_CIRCLE from "../../assets/blue-circle-icon.svg";
import PENCIL from "../../assets/pencil-icon.svg";
import { useSelector } from "react-redux";
import type { EmployeeState } from "../../store/employee/employee.types";

// const exampleEmployee = {
//   id: 1,
//   name: "John",
//   dateOfJoining: "2025-01-23",
//   experience: 3,
//   role: "HR",
//   status: "Active",
//   employeeId: "dfuy54g85478d8937",
//   line1: "22nd",
//   line2: "Baker Street",
//   houseNo: "22B",
//   pincode: "987890",
// };



export const EmployeeDetails = () => {
  const { id } = useParams();
  console.log(id);

  const newEmployee=useSelector((state:EmployeeState)=>state.employees.find(emp => emp.id.toString() === id));
  console.log(newEmployee)

  if (!newEmployee) return <div>Employee not found.</div>;

  return (
    <>
      <main>
        <div className="form-head">
          <h2>Employee Details</h2>
          <Link to="update" style={{ textDecoration: "none" }}>
            <button className="edit-button">
              <div className="blue-circle">
                <img src={BLUE_CIRCLE}></img>
                <img src={PENCIL} className="pencil"></img>
              </div>
              Edit
            </button>
          </Link>
        </div>
        <div className="form-body">
          <div className="details-body">
            {/* <h4>Employee Id:{id} </h4> */}
            <DetailElement
              detailName="Employee Name"
              detail={newEmployee.name}
            ></DetailElement>
            <DetailElement
              detailName="Joining Date"
              detail={newEmployee.dateOfJoining as unknown as string}
            ></DetailElement>
            <DetailElement
              detailName="Experience"
              detail={newEmployee.experience}
            ></DetailElement>
            <DetailElement
              detailName="Role"
              detail={newEmployee.role}
            ></DetailElement>
            <div className={`status ${newEmployee.status.toLowerCase()}`}>
              <DetailElement
                detailName="Status"
                detail={newEmployee.status}
              ></DetailElement>
            </div>
            <DetailElement
              detailName="Address"
              detail={[newEmployee.address.houseNo,newEmployee.address.line1,newEmployee.address.line2,newEmployee.address.houseNo].join(", ")}
            ></DetailElement>
            <DetailElement
              detailName="Employee Id"
              detail={newEmployee.employeeId}
            ></DetailElement>
          </div>
        </div>
      </main>
    </>
  );
};
