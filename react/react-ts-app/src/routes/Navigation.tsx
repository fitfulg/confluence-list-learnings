import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import LazyLayout from '../01-lazyload/layout/LazyLayout';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/Index';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />

          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<LazyLayout />} />
          <Route path="lazy2" element={<NoLazy />} />

          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
