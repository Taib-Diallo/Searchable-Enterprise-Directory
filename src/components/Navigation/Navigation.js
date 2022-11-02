import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import searchable from '../../images/searchable.png';
import { Loading, Header, NavContainer, NavMain, NavLogo, Logo, NavTitle } from './Navigation.styles';

function Navigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {1 === 0 ? (
        <Loading>
        </Loading>
      ) :
      <Header>
        <NavContainer>
          <NavMain>
            <NavLogo to='/home'>
              <Logo
                alt={'Hackathon'}
                src={searchable}
              />
            </NavLogo>
            <NavTitle to='/home'>
              Searchable Enterprise Directory
            </NavTitle>
          </NavMain>
        </NavContainer>
      </Header>
      }
    </div>
  );
}

export default Navigation;
