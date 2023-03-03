import React from "react";
import { Link } from "react-router-dom";

const Breadcumbs = (props) => {
  return (
    <div className="text-lg font-bold breadcrumbs">
      <ul>
        <li>
          <Link to="/dashboard">
            <a>Home</a>
          </Link>
        </li>
        {props.path && (
          <li>
            <Link to={props.path}>
              <a>{props.pathname}</a>
            </Link>
          </li>
        )}
        {props.pathSecond && (
          <li>
            <Link to={props.pathSecond}>
              <a>{props.pathnameSecond}</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcumbs;
