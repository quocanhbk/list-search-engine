import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMsal } from '@azure/msal-react';
import styled, { css } from 'styled-components';
import { BsList, BsThreeDotsVertical } from 'react-icons/bs';
import Avatar from './Avatar';
import Context from '../Context';
import ThemeToggle from './ThemeToggle';
import pageList from '../pageList';
import { navigate } from '@reach/router';
import { getFader } from '../utils/color';
import useClickOutside from '../hooks/useClickOutside';
import { IconWrapper } from '../components/SearchEngine/ListToolbar';

// Hard Coded the background-color, not gonna bother with this thing
// C'mon man!
const SidebarContainer = styled.div`
  position: ${(props) => (props.mobile ? 'absolute' : 'static')};
  height: 100%;
  z-index: 1300;
  background-color: ${(props) => props.theme.color.background.secondary};
  padding-top: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
  flex: 5;
  display: flex;
  flex-direction: column;
  max-width: 408px;
  min-width: 280px;
`;

const Logo = styled.img`
  height: 64px;
`;

const UserDisplayCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  border: 1px solid ${(props) => props.theme.color.border.primary};
  border-radius: 1rem;
  color: ${(props) => props.theme.color.fill.primary};
  & h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.color.text.primary};
  }
  & p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.text.secondary};
  }
`;
const UserDisplayCardInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  gap: 0.1rem;
`;

const NavItem = styled.div`
  padding: 1rem 2rem;
  margin: 0 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: background 0.15s ease-in;
  &:hover {
    background-color: ${(props) =>
      getFader(props.theme.color.border.primary, 0.5)};
  }
  ${(props) =>
    props.active &&
    css`
      background: ${(props) => getFader(props.theme.color.border.primary, 0.5)};
      color: ${(props) => props.theme.color.fill.primary};
      &:hover {
        background: ${(props) => props.theme.color.border.primary};
      }
    `}
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  color: ${(props) => props.theme.color.text.secondary};
  gap: 0.5rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  & h1 {
    font-size: calc(1rem + 0.4vw);
    color: ${(props) => props.theme.color.fill.primary};
  }
`;
const Footer = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.border.primary};
  margin-top: auto;
  display: flex;
  align-items: center;
  & .toggleContainer {
    flex: 1;
    border-right: 1px solid ${(props) => props.theme.color.border.primary};
    padding: 0.2rem;
    display: flex;
    justify-content: center;
  }
  & p {
    flex: 2;
    color: ${(props) => props.theme.color.text.secondary};
    font-family: Consolas;
    font-size: 0.8rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
  }
`;
const SideBar = ({ mobile, open, setSideBar = () => {} }) => {
  // Helper
  const shortenName = (name) =>
    name.slice(
      name.lastIndexOf('-') !== -1 ? name.lastIndexOf('-') + 1 : 0,
      name.length
    );
  const { themeContext } = Context.useContainer();
  const { accounts } = useMsal();
  const user = accounts[0];
  const [pathname, setPathname] = useState(location.pathname);
  const ref = useClickOutside(() => {setSideBar(false);console.log("close")});
  // Render on open && desktop
  return open || !mobile ? (
    <SidebarContainer ref={ref} mobile={mobile}>
      {mobile && <IconWrapper onClick={() => setSideBar(false)} style={{justifyContent: 'flex-start', width: '40px'}}><BsList size={24}/></IconWrapper>}
      <Header>
        <Logo
          src={
            themeContext.isDark ? '/iconNoTextDark.svg' : '/iconNoTextLight.svg'
          }
        />
        <h1>Project Management Dashboard</h1>
      </Header>
      <UserDisplayCard>
        <Avatar
          src={`http://172.30.1.213:3600/api/v1/avatar/${user.username}`}
        />
        <UserDisplayCardInfo>
          <h3>{shortenName(user.name)}</h3>
          <p>{user.username}</p>
        </UserDisplayCardInfo>
        <BsThreeDotsVertical size="20px" />
      </UserDisplayCard>
      <NavList>
        {pageList.map((item) => (
          <NavItem
            key={item.text}
            onClick={() => {
              navigate(item.path);
              setPathname(item.path);
            }}
            active={item.path === pathname}
          >
            {item.icon}
            <p>{item.text}</p>
          </NavItem>
        ))}
      </NavList>
      <Footer>
        <div className="toggleContainer">
          <ThemeToggle
            value={themeContext.isDark}
            onSelect={() => themeContext.toggleTheme()}
          />
        </div>
        <p>Version: v0.05</p>
      </Footer>
    </SidebarContainer>
  ) : null;
};

SideBar.propTypes = {
  mobile: PropTypes.bool,
  open: PropTypes.bool,
  setSideBar: PropTypes.any
};

export default SideBar;
