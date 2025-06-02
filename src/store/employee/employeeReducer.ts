import { createSlice, current, type PayloadAction } from "@reduxjs/toolkit";
import type { Employee, EmployeeAction, EmployeeState } from "./employee.types";
import { EMPLOYEE_ACTION_TYPES } from "./employee.types";


const initialState: EmployeeState = { employees: [] };

export const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    UpdateEmployee:(state,action:PayloadAction<Employee>)=>{
      console.log("update called",action.payload)
      state.employees.map((employee) =>
      employee.employeeId === action.payload.employeeId ? action.payload : employee
      )
      console.log("next state",current(state.employees))
    },
    DeleteEmployee:(state,action:PayloadAction<string>)=>{
      state.employees.filter(
          (employee) => employee.employeeId !== action.payload
        )
    }
  },
});

export const { addEmployee } = employeeSlice.actions;
export const { UpdateEmployee}=employeeSlice.actions;
export const {DeleteEmployee} =employeeSlice.actions;

export default employeeSlice.reducer;

// function employeeReducer(
//   state: EmployeeState = initialState,
//   action: EmployeeAction
// ): EmployeeState {
//   switch (action.type) {
//     case EMPLOYEE_ACTION_TYPES.DELETE:
//       console.log(action.payload);
//       return {
//         ...state,
//         employees: state.employees.filter(
//           (employee) => employee.employeeId !== action.payload
//         ),
//       };
//     case EMPLOYEE_ACTION_TYPES.UPDATE:
//       console.log("update action called");
//       console.log(action.payload);
//       return {
//         ...state,
//         employees: state.employees.map((employee) =>
//           employee.employeeId === action.payload.employeeId ? action.payload : employee
//         ),
//       };

//     case EMPLOYEE_ACTION_TYPES.ADD:
//       console.log("add action called");
//       const newEmployee = action.payload;
//       console.log([...state.employees, newEmployee]);
//       return {
//         ...state,
//         employees: [...state.employees, newEmployee],
//       };

//     default:
//       return state;
//   }
// }

// export default employeeReducer;
