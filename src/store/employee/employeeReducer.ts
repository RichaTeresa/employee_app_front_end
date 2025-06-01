import type { EmployeeAction, EmployeeState } from "./employee.types";
import { EMPLOYEE_ACTION_TYPES } from "./employee.types";
const initialState: EmployeeState = { employees: [] };

function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeAction
): EmployeeState {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.DELETE:
      console.log(action.payload);
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.employeeId !== action.payload
        ),
      };
    case EMPLOYEE_ACTION_TYPES.UPDATE:
      console.log("update action called");
      console.log(action.payload);
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.employeeId === action.payload.employeeId ? action.payload : employee
        ),
      };

    case EMPLOYEE_ACTION_TYPES.ADD:
      console.log("add action called");
      const newEmployee = action.payload;
      console.log([...state.employees, newEmployee]);
      return {
        ...state,
        employees: [...state.employees, newEmployee],
      };

    default:
      return state;
  }
}

export default employeeReducer;
