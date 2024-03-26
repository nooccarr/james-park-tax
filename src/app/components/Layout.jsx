import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPenToSquare,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import NavItems from '../data/navItems';
import '../styles/layout.css';

const Layout = ({ handleSearchReset, showOffCanvas, setShowOffCanvas }) => {
  const handleOffCanvasClose = () => {
    setShowOffCanvas(false);
  };

  return (
    <>
      <nav className="relative">
        <div className="nav-container hidden md:block px-10">
          <div className="py-3">
            <div className="max-w-[2240px] mx-auto">
              <div>
                <div className="flex justify-between gap-2">
                  {NavItems.map(({ link, title }) => (
                    <div className="" key={title}>
                      <Link
                        to={link}
                        onClick={handleSearchReset}
                        className="navlink"
                      >
                        {title}
                      </Link>
                    </div>
                  ))}

                  <div className="flex items-center gap-4">
                    <div className="">
                      <Link to="search" className="navsearch">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </Link>
                    </div>
                    <div>
                      <Link to="new-post" className="navsearch">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Link>
                    </div>
                    <div>
                      <Link to="login" className="navsearch">
                        <FontAwesomeIcon icon={faUser} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showOffCanvas ? (
          <div className="md:hidden absolute z-10 top-0 right-0 w-full h-screen">
            <ul className="nav-dropdown px-10 pt-5 h-screen">
              {NavItems.map(({ link, title }) => (
                <li
                  className="py-2 nav-dropdown-item mr-0"
                  onClick={handleOffCanvasClose}
                  key={title}
                >
                  <Link
                    to={link}
                    onClick={handleSearchReset}
                    className="navlink"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
