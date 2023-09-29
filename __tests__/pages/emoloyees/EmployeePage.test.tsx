import { render, screen } from "@testing-library/react";
import EmployeePage from "@/app/employees/page";
import { employeesMock } from "@/constants/EmployeesMock";

describe("Employee Page", () => {
  it("renders employee list", () => {
    render(<EmployeePage employees={employeesMock} />);

    const employeeList = screen.getAllByRole("button");

    expect(employeeList.length).toBe(employeesMock.length);
  });

  it("renders No items Found when employee list is empty", () => {
    render(<EmployeePage employees={[]} />);

    const employeeMessage = screen.getByText("No items Found");

    expect(employeeMessage).toBeInTheDocument();
  });
});
