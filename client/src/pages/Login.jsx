import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../features/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const MySwal = withReactContent(Swal);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);
  const isError = useSelector((state) => state.auth.isError);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const message = useSelector((state) => state.auth.message);
  const user = useSelector((state) => state.auth.user);
  const getAllState = useSelector((state) => state);
  const [getInfoLogin, setInfoLogin] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    passwordError: "",
  });
  const getState = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(getState);
  }, [getState]);

  useEffect(() => {
    if (getInfoLogin.password !== getInfoLogin.confirmPassword) {
      setInfoLogin((prevState) => ({
        ...prevState,
        passwordError: "Passwords do not match",
      }));
    } else {
      setInfoLogin((prevState) => ({
        ...prevState,
        passwordError: "",
      }));
    }
  }, [getInfoLogin.password, getInfoLogin.confirmPassword]);

  const emailHandler = (e) => {
    setInfoLogin((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const passwordHandler = (e) => {
    setInfoLogin((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const confirmPasswordHandler = (e) => {
    setInfoLogin((prevState) => ({
      ...prevState,
      confirmPassword: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/dashboard");
      dispatch(reset());
    }
  }, [isSuccess, navigate, dispatch, user]);
  
  useEffect(() => {
    if (isError === true && message) {
      MySwal.fire({
        title: <p>{message}</p>,
        icon: "error",
        confirmButtonText: "OK",
      });
      dispatch(reset());
    }
  }, [isError, message, MySwal, dispatch]);
  
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: getInfoLogin.email,
        password: getInfoLogin.password,
      })
    );
  };


  return (
    <section className="bg-no-repeat bg-cover w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg/1920px-MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg')]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a href="#" className="flex justify-center items-center mb-6 text-4xl font-bold  text-black">
              Login
            </a>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  onChange={emailHandler}
                  value={getInfoLogin.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  onChange={passwordHandler}
                  value={getInfoLogin.password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input
                  type="password"
                  onChange={confirmPasswordHandler}
                  value={getInfoLogin.confirmPassword}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {getInfoLogin.passwordError && <div className="text-red-500 text-sm font-bold">{getInfoLogin.passwordError}</div>}

              {isLoading && <div className="text-red-500 text-sm font-bold">Loading...</div>}
              {isLoading === true ? (
                <button
                  disabled
                  onClick={clickHandler}
                  className="w-full  text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading
                </button>
              ) : (
                <button
                  onClick={clickHandler}
                  className="w-full text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
                >
                  Sign in
                </button>
              )}
              {/* <button
                // type="submit"
                onClick={clickHandler}
                className="w-full text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
              >
                Sign in
              </button> */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
