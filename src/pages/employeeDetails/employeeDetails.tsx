import { Link, useParams } from "react-router-dom";
import "./employeeDetails.css";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";

import { DetailElement } from "../../components/detailElement/detailElement";
import BLUE_CIRCLE from "../../assets/blue-circle-icon.svg";
import PENCIL from "../../assets/pencil-icon.svg";
import { useSelector } from "react-redux";
import type { EmployeeState } from "../../store/employee/employee.types";
import { useAppSelector } from "../../store/store";
import { useGetEmployeeByIdQuery } from "../../api-service/employees/employees.api";



export const EmployeeDetails = () => {
  
  const { id } = useParams();
  console.log(id);
  const {data:newEmployee}=useGetEmployeeByIdQuery({id})
  
  function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = String(date.getFullYear()).slice(-2); 
  return `${day}-${month}-${year}`;
}

  console.log(newEmployee)

  if (!newEmployee) return (
    <main>
    <div className="form-head">
          <h2>Employee Details</h2>
  </div>
  <div className="error-body">
    <h3>Employee {id} does not exist!</h3>
  </div>
</main>
  )

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
              detail={formatDate(newEmployee.dateOfJoining as unknown as string)}
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
