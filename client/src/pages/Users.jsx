import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";
import ButtonAdd from "../components/ButtonAdd/ButtonAdd";
import { useSelector, useDispatch } from "react-redux";
import { whoAmI } from "../features/authSlice";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Users = () => {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const getPadding = useSelector((state) => state.padding.padding);
  const navigate = useNavigate();
  const { IsError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    if (IsError === true) {
      navigate("/");
    }
    if (user && user.user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [IsError, navigate, user]);

  const [getUserLists, setUserLists] = useState([]);

  useEffect(() => {
    const fetchUserLists = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUserLists(response.data);
    };
    fetchUserLists();
  }, []);

  const deleteHandler = async (uuid, name) => {
    MySwal.fire({
      title: `Are you sure to delete this user: ${name}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Don't delete`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/users/${uuid}`);
        const response = await axios.get("http://localhost:5000/users");
        setUserLists(response.data);
        MySwal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        MySwal.fire("Changes are not saved", "", "info");
      }
    });
  };
  console.log(getUserLists);

  const location = useLocation();
  const path = location.pathname;
  const pathCapitalized = location.pathname.split("/")[1].charAt(0).toUpperCase() + location.pathname.split("/")[1].slice(1);
  return (
    <section className={`${getPadding} duration-300 transition-all`}>
      <Breadcumbs path={path} pathname={pathCapitalized} />
      <section className="flex flex-col">
        <ButtonAdd name={"Users"} />
        <div className="overflow-x-auto pt-6">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              {/* <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>email@email.com</td>
                <td>Users</td>
                <td className="flex justify-center gap-x-4">
                  <Link to="/users/edit/1">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                  </Link>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
              </tr> */}
              {getUserLists.map((user, index) => (
                <tr key={user.uuid}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="flex justify-center gap-x-4">
                    <Link to={`/users/edit/${user.uuid}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                    </Link>
                    <button
                      onClick={() => deleteHandler(user.uuid, user.name)}
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

export default Users;
