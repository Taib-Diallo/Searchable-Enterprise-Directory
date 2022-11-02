import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Page, Content } from './Home.styles'
import LoadingBar from '../LoadingBar/LoadingBar';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {1 === 0 ? (
        <LoadingBar />
      ) : (
      <Page>
        <Content>
          <h1>Home Page</h1>
        </Content>
      </Page>
      )}
    </div>
  );
}

export default Home;
