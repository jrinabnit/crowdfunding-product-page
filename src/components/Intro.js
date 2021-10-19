import React from "react";
import {
  Card,
  Box,
  Heading,
  Paragraph,
  Button,
  Image,
} from "@theme-ui/components";
import Logo from "../assets/svgs/logo-mastercraft.svg";
import Bookmark from "../assets/svgs/icon-bookmark.svg";

const Intro = () => {
  return (
    <Card sx={{ textAlign: "center" }}>
      <Image src={Logo} alt="logo" />
      <Heading variant="heading1">Mastercraft Bamboo Monitor Riser</Heading>
      <Paragraph>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Paragraph>
      <Box
        sx={{ display: "flex", justifyContent: ["center", "space-between"] }}
      >
        <Button>Back this project</Button>
        <Button>
          <Image src={Bookmark} alt="bookmark" />
          Bookmark
        </Button>
      </Box>
    </Card>
  );
};

export default Intro;
