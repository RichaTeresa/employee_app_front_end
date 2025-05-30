import { Link, useParams } from "react-router-dom";
import "./employeeDetails.css";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import type { Employee, Status } from "../../components/tableRow/tableRow";
import { DetailElement } from '../../components/detailElement/detailElement';
import BLUE_CIRCLE from "../../assets/blue-circle-icon.svg"
import PENCIL from "../../assets/pencil-icon.svg"

const exampleEmployee: Employee = {
  id:1,
  EmployeeId: "lazada",
  name: "Vishal",
  joiningDate: "01-12-2024",
  role: "HR",
  status: "Inactive",
  experience: "2yrs",
  address: "housename, line1 street name, line2 place name",
};


export const EmployeeDetails = () => {
  const { id } = useParams();
  console.log(id)

  return (
    <>
      <main>
        <div className="form-head">
          <h2>Employee Details</h2>
          <Link to="update" style={{textDecoration:"none"}}>
          <button className="edit-button">
            <div className="blue-circle">
            <img src={BLUE_CIRCLE} ></img>
            <img src={PENCIL} className="pencil"></img>
            </div>
            Edit</button>
            </Link>
        </div>
        <div className="form-body">
          <div className="details-body">
          {/* <h4>Employee Id:{id} </h4> */}
          <DetailElement
            detailName="Employee Name"
            detail={exampleEmployee.name}
          ></DetailElement>
          <DetailElement
            detailName="Joining Date"
            detail={exampleEmployee.joiningDate}
          ></DetailElement>
          <DetailElement
            detailName="Experience"
            detail={exampleEmployee.experience}
          ></DetailElement>
          <DetailElement
            detailName="Role"
            detail={exampleEmployee.role}
          ></DetailElement>
          <div className={`status ${exampleEmployee.status.toLowerCase()}`}>
          <DetailElement
            detailName="Status"
            detail={exampleEmployee.status}
          ></DetailElement>
          </div>
          <DetailElement
            detailName="Address"
            detail={exampleEmployee.address}
          ></DetailElement>
          <DetailElement
            detailName="Employee Id"
            detail={exampleEmployee.EmployeeId}
          ></DetailElement>
          </div>
        </div>
      </main>
    </>
  );
};
