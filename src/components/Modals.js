import React from "react";
import Modal from "react-modal";
import {
  Card,
  Box,
  Heading,
  Paragraph,
  Close,
  Image,
  Button,
} from "@theme-ui/components";
import CheckIcon from "../assets/svgs/icon-check.svg";
import ProductCardModal from "./ProductCardModal";

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

const ModalOne = ({
  productData,
  isOpenModalOne,
  closeModalOne,
  openModalTwo,
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

const ModalTwo = ({ isOpenModalTwo, closeModalTwo }) => {
  return (
    <Modal style={customStyles} isOpen={isOpenModalTwo}>
      <Card
        sx={{
          textAlign: "center",
          width: ["95vw", "500px"],
          margin: "0 auto",
          marginBottom: 0,
        }}
      >
        <Image src={CheckIcon} sx={{ mt: 40 }} />
        <Heading sx={{ m: 20 }}>Thanks for your support!</Heading>
        <Paragraph sx={{ m: 20 }}>
          {" "}
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </Paragraph>
        <Button sx={{ mb: 40 }} onClick={() => closeModalTwo()}>
          Got it!
        </Button>
      </Card>
    </Modal>
  );
};

export { ModalOne, ModalTwo };
