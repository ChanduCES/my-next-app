import { render, screen } from "@testing-library/react";
import { Details } from "@/components/details";
import { employeesMock } from "@/constants/EmployeesMock";

describe("Details", () => {
  let employees = employeesMock;
  let employee = employees[0];
  it("renders all details", () => {
    render(<Details employee={employee} />);

    const name = screen.getByText(employee.name);
    const address = screen.getByText(employee.address);
    const email = screen.getByText(employee.email);
    const contactNo = screen.getByText(employee.contactNo);

    expect(name).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(contactNo).toBeInTheDocument();
  });
});
