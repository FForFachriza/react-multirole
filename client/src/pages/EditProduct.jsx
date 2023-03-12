import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { whoAmI } from "../features/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const EditProduct = () => {
  const dispatch = useDispatch();
  const getPadding = useSelector((state) => state.padding.padding);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const { id } = useParams();
  const { IsError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    if (IsError === true) {
      navigate("/");
    }
  }, [IsError, navigate]);

  useEffect(() => {
    const getProductfromID = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/products/${id}`);
        setInputUser({
          productName: data.name,
          price: data.price,
        });
      } catch (error) {
        if (error.response) {
          MySwal.fire({
            title: "Error",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    };
    getProductfromID();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`http://localhost:5000/products/${id}`, {
        name: getInputUser.productName,
        price: getInputUser.price,
      });
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      setInputUser({
        productName: "",
        price: "",
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setInputUser((prevState) => ({
          ...prevState,
          errorMessage: error.response.data.message,
        }));
        MySwal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

  const [getInputUser, setInputUser] = useState({
    productName: "",
    price: "",
    errorMessage: "",
  });

  const productHandler = (e) => {
    setInputUser((prevState) => ({
      ...prevState,
      productName: e.target.value,
    }));
  };

  const priceHandler = (e) => {
    setInputUser((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };
  return (
    <section className={`${getPadding} duration-300 transition-all`}>
      <div className="flex flex-row w-full justify-between">
        <Link to="/products">
          <button className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
        <h1 className="text-2xl my-auto font-semibold text-gray-900 dark:text-white ">Edit Product</h1>
      </div>
      <form>
        <div className="flex h-screen gap-6 flex-col pt-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input
              onChange={productHandler}
              value={getInputUser.productName}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Name"
              required=""
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input
              onChange={priceHandler}
              value={getInputUser.price}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required=""
            />
          </div>

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

export default EditProduct;
