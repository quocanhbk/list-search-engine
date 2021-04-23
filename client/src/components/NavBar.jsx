import React from 'react';
import styled from 'styled-components';
import { BsThreeDotsVertical, BsHouse, BsSearch} from 'react-icons/bs';
import LogoGold from '../assets/Logo_Gold.svg';
import Avatar from './Avatar';
import Divider from './Divider';
import Typography from './Typography';

// Hard Coded the background-color, not gonna bother with this thing
// C'mon man!
const NavBarWrapper = styled.div`
  width: 21.25vw;
  height: 100vh;
  color: ${(props) => props.theme.color.fill.secondary};
  background-color: #151516;
  padding: 24px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.32);
`;

const Logo = styled.img`
  width: 100%;
  max-width: 360px;
  height: 64px;
`;

const UserDisplayCard = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
`;
const UserDisplayCardInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  padding: 16px 16px 16px 30px;
`;

const NavItemText = styled.div`
  padding-left: 30px;
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Logo src={LogoGold} />
      <Divider />
      <UserDisplayCard>
        <Avatar src="http://172.30.1.213:3600/api/v1/avatar/anh.lq@ttgvn.com" />
        <UserDisplayCardInfo>
          <Typography.BODY1 weight="600">Ngô Kim Sơn</Typography.BODY1>
          <Typography.CAPTION>son.nk@ttgvn.com</Typography.CAPTION>
        </UserDisplayCardInfo>
        <BsThreeDotsVertical />
      </UserDisplayCard>
      <Divider />
      <NavItem>
        <BsHouse size="24px" />
        <NavItemText>
          <Typography.BODY1 weight="600">OVERALL</Typography.BODY1>
        </NavItemText>
      </NavItem>
      <NavItem>
        <BsSearch size="24px" />
        <NavItemText>
          <Typography.BODY1 weight="600">SEARCH ENGINE</Typography.BODY1>
        </NavItemText>
      </NavItem>
    </NavBarWrapper>
  );
};

export default NavBar;
