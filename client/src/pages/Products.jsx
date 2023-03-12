import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";
import ButtonAdd from "../components/ButtonAdd/ButtonAdd";
import { useSelector, useDispatch } from "react-redux";
import { whoAmI } from "../features/authSlice";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Products = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const getPadding = useSelector((state) => state.padding.padding);
  const { IsError } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    if (IsError === true) {
      navigate("/");
    }
  }, [IsError, navigate]);

  const [getProducts, setProducts] = useState([]);
  useEffect(() => {
    const getProductsAPI = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    };
    getProductsAPI();
  }, []);

  console.log(getProducts);

  const deleteProduct = async (uuid, name) => {
    MySwal.fire({
      title: `Are you sure want to delete ${name}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Don't delete`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/products/${uuid}`);
        const { data } = await axios.get("http://localhost:5000/products");
        setProducts(data);
        MySwal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        MySwal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const path = location.pathname;
  const pathCapitalized = location.pathname.split("/")[1].charAt(0).toUpperCase() + location.pathname.split("/")[1].slice(1);
  return (
    <section className={`${getPadding} duration-300 transition-all`}>
      <Breadcumbs path={path} pathname={pathCapitalized} />
      <section className="flex flex-col">
        <ButtonAdd name={"Products"} />
        <div className="overflow-x-auto pt-6">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center">
              <tr>
                <th>No.</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Created By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {getProducts.map((product, index) => (
                <tr key={product.uuid}>
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.user.name}</td>
                  <td className="flex justify-center gap-x-4">
                    <Link to={`/products/edit/${product.uuid}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.uuid, product.name)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Products;
