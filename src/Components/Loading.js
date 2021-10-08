import React from "react";
import Loader from "react-loader-spinner";
import loading from "../Css/loading.css";

const Loading = () => {
  return (
    <div className="loading_container">
      <Loader
        type="Puff"
        color="white"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Loading;
