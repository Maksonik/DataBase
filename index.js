class EmployeeDB {
    constructor() {
        this.employees = [];
    }

    clone() {
        const clonedDB = new EmployeeDB();
        clonedDB.employees = JSON.parse(JSON.stringify(this.employees));
        return clonedDB;
    }

    merge(otherDB) {
        const mergedDB = this.clone();
        otherDB.employees.forEach(employee => {
            mergedDB.addEmployee(employee.name, employee.position, employee.department);
        });
        return mergedDB;
    }

    addEmployee(name, position, department) {
        const employee = { name, position, department };
        this.employees.push(employee);
    }

    deleteEmployee(name) {
        this.employees = this.employees.filter(employee => employee.name !== name);
        console.log(`Employee ${name} is removed`)
    }


    updateEmployee(name, position, department) {
        const employee = this.employees.find(emp => emp.name === name);
        if (employee) {
            if (position) employee.position = position;
            if (department) employee.department = department;
            console.log(`Info Employee ${name} is updated`)
        }
    }

    getEmployees() {
        return this.employees.forEach((Employee) => console.log(Employee));
    }

    uniqueDepartments() {
        const departments = {};
        for (const employee of this.employees) {
            const { department } = employee;
            departments[department] = true;
        }
        return Object.keys(departments);
    }

    _capitalizeNames() {
        this.employees.forEach(employee => {
            employee.name = employee.name.slice(0,1).toUpperCase() + employee.name.slice(1).toLowerCase();
        });
    }

    _lowercaseDepartments() {
        this.employees.forEach(employee => {
            employee.department = employee.department.toLowerCase();
        });
    }
}


const db = new EmployeeDB();

