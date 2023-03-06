import React from "react";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";
import { useSelector, useDispatch } from "react-redux";
const Dashboard = () => {
  const dispatch = useDispatch();
  const getPadding = useSelector((state) => state.padding.padding);

  return (
    // ,l-64
    <section className={`duration-300 transition-all  ${getPadding}`}>
      <h1 className="font-bold text-2xl">Welcome Users</h1>
      <Breadcumbs />
    </section>
  );
};

export default Dashboard;
