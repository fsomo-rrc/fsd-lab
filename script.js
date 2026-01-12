// Employee and Department Data
const departments = [
    {
        name: "Accounting",
        employees: [
            { firstName: "Leonardo", lastName: "DiCaprio" },
            { firstName: "Emma", lastName: "Stone" }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            { firstName: "Kevin", lastName: "Hart" },
            { firstName: "Adam", lastName: "Sandler" }
        ]
    },
    {
        name: "IT",
        employees: [
            { firstName: "Jack", lastName: "Black" },
            { firstName: "Jim", lastName: "Carrey" }
        ]
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("employee-directory");

    departments.forEach(dept => {
        const section = document.createElement("section");

        const heading = document.createElement("h2");
        heading.textContent = dept.name;

        const list = document.createElement("ul");

        dept.employees.forEach(emp => {
            const li = document.createElement("li");
            li.textContent = emp.lastName
                ? `${emp.firstName} ${emp.lastName}`
                : emp.firstName;
            list.appendChild(li);
        });

        section.appendChild(heading);
        section.appendChild(list);
        directory.appendChild(section);
    });

    document.getElementById("year").textContent = new Date().getFullYear();
});
