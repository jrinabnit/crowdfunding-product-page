import * as React from "react";
import styles from "../index.css";
import { useStaticQuery, graphql } from "gatsby";
import { ModalOne, ModalTwo } from "../components/Modals";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Statistics from "../components/Statistics";

const IndexPage = () => {
  const [isOpenModalOne, setIsOpenModalOne] = React.useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = React.useState(false);
  const [selected, setSelected] = React.useState();

  React.useEffect(
    () => console.log(selected + " is the selected item"),
    [selected]
  );

  function openModalOne(e) {
    setIsOpenModalOne(true);

    if (e) {
      setSelected(e.target.value);
    } else {
      setSelected("Bamboo Stand");
    }
  }

  function openModalTwo() {
    setIsOpenModalOne(false);
    setIsOpenModalTwo(true);
  }

  function closeModalOne() {
    setIsOpenModalOne(false);
  }
  function closeModalTwo() {
    setIsOpenModalTwo(false);
  }

  const data = useStaticQuery(graphql`
    {
      allProductsJson {
        nodes {
          quantity
          text
          title
          pledge
        }
      }
    }
  `);

  const productData = data.allProductsJson.nodes;

  return (
    <>
      <Header />
      <Intro openModalOne={openModalOne} />
      <Statistics />
      <About productData={productData} openModalOne={openModalOne} />
      <ModalOne
        productData={productData}
        isOpenModalOne={isOpenModalOne}
        closeModalOne={closeModalOne}
        openModalTwo={openModalTwo}
        selected={selected}
        setSelected={setSelected}
      />
      <ModalTwo isOpenModalTwo={isOpenModalTwo} closeModalTwo={closeModalTwo} />
    </>
  );
};

export default IndexPage;
