"use client";

import { Details } from "@/components/details";
import { useState } from "react";

type Props = {
  employees: employee[];
};

export default function EmployeePage({ employees }: Props) {
  const [employee, setEmployee] = useState(employees[0]);

  return (
    <section>
      {employees.length === 0 ? <h1>No items Found</h1> : null}
      <ul className="box-border h-32 w-32 p-4 border-4">
        {employees.map((employee) => (
          <li className="list-group-item" key={employee.id}>
            <button
              onClick={() => {
                setEmployee(employee);
              }}
            >
              {employee.name}
            </button>
          </li>
        ))}
      </ul>
      <div>{employee && <Details employee={employee} />}</div>
    </section>
  );
}
