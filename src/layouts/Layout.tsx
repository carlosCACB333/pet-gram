import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { BottomBar, Nav } from '../components/UI';
import { GlobalStyle } from '../styles';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          paddingBottom: '60px',
        }}
      >
        <Nav />
        <Outlet /> {/* <-- aqui se renderizan los hijos */}
      </div>
      <BottomBar />
    </>
  );
};
