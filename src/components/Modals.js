import React from "react";
import Modal from "react-modal";
import { Heading, Paragraph, Image, Button, Card } from "@theme-ui/components";
import CheckIcon from "../assets/svgs/icon-check.svg";

const ModalTwo = ({ isOpenModalTwo, closeModalTwo }) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'scroll',
      width: ["95vw", "500px"],
    },
  };

  return (
    <Modal
      style={customStyles}
      
      isOpen={isOpenModalTwo}
    >
      <Card
        sx={{ textAlign: "center", width: ["95vw", "500px"], margin: "0 auto" }}
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

export default ModalTwo;
