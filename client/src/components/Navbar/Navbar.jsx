import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPadding, resetPadding, setSidebarClicked } from "../../features/paddingSlice";
import { logOut, reset } from "../../features/authSlice";

const Navbar = () => {
  const location = useLocation();
  const [getShowDropdown, setShowDropdown] = useState(false);
  const [getBorder, setBorder] = useState(true);
  const [getCollapse, setCollapse] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user} = useSelector((state) => state.auth);
  const sidebarClicked = useSelector((state) => state.padding.sidebarClicked);
  console.log(useSelector((state) => state.padding.sidebarClicked));

  // const clickOutside = React.useRef(null);

  const logoutHandler = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };

  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setBorder(true);
      } else {
        setBorder(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const collapseSidebar = () => {
    dispatch(setSidebarClicked(!sidebarClicked));
  };

  useEffect(() => {
    if (sidebarClicked === true) {
      dispatch(setPadding("md:ml-20 ml-0 p-6"));
    } else {
      dispatch(resetPadding());
    }
  }, [collapseSidebar]);

  // useEffect(() => {
  //   if (sidebarClicked === true) {
  //     dispatch(setPadding("md:ml-20 ml-0 p-6"));
  //   } else {
  //     dispatch(resetPadding());
  //   }
  // }, []);

  // const collapseSidebar = () => {
  //   setCollapse((prevValue) => !prevValue);
  // };

  if (location.pathname === "/") return null;
  const showDropdown = () => {
    setShowDropdown((prevValue) => !prevValue);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (clickOutside.current && !clickOutside.current.contains(event.target)) {
  //       setShowDropdown((prevValue) => !prevValue);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [clickOutside]);

  console.log(getShowDropdown);
  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full backdrop-blur-sm ${
          getBorder ? "border-b border-gray-200" : ""
        } dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={showDropdown}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              {getShowDropdown && (
                <div
                  // ref={clickOutside}
                  className="flex flex-col absolute  mt-[10rem] w-52 bg-white rounded-md overflow-hidden shadow-2xl z-50 "
                >
                  <div className="transition-all duration-300">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Logout
                    </a>
                  </div>
                </div>
              )}

              <a onClick={collapseSidebar} className="flex ml-2 md:mr-24 cursor-pointer">
                <img src="https://img.icons8.com/fluency/512/dashboard-layout.png" className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dashboard</span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="relative block p-1 text-gray-500 transition duration-150 ease-in-out rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 transition-all duration-300 ${
          sidebarClicked ? "w-16" : "w-64 "
        } h-screen pt-20  bg-white border-r border-gray-200 `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <section className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? " h-full fill-blue-500 text-blue-600 font-bold w-full" : "fill-gray-500 w-full")}
                >
                  <span className={`ml-3 fixed left-11`}>{sidebarClicked ? "" : "Dashboard"}</span>
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill=""
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </NavLink>
                {/* <NavLink to="/dashboard" className={({ isActive }) => (isActive ? " h-full text-blue-600 font-bold w-full" : " w-full")}>
                  <span className={`ml-3 `}>{getCollapse ? "" : "Dashboard"}</span>
                </NavLink> */}
              </section>
            </li>

            <li>
              <section className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <NavLink
                  to="/users"
                  className={({ isActive }) => (isActive ? " h-full fill-blue-500 text-blue-600 font-bold w-full" : "fill-gray-500 w-full")}
                >
                  <span className="ml-3 fixed left-11">{sidebarClicked ? "" : "Users"}</span>
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill=""
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {/* <NavLink to="/users" className={({ isActive }) => (isActive ? " h-full text-blue-600 font-bold w-full" : "h-full w-full")}>
                  <span className="flex-1 ml-3 whitespace-nowrap">{getCollapse ? "" : "Users"}</span>
                </NavLink> */}
                </NavLink>
              </section>
            </li>
            <li>
              <section className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? " h-full fill-blue-500 text-blue-600 font-bold w-full" : "fill-gray-500 w-full")}
                >
                  <span className="ml-3 fixed left-11">{sidebarClicked ? "" : "Products"}</span>

                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill=""
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink>
                {/* <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? "  text-blue-600 font-bold w-full h-full" : "h-full w-full")}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">{getCollapse ? "" : "Products"}</span>
                </NavLink> */}
              </section>
            </li>
            <li>
              <section onClick={logoutHandler} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <NavLink
                  to="/logout"
                  className={({ isActive }) => (isActive ? "  text-blue-600  w-full font-bold h-full" : "h-full w-full")}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">{sidebarClicked ? "" : "Logout"}</span>
                </NavLink>
              </section>
            </li>
          </ul>
        </div>
      </aside>
      <div className=" ml-64 mt-16"></div>
      {/* <p className="p-4 ml-64">halo</p>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
