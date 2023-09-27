import React from "react";

export interface IDetails {
  name: string;
  contactNo: string;
  email: string;
  address: string;
}

export const Details = ({ name, contactNo, email, address }: IDetails) => {
  return (
    <>
      <div className="box-border h-60 w-70 p-4 border-4">
        <h1>{name}</h1>
        <h1>{contactNo}</h1>
        <h1>{email}</h1>
        <h1>{address}</h1>
      </div>
    </>
  );
};
