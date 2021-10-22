import React from "react";
import HeaderImgDesktop from "../assets/jpgs/image-hero-desktop.jpg";
import HeaderImgMobile from "../assets/jpgs/image-hero-mobile.jpg";
import Logo from "../assets/svgs/logo.svg";
import { Box, Flex, Image, MenuButton } from "theme-ui";

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
        <MenuButton sx={{ color: "#FFFFFF" }} />
      </Flex>
      <Image
        src={HeaderImgMobile}
        alt="monitor stand"
        sx={{ 
          width: '100%',
          marginTop: -50 
          }}
      />
    </Box>
  );
};

export default Header;
