import * as React from "react";
import styles from "../index.css";
import About from "../components/About";
import ModalCompleted from "../components/Modals";

const IndexPage = () => {
  return (
    <>
      <About />
      <ModalCompleted />
    </>
  );
};

export default IndexPage;
