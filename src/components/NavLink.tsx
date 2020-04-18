import styled from 'styled-components';

export const NavLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 15px 20px;
  position: relative;
  font-weight: 400;
  align-self: flex-end;

  &::after{
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1.5px;
    left: 50%;
    position: absolute;
    background: #16161d;
    transition: width 0.3s ease 0s, left 0.3s ease 0s, opacity 0.3s ease 0s;
    width: 0;
    opacity: 0;
  }

  &:hover::after{
    width: 100%;
    left: 0;
    opacity: 1;
  }

`;

export default NavLink;