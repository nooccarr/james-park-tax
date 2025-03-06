import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import NavItems from '../data/navItems';
import Modal from 'react-modal';
import '../styles/layout.css';

const Layout = ({
  handleSearchReset,
  showOffCanvas,
  handleOffCanvasClose,
  loggedIn,
  menuSelected,
  handleMenuSelected,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      handleOffCanvasClose();
    }, 300);
  };

  return (
    <>
      <nav className="relative select-none">
        <div className="nav-container hidden md:block">
          <div className="py-1">
            <div className="max-w-[1280px] mx-auto px-10">
              <div>
                <div className="flex justify-between gap-2">
                  {NavItems.map(({ link, title }) => {
                    if (title === 'Login' || title === 'Admin Portal') return;
                    return (
                      <div className="py-2" key={title}>
                        <Link
                          to={link}
                          onClick={() => {
                            handleSearchReset();
                            handleMenuSelected(title);
                          }}
                          className={
                            menuSelected === title
                              ? 'navlink--selected'
                              : 'navlink'
                          }
                        >
                          {title}
                        </Link>
                      </div>
                    );
                  })}

                  <div className="flex items-center gap-2">
                    <Link
                      to="/search"
                      className={
                        menuSelected === 'Search'
                          ? 'navsearch--selected'
                          : 'navsearch'
                      }
                      onClick={() => handleMenuSelected('Search')}
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                    {loggedIn ? (
                      <Link
                        to="admin-portal"
                        className={
                          menuSelected === 'Admin'
                            ? 'navsearch--selected'
                            : 'navsearch'
                        }
                        onClick={() => handleMenuSelected('Admin')}
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </Link>
                    ) : (
                      <Link
                        to="login"
                        className={
                          menuSelected === 'Admin'
                            ? 'navsearch--selected'
                            : 'navsearch'
                        }
                        onClick={() => handleMenuSelected('Admin')}
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          isOpen={showOffCanvas}
          onRequestClose={handleClose}
          className={`md:hidden outline-none select-none ${
            isClosing ? 'animate-fadeOutRight' : 'animate-fadeInRight'
          }`}
          overlayClassName="fixed inset-0 z-10"
        >
          <ul className="nav-dropdown px-10 pt-5 h-screen overflow-auto">
            <div className="flex justify-end">
              <div onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="h-5 w-5"
                  fill="#e3f1de"
                >
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
              </div>
            </div>
            {NavItems.map(({ link, title }) => {
              if (loggedIn && title === 'Login') return;
              else if (!loggedIn && title === 'Admin Portal') return;
              return (
                <li
                  className="py-[13.5px] nav-dropdown-item mr-0"
                  onClick={handleClose}
                  key={title}
                >
                  <Link to={link} onClick={handleSearchReset}>
                    <span className="navlink-mobile">{title}</span>
                  </Link>
                </li>
              );
            })}
            <div>&nbsp;</div>
          </ul>
        </Modal>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
