import React from "react";

type Props = {
  employee: employee;
};

export const Details = ({ employee }: Props) => {
  return (
    <>
      <div className="box-border h-60 w-70 p-4 border-4">
        <h1>{employee.name}</h1>
        <h1>{employee.contactNo}</h1>
        <h1>{employee.email}</h1>
        <h1>{employee.address}</h1>
      </div>
    </>
  );
};
