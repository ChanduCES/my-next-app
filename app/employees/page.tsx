"use client";

import { Details } from "@/ui/details/details";
import Link from "next/link";
import { useState } from "react";

export default function EmployeePage() {
  let employees: Array<employee> = [
    {
      id: "1",
      name: "Chandu",
      contactNo: "9578900000",
      email: "chandu@gmail.com",
      address: "898 Raina Squares, Wyoming",
    },
    {
      id: "2",
      name: "Sam",
      contactNo: "8507506500",
      email: "sam123@gmail.com",
      address: "93071 Aufderhar Skyway, New york",
    },
  ];
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
      <div>
        <Details
          name={employee.name}
          address={employee.address}
          email={employee.email}
          contactNo={employee.contactNo}
        />
      </div>
    </section>
  );
}
