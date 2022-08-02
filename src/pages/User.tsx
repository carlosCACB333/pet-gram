import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts';
import { colors } from '../styles';

const ButtonLogout = styled.button`
  background-color: ${colors.secondary};
  border-radius: 12px;
  color: white;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const User = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
      }}
    >
      <ButtonLogout onClick={logout}>Cerrar sesión</ButtonLogout>
    </div>
  );
};
