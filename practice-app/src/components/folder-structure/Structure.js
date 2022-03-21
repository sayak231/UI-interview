import React from "react";
import Folder from "./Folder";
import explorer from "./data.json";

const Structure = () => {
  console.log(explorer);
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
};

export default Structure;
