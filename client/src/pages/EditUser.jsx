import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const EditUser = () => {
  const dispatch = useDispatch();
  const getPadding = useSelector((state) => state.padding.padding);
  const [getInputUser, setInputUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    errPassword: "",
  });

  const nameHandler = (e) => {
    setInputUser((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const emailHandler = (e) => {
    setInputUser((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const passwordHandler = (e) => {
    setInputUser((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const confPasswordHandler = (e) => {
    setInputUser((prevState) => ({
      ...prevState,
      confPassword: e.target.value,
    }));
  };

  useEffect(() => {
    if (getInputUser.password !== getInputUser.confPassword) {
      setInputUser((prevState) => ({
        ...prevState,
        errPassword: "Passwords do not match",
      }));
    } else {
      setInputUser((prevState) => ({
        ...prevState,
        errPassword: "",
      }));
    }
  }, [getInputUser.password, getInputUser.confPassword]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      name: getInputUser.name,
      email: getInputUser.email,
      password: getInputUser.password,
      confPassword: getInputUser.confPassword,
    });
  };
  return (
    <section className={`${getPadding} duration-300 transition-all`}>
      <div className="flex flex-row w-full justify-between">
        <Link to="/users">
          <button className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
        <h1 className="text-2xl my-auto font-semibold text-gray-900 dark:text-white ">Edit Users</h1>
      </div>
      <form>
        <div className="flex h-screen gap-6 flex-col pt-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input
              onChange={nameHandler}
              value={getInputUser.name}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required=""
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input
              type="email"
              onChange={emailHandler}
              value={getInputUser.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              onChange={passwordHandler}
              value={getInputUser.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input
              type="password"
              onChange={confPasswordHandler}
              value={getInputUser.confPassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required=""
            />
          </div>
          {getInputUser.errPassword && (
            <div className="flex items-start mb-6">
              <label className="ml-2 text-sm font-bold text-red-400">{getInputUser.errPassword}</label>
            </div>
          )}
          <button
            onClick={submitHandler}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditUser;
