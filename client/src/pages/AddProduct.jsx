import React, { useState } from "react";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";

const AddProduct = () => {
  const [getInputUser, setInputUser] = useState({
    productName: "",
    price: "",
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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      productName: getInputUser.productName,
      price: getInputUser.price,
    });
  };
  return (
    <section className="md:ml-64 ml-0 p-6">
      <Breadcumbs path={"/products"} pathname={"Products"} pathSecond={"/products/add"} pathnameSecond={"Add"} />
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

export default AddProduct;