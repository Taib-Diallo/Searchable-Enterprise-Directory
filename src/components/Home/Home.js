import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Page, Content, Table, TableRow, TableHeader, TableData, TellMeButton } from './Home.styles'
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
  const navigate = useNavigate();
  const employees = useSelector(store => store.employeesReducer)
  const user = useSelector(store => store.userReducer)
  const { access_level } = useParams();

  useEffect(() => {
    dispatch({ type: 'GET_EMPLOYEES_SAGA', payload: access_level })
  }, []);

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      {employees.length === 0 && user.length === 0 ? (
        <LoadingBar />
      ) : (
      <Page>
        <h2><u>Viewable Employee Database</u></h2>
        <h3>Current Employee: {user[0].name}</h3>
        <Content>
          <Table>
            <thead>
              <TableRow>
                {tableHeaders.map((header, index) => {
                  return (
                    <TableHeader key={index}>{header.title}</TableHeader>
                  )
                })}
              </TableRow>
            </thead>
            <tbody>
              {employees.map((employee, index) => {
                return (
                  <TableRow key={index}>
                    <TableData>{employee.name}</TableData>
                    <TableData>{employee.phone_number}</TableData>
                    <TableData>{employee.job_role}</TableData>
                    <TableData>{employee.work_location}</TableData>
                    <TableData>{employee.salary.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}</TableData>
                  </TableRow>)
              })}
            </tbody>
          </Table>
          <TellMeButton
            m={3}
            onClick={goToLogin}
            sx={{width: 120}}
            variant='contained'
				  >
            Logout
          </TellMeButton>
        </Content>
      </Page>
      )}
    </div>
  );
}

export default Home;
