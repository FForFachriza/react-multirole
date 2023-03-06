import React from "react";
import { Link } from "react-router-dom";

const ButtonAdd = (props) => {
  return (
    <div className="flex flex-row justify-end">
      <Link to={"add"}>
        <button className="btn bg-blue-500 border-none hover:bg-blue-700 focus:ring-2 ring-0">+ &nbsp; Add {props.name}</button>
      </Link>
    </div>
  );
};

export default ButtonAdd;
