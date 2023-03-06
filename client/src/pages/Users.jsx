import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";
import ButtonAdd from "../components/ButtonAdd/ButtonAdd";
import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  const getPadding = useSelector((state) => state.padding.padding);
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
              <tr>
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
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Users;
