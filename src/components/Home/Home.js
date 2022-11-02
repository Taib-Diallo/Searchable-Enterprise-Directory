import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Page, Content, Table, TableRow, TableHeader, TableData } from './Home.styles'
import LoadingBar from '../LoadingBar/LoadingBar';

const tableHeaders = [
  {
    title: 'Name',
  },
  {
    title: 'Phone Number',
  },
  {
    title: 'Job Role',
  },
  {
    title: 'Work Location',
  },
  {
    title: 'Salary',
  },
];

function Home() {
  const dispatch = useDispatch();
  const employees = useSelector(store => store.employeesReducer)

  useEffect(() => {
    dispatch({ type: 'GET_EMPLOYEES_SAGA'})
  }, []);

  return (
    <div>
      {employees.length === 0 ? (
        <LoadingBar />
      ) : (
      <Page>
        <Content>
          <h1>Employee(s) Information</h1>
          <Table>
            <TableRow>
              {tableHeaders.map((header, index) => {
                return (
                  <TableHeader key={index}>{header.title}</TableHeader>
                )
              })}
            </TableRow>
            {employees.map((employee, index) => {
            return (
              <TableRow key={index}>
                <TableData>{employee.name}</TableData>
                <TableData>{employee.phone_number}</TableData>
                <TableData>{employee.job_role}</TableData>
                <TableData>{employee.work_location}</TableData>
                <TableData>{employee.salary}</TableData>
              </TableRow>)
            })}
          </Table>
        </Content>
      </Page>
      )}
    </div>
  );
}

export default Home;
