import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Page, Content } from './Home.styles'
import LoadingBar from '../LoadingBar/LoadingBar';

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
          <h1>Home Page</h1>
          {JSON.stringify(employees)}
        </Content>
      </Page>
      )}
    </div>
  );
}

export default Home;
