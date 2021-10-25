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
  Close,
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
  const [selected, setSelected] = React.useState();

  function openModalOne(e) {
    setIsOpenModalOne(true);
    setSelected(e.target.value);
  }

  React.useEffect(
    () => console.log(selected + " is the selected item"),
    [selected]
  );

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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: ["95vw", "500px"],
      height: "90vh",
    },
  };

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
        customStyles={customStyles}
        selected={selected}
        setSelected={setSelected}
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
  customStyles,
  selected,
  setSelected,
}) => {
  return (
    <Modal style={customStyles} isOpen={isOpenModalOne}>
      <Card
        sx={{
          p: [10, 20],
          width: ["98vw", "650px"],
          m: "0 auto",
        }}
      >
        <Box sx={{ m: 20 }}>
          <Close
            onClick={() => closeModalOne()}
            sx={{
              ml: "93%",
              mb: "-30%",
            }}
          />
          <Heading variant="heading2" sx={{ mb: 20 }}>
            Back this Project
          </Heading>
          <Paragraph>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </Paragraph>
        </Box>
        {productData.map((product) => (
          <ProductCardModal
            quantity={product.quantity}
            text={product.text}
            title={product.title}
            pledge={product.pledge}
            openModalTwo={openModalTwo}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </Card>
    </Modal>
  );
};
