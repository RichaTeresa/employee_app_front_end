import { useGetDepartmentListQuery } from "../../api-service/department/department.api";
import Button from "../button/Button";
import Input from "../input/input";
import { MultiLineInput } from "../multiLineInput/multiLineInput";
import { Select } from "../select/select";

export const CommonForm = ({
  isEdit,
  values,
  onChange,
}: {
  isEdit: boolean;
  values: {
    name: string;
    employeeId: string;
    dateOfJoining: string;
    experience: number;
    departmentId: number | string;
    role: string;
    status: string;
    email: string;
    age: number;
    password: string;
    houseNo: string;
    line1: string;
    line2: string;
    pincode: string;
  };
  onChange: (field: string, value: string) => void;
}) => {
  const {data:departmentList}=useGetDepartmentListQuery({})

  const isValid = (email:string) => {
       if(email && !email.includes('@'))  
        return (
          <p style={{ color: "red" }}>
            this field must be a valid email!
          </p>
        );
  
    };


  return (
    <>
      <div className="parent-class">
        <div className="form-element-group">
          <Input
            inputId="employee_name"
            inputType="text"
            labelName="Employee Name"
            placeholder="employee_name"
            value={values.name}
            onChange={(e) => onChange("name", e.target.value) }
            required={true}
          ></Input>
        </div>

        <div className="form-element-group">
          <Input
            inputId="joining_date"
            inputType="date"
            labelName="Joining Date"
            placeholder="joining_date"
            value={values.dateOfJoining}
            onChange={(e) => onChange("dateOfJoining", e.target.value)}
            required={true}
          ></Input>
        </div>

        <div className="form-element-group">
          <Input
            inputId="experience"
            inputType="text"
            labelName="Experience"
            placeholder="experience"
            value={values.experience}
            onChange={(e) => onChange("experience", e.target.value)}
            required={true}
          ></Input>
        </div>
        <div className="form-element-group">
          <Select
            selectId="Department"
            selectName="Department"
            items={
              departmentList? 
              departmentList.map((dept: { deptName: string; id: string|number; }) => ({
                    label: dept.deptName,
                    value: dept.id,
                  }))
                : []
            } 
            value={values.departmentId}
            onChange={(e) => onChange("departmentId", e.target.value)}
            required={true}
          ></Select>
        </div>
        <div className="form-element-group">
          <Select
            selectId="Role"
            selectName="Role"
            items={[
              { label: "HR", value: "HR" },
              { label: "DEVELOPER", value: "DEVELOPER" },
              { label: "UI", value: "UI" },
              { label: "UX", value: "UX" },
            ]}
            value={values.role}
            onChange={(e) => onChange("role", e.target.value)}
            required={true}
          ></Select>
        </div>
        <div className="form-element-group">
          <Select
            selectId="Status"
            selectName="Status"
            items={[
              { label: "ACTIVE", value: "ACTIVE" },
              { label: "INACTIVE", value: "INACTIVE" },
              { label: "PROBATION", value: "PROBATION" },
            ]}
            value={values.status}
            onChange={(e) => onChange("status", e.target.value)}
            required={true}
          ></Select>
        </div>
        <div className="form-element-group">
          <Input
            inputId="email"
            inputType="email"
            labelName="Email"
            placeholder="Email"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
            required={true}
          ></Input>
          {isValid(values.email)}
        </div>

        <div className="form-element-group">
          <Input
            inputId="age"
            inputType="number"
            labelName="Age"
            placeholder="Age"
            value={values.age}
            onChange={(e) => onChange("age", e.target.value)}
            required={true}
          ></Input>
        </div>

        <div className="form-element-group">
          <Input
            inputId="password"
            inputType="password"
            labelName="Password"
            placeholder="Password"
            value={values.password}
            onChange={(e) => onChange("password", e.target.value)}
            noPassword={isEdit}
            required={true}
          ></Input>
        </div>

        <div className="form-element-group">
          <MultiLineInput
            inputId="Address"
            labelName="Address"
            lines={[
              {
                id: "houseNo",
                placeholder: "flat no./house no",
                value: values.houseNo,
                onChange: (e) => onChange("houseNo", e.target.value),
              },
              {
                id: "line1",
                placeholder: "line1",
                value: values.line1,
                onChange: (e) => onChange("line1", e.target.value),
              },
              {
                id: "line2",
                placeholder: "line2",
                value: values.line2,
                onChange: (e) => onChange("line2", e.target.value),
              },
              {
                id: "pincode",
                placeholder: "pincode",
                value: values.pincode,
                onChange: (e) => onChange("pincode", e.target.value),
              },
            ]}
          ></MultiLineInput>
        </div>

        <div className="form-element-group">
          <Input
            inputId="Employee Id"
            inputType="text"
            labelName="Employee Id"
            placeholder="Employee Id"
            value={values.employeeId}
            onChange={(e) => onChange("employeeId", e.target.value)}
            disabled={isEdit}  
            required={true}         
          ></Input>
        </div>
      </div>
    </>
  );
};
