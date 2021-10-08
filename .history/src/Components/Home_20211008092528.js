import React from "react";
import { useEffect, useState } from "react";
import Logo from "../Images/metide.png";
import Hello from "../Components/Hello";
import Loading from "../Components/Loading";
import Homecss from "../Css/Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="main_container">
        <div className="logo_container">
          <img alt="image" src={Logo}></img>
        </div>
        <div className="loader_container">
          <Loading />
        </div>
      </div>
    );
  } else {
    return <Hello />;
  }
};

export default Home;
