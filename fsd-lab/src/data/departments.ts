import type { Department } from "../models/departments";
import { employees } from "./employees";

export const departments: Department[] = [
    {
        name: "Accounting",
        employees: employees.filter(employee => employee.department === "Accounting")
    },
    {
        name: "Human Resources",
        employees: employees.filter(e => e.department === "Human Resources")
    },
    {
        name: "IT",
        employees: employees.filter(e => e.department === "IT")
    }

]