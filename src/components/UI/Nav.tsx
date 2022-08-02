import { MdOutlineCameraAlt, MdOutlineSend } from 'react-icons/md';
import styled from 'styled-components';
import { Logo } from './Logo';
import { colors } from '../../styles/globalStyle';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

export const Nav = () => {
  return (
    <NavContainer>
      <MdOutlineCameraAlt size={50} color={colors.primary} />
      <Logo />
      <MdOutlineSend
        size={50}
        color={colors.secondary}
        style={{
          transform: 'rotate(-30deg)',
        }}
      />
    </NavContainer>
  );
};
