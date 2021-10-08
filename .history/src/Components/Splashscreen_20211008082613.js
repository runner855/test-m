import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading.js";
import Logo from "../Components/Logo.js";
import "../css/Splashscreen.css";

const Splashscreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      <div>{isLoading === true ? <Loading /> : <Logo />}</div>
    </>
  );
};

export default Splashscreen;
