import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  Label,
  Input,
  TellMe,
  Page,
  Content,
  Table,
  TableRow,
  TableHeader,
  TableData,
  TellMeButton,
  TopSecret,
} from "./Home.styles";
import LoadingBar from "../LoadingBar/LoadingBar";
import SadBar from "../SadBar/SadBar";
import axios from "axios";
import Select from "react-select";
import topSecret from "../../images/top-secret.png";

const tableHeaders = [
  {
    label: "Name",
  },
  {
    label: "Phone Number",
  },
  {
    label: "Job Role",
  },
  {
    label: "Work Location",
  },
  {
    label: "Salary",
  },
];

const options = [
  {
    label: "Name",
  },
  {
    label: "Phone Number",
  },
  {
    label: "Job Role",
  },
  {
    label: "Work Location",
  },
];

function Home() {
  const navigate = useNavigate();
  const { employee_no } = useParams();
  const [employees, setEmployees] = useState([]);
  const [relevantEmployees, setRelevantEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState([]);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState({ label: "Name" });

  useEffect(() => {
    // get all employees
    getEmployees().then((response) => {
      // set the employees
      setEmployees(response);
      let current = response.filter((employee) => {
        return Number(employee_no) === employee.employee_no;
      });
      // set the current employee
      setCurrentEmployee(current);
    });
  }, [employee_no]);

  useEffect(() => {
    // get all employees
    if (employees.length > 0) {
      setRelevantEmployees(employees);
    }
  }, [employees]);

  const getEmployees = async () => {
    const response = await axios.get(`/directory/${employee_no}`);
    return response.data;
  };

  const fastSearch = (event) => {
    setSearch(event.target.value);
    let selectedOption;
    let warp = employees.filter((employee) => {
      if (option.label === "Name") {
        selectedOption = employee.name.toLowerCase();
      } else if (option.label === "Phone Number") {
        selectedOption = employee.phone_number;
      } else if (option.label === "Job Role") {
        selectedOption = employee.job_role.toLowerCase();
      } else if (option.label === "Work Location") {
        selectedOption = employee.work_location.toLowerCase();
      }
      if (selectedOption.includes(event.target.value.toLowerCase())) {
        return employee;
      }
    });
    setRelevantEmployees(warp);
  };

  return (
    <div>
      {!currentEmployee[0] ? (
        <LoadingBar />
      ) : (
        <Page>
          <h2>
            <u>Viewable Employee Database</u>
          </h2>
          <h3>Current Employee: {currentEmployee[0].name}</h3>
          <Form>
            <Content>
              <TellMe>
                <Label htmlFor="username">
                  Filter Search:
                  <Input
                    type="text"
                    name="username"
                    required
                    value={search}
                    onChange={fastSearch}
                  />
                  <Select
                    defaultValue={{ label: "Name", value: 1 }}
                    options={options}
                    value={option}
                    onChange={(event) => setOption(event)}
                  />
                </Label>
              </TellMe>
            </Content>
          </Form>
          {relevantEmployees.length === 0 ? (
            <SadBar />
          ) : (
            <Content>
              <Table>
                <thead>
                  <TableRow>
                    {tableHeaders.map((header, index) => {
                      return (
                        <TableHeader key={index}>{header.label}</TableHeader>
                      );
                    })}
                  </TableRow>
                </thead>
                <tbody>
                  {relevantEmployees.map((employee, index) => {
                    return (
                      <TableRow key={index}>
                        <TableData>{employee.name}</TableData>
                        <TableData>{employee.phone_number}</TableData>
                        <TableData>{employee.job_role}</TableData>
                        <TableData>{employee.work_location}</TableData>
                        {currentEmployee[0].employee_no === employee.employee_no || currentEmployee[0].access_level - employee.access_level === 1 || currentEmployee[0].access_level === 2 ? (
                          <TableData>
                          {employee.salary.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </TableData>
                        ) : (
                          <TableData>
                            <TopSecret src={topSecret} alt="top-secret" />
                          </TableData>
                        )}
                      </TableRow>
                    );
                  })}
                </tbody>
              </Table>
              <TellMeButton
                m={3}
                onClick={(event) => navigate("/login")}
                sx={{ width: 120 }}
                variant="contained"
              >
                Logout
              </TellMeButton>
            </Content>
          )}
        </Page>
      )}
    </div>
  );
}

export default Home;
