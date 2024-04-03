import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
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

                  <div className="flex items-center gap-6">
                    <Link to="search" className="navsearch">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>

                    <SignedIn>
                      <Link to="new-post" className="navsearch">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Link>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <SignedOut>
                      <SignInButton>
                        <div className="hover:cursor-pointer">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="navsearch"
                          />
                        </div>
                      </SignInButton>
                    </SignedOut>
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
