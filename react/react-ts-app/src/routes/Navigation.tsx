import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />

            <ul>
              {routes.map((e) => {
                return (
                  <li key={e.to}>
                    <NavLink
                      to={e.to}
                      className={({ isActive }) =>
                        isActive ? 'nav-active' : ''
                      }
                    >
                      {e.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map((e) => {
              return (
                <Route key={e.path} path={e.path} element={<e.Component />} />
              );
            })}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
