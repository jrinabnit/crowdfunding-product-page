import React from "react";
import Modal from "react-modal";
import Img from "gatsby-image";
import HeaderImgDesktop from "../assets/jpgs/image-hero-desktop.jpg";
import HeaderImgMobile from "../assets/jpgs/image-hero-mobile.jpg";
import Logo from "../assets/svgs/logo.svg";
import {
  Box,
  Flex,
  Image,
  MenuButton,
  Heading,
  Paragraph,
  NavLink,
  Card,
  Close,
} from "theme-ui";

const Header = () => {
  // const srcSetValues = ["400px"];
  const sources = [HeaderImgMobile, HeaderImgDesktop];
  const [isOpenNav, setIsOpenNav] = React.useState(false);

  return (
    <Box>
      <Flex
        sx={{
          justifyContent: "space-between",
          // position: "relative",
        }}
      >
        <Image src={Logo} alt="logo" />

        <MenuButton
          onClick={() => setIsOpenNav(true)}
          sx={{ color: "#FFFFFF", display: ["show", "none"] }}
        />
        {/* <Flex
          sx={{
            display: ["none", "show"],
            justifyContent: "space-evenly",
          }}
        >
          <NavLink>
            <Heading variant="navLinks" sx={{ mr: 20, display: ["none", "show"], }}>
              About
            </Heading>
          </NavLink>

          <NavLink>
            <Heading variant="navLinks" sx={{ mr: 20, display: ["none", "show"], }}>
              Discover
            </Heading>
          </NavLink>
          <NavLink>
            <Heading variant="navLinks" sx={{ mr: 20, display: ["none", "show"], }}>
              Get Started
            </Heading>
          </NavLink>
        </Flex> */}
      </Flex>

      {/* <Image
        srcSet="HeaderImgMobile 375px, HeaderImgDesktop 400px"
        sizes="(maxWidth: 375px) 375px, 400px "
        src={HeaderImgDesktop}
        alt="monitor stand"
        sx={{
          width: "100%",
          marginTop: -50,
        }}
      /> */}

      {/* <Box as="picture">
        <source media={sources[0]} />
  
        <img
          src={HeaderImgMobile}
          alt="monitor stand"
          sx={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box> */}

      {/* <Img fluid={sources} sx={{ width: "100%", objectFit: 'cover'}} /> */}

      <Image src={HeaderImgMobile} alt="monitor stand" />
      <NavMobile isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
    </Box>
  );
};

export default Header;

const NavMobile = ({ isOpenNav, setIsOpenNav }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "scroll",
      width: ["95vw", "500px"],
      p: 0,
      m: 0,
    },
  };

  return (
    <Modal isOpen={isOpenNav} style={customStyles}>
      <Close
        onClick={() => setIsOpenNav(false)}
        sx={{
          marginLeft: "90%",
          cursor: "pointer",
        }}
      />
      <Card
        sx={{
          width: 300,
          p: 0,
          m: 0,
        }}
      >
        <Flex sx={{ flexDirection: 'column'}}>
          <NavLink>
            <Heading sx={{ p: 30 }}>About</Heading>
          </NavLink>
          <NavLink>
            <Heading
              sx={{
                borderTop: "1px solid darkGray",
                borderBottom: "1px solid darkGray",
                borderWidth: "200%",
                p: 30,
              }}
            >
              Discover
            </Heading>
          </NavLink>
          <NavLink>
            <Heading sx={{ p: 30 }}>Get Started</Heading>
          </NavLink>
        </Flex>
      </Card>
    </Modal>
  );
};
