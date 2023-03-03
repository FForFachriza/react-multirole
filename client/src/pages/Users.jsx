import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";

const Users = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathCapitalized = location.pathname.split("/")[1].charAt(0).toUpperCase() + location.pathname.split("/")[1].slice(1);
  return (
    <section className="md:ml-64 ml-0 p-6">
      <Breadcumbs path={path} pathname={pathCapitalized} />
    </section>
  );
};

export default Users;
