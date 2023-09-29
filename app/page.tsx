import { employeesMock } from "@/constants/EmployeesMock";
import EmployeePage from "./employees/page";
import PaginationPage from "./pagination/page";

export default function Home() {
  return (
    <>
      {/* <main className="w-full flex-center">
        <p>Employees</p>
      </main>
      <EmployeePage employees={employeesMock} /> */}
      <main className="flex flex-col gap-3 p-5 bg-salt-300 text-pepper-500">
        <PaginationPage />
      </main>
    </>
  );
}
