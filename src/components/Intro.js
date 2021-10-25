import React from "react";
import {
  Card,
  Heading,
  Paragraph,
  Button,
  Image,
  Flex,
} from "@theme-ui/components";
import Logo from "../assets/svgs/logo-mastercraft.svg";
import Bookmark from "../assets/svgs/icon-bookmark.svg";

const Intro = ({ openModalOne }) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        width: ["95vw", "650px"],
        margin: "-100px auto 0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Image
        src={Logo}
        alt="logo"
        sx={{
          marginTop: "-30px",
        }}
      />
      <Heading variant="heading1">Mastercraft Bamboo Monitor Riser</Heading>
      <Paragraph>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Paragraph>
      <Flex sx={{ justifyContent: ["center", "space-between"] }}>
        <Button onClick={() => openModalOne()}>Back this project</Button>
        <Button
          sx={{
            py: 0,
            pl: 0,
          }}
        >
          <Image
            src={Bookmark}
            alt="bookmark"
            sx={{ pr: "1em", height: "100%" }}
          />{" "}
          Bookmark
        </Button>
      </Flex>
    </Card>
  );
};

export default Intro;
