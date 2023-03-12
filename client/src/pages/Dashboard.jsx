import React, { useEffect } from "react";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { whoAmI } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { getPadding } = useSelector((state) => state.padding.padding);
  const navigate = useNavigate();
  const { IsError } = useSelector((state) => state.auth);
  const getAllState = useSelector((state) => state);

  useEffect(() => {
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    if (IsError === true) {
      navigate("/");
    }
  }, [IsError, navigate]);

  return (
    // ,l-64
    <section className={`duration-300 transition-all  ${getPadding}`}>
      <h1 className="font-bold text-2xl">Welcome Users</h1>
      <Breadcumbs />
    </section>
  );
};

export default Dashboard;
