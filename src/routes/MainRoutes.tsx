import { lazy, ReactNode, Suspense, useContext } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { Loading } from '../components/UI';
import { AuthContext } from '../contexts';
import { Layout } from '../layouts';
import { Home, Detail, User, Auth, NoTFound } from '../pages';
import { colors } from '../styles';

const Fav = lazy(() => import('../pages/Fav').then((module) => ({ default: module.Fav })));

export const MainRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* Con o sin autenticase pueden acceder  */}
            <Route index element={<Home />} />

            <Route
              path=""
              element={
                <WhithAuth protect>
                  <Outlet />
                </WhithAuth>
              }
            >
              {/* Solo si estan autenticados */}
              <Route path="pet/:id" element={<Detail />} />
              <Route path="fav" element={<Fav />} />
              <Route path="user" element={<User />} />
            </Route>
            <Route
              path="auth"
              element={
                <WhithAuth>
                  <Outlet />
                </WhithAuth>
              }
            >
              {/* Solo si no estan autentidos */}
              <Route path="login" element={<Auth isLogin />} />
              <Route path="signup" element={<Auth />} />
            </Route>
            <Route path="*" element={<NoTFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

const WhithAuth = ({ children, protect = false }: { protect?: boolean; children: ReactNode }) => {
  const { token, isChecking } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (isChecking) {
    return (
      <>
        <Loading />
        <p
          style={{
            textAlign: 'center',
            color: colors.primary,
          }}
        >
          Estamos trabajando en tu sesión...!!
        </p>
      </>
    );
  }

  if (protect && !token) return <Navigate to="/auth/login" state={{ from: pathname }} />;
  if (!protect && token) return <Navigate to="/" />;
  return <>{children}</>;
};
