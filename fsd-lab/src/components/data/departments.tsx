import type { Employee } from "../.././models/employees";
import { Employee  as EmployeeComponent } from "./employees";

export function Department({
    name,
    employees
}: {
    name: string;
    employees: Employee[];
}) {
    return (
        <section className="m-5 p-4 bg-[#e2e8ec] rounded">
            <h2 className="text-xl font-semibold mb-3">{name}</h2>

            <div className="space-y-2">
                {employees.map((employee) => (
                    <EmployeeComponent 
                    key={employee.lastName}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    />
                ))}
            </div>
        </section>
    );
}
