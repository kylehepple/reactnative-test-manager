import { EMPLOYEE_UPDATE } from './EmployeeTypes';

export const employeeUpdate = config => ({
    payload: config,
    type: EMPLOYEE_UPDATE
});