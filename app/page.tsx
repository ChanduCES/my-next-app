import { employeesMock } from "@/constants/EmployeesMock";
import EmployeePage from "./employees/page";

export default function Home() {
  return (
    <>
      <main className="w-full flex-center">
        <p>Employees</p>
      </main>
      <EmployeePage employees={employeesMock} />
    </>
  );
}
