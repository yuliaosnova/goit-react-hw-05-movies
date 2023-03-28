import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 5px;
`;

export const Header = styled.header`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 16px;
  box-shadow: 0 7px 17px -16px rgba(0, 0, 0, 1);
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
    text-decoration: underline;
    /* background-color: orangered; */
  }
`;
