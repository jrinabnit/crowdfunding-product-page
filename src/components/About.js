import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Modal from "react-modal";
import {
  Card,
  Box,
  Heading,
  Paragraph,
  Image,
  Button,
} from "@theme-ui/components";
import Header from "./Header";
import Intro from "./Intro";
import ProductCard from "./ProductCard";
import Statistics from "./Statistics";
import CloseMenuIcon from "../assets/svgs/icon-close-modal.svg";
import ProductCardModal from "./ProductCardModal";
import ModalTwo from "./Modals";

const About = () => {
  const [isOpenModalOne, setIsOpenModalOne] = React.useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = React.useState(false);

  function openModalOne() {
    setIsOpenModalOne(true);
    console.log("opened modal one");
  }

  function openModalTwo() {
    setIsOpenModalOne(false);
    console.log("closed modal one");
    setIsOpenModalTwo(true);
    console.log("opened modal two");
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
      <Card sx={{ p: [10, 20], width: ["98vw", "650px"], margin: "0 auto" }}>
        <Box sx={{ p: 20 }}>
          <Heading variant="heading2" sx={{ mb: 20 }}>
            About this project
          </Heading>
          <Paragraph>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.{" "}
          </Paragraph>
          <br />
          <Paragraph>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </Paragraph>
        </Box>
        {productData.map((product) => (
          <ProductCard
            quantity={product.quantity}
            text={product.text}
            title={product.title}
            pledge={product.pledge}
            openModalOne={openModalOne}
          />
        ))}
      </Card>
      <ModalStart
        productData={productData}
        isOpenModalOne={isOpenModalOne}
        closeModalOne={closeModalOne}
        openModalTwo={openModalTwo}
      />
      <ModalTwo isOpenModalTwo={isOpenModalTwo} closeModalTwo={closeModalTwo} />
    </>
  );
};

export default About;

const ModalStart = ({
  productData,
  isOpenModalOne,
  closeModalOne,
  openModalTwo,
}) => {
  return (
    <Modal
      isOpen={isOpenModalOne}
      sx={{
        p: [10, 20],
        width: ["98vw", "650px"],
        margin: "0 auto",
        my: 50,
      }}
    >
      <Box sx={{ m: 20 }}>
        <Button onClick={() => closeModalOne()}>
          <Image src={CloseMenuIcon} sx={{ marginLeft: "100%" }} />
        </Button>

        <Heading variant="heading2" sx={{ mb: 20 }}>
          Back this Project
        </Heading>
        <Paragraph>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </Paragraph>
      </Box>
      {productData.map((product) => (
        <ProductCardModal
          quantity={product.quantity}
          text={product.text}
          title={product.title}
          pledge={product.pledge}
          openModalTwo={openModalTwo}
        />
      ))}
    </Modal>
  );
};
