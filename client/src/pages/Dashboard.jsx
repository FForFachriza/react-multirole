import React, { useEffect } from "react";
import Breadcumbs from "../components/BreadcumbsPath/Breadcumbs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { whoAmI } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
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
  }, [IsError, navigate]);

  return (
    // ,l-64
    <section className={` ${getPadding} duration-300 transition-all `}>
      <h1 className="font-bold text-2xl">Welcome {user && user.user.name}</h1>
      <Breadcumbs />
    </section>
  );
};

export default Dashboard;
