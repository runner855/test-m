import React from "react";
import { useEffect, useState } from "react";
import Logo from "../Images/metide.png";
import Loading from "../Components/Loading";
import Splashscreen from "../Components/Splashscreen";
import Hello from "../Components/Hello";

const Home = () => {
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 3000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return <Logo />;
  }

  // If page is not in loading state, display page.
  else {
    return <Hello />;
  }
};

export default Home;
