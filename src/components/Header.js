import React from "react";
import HeaderImgDesktop from "../assets/jpgs/image-hero-desktop.jpg";
import HeaderImgMobile from "../assets/jpgs/image-hero-mobile.jpg";
import Logo from "../assets/svgs/logo.svg";
import { Box, Flex, Image, MenuButton, Heading, Paragraph } from "theme-ui";

const Header = () => {
  return (
    <Box>
      <Flex
        sx={{
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Image src={Logo} alt="logo" />

        <MenuButton sx={{ color: "#FFFFFF", display: ["show", "none"] }} />
        <Flex sx={{ 
          display: [ "none", "show"],
          justifyContent: 'space-evenly'
           }}>
            <Heading variant='navLinks' sx={{ mr: 20}}>About</Heading>
            <Heading variant='navLinks' sx={{ mr: 20}}>Discover</Heading>
            <Heading variant='navLinks' sx={{ mr: 20}}>Get Started</Heading>
        </Flex>
      </Flex>
      <Image
        src={HeaderImgMobile}
        alt="monitor stand"
        sx={{
          width: "100%",
          marginTop: -50,
        }}
      />
    </Box>
  );
};

export default Header;
