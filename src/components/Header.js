import React from "react";
import { useResponsiveValue } from "@theme-ui/match-media";
import Modal from "react-modal";
import HeaderImgDesktop from "../assets/jpgs/image-hero-desktop.jpg";
import HeaderImgMobile from "../assets/jpgs/image-hero-mobile.jpg";
import Logo from "../assets/svgs/logo.svg";
import {
  Box,
  Flex,
  Image,
  MenuButton,
  Heading,
  NavLink,
  Card,
  Close,
} from "theme-ui";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = React.useState(false);

  return (
    <>
      <Flex
        sx={{
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Image
          src={Logo}
          alt="logo"
          sx={{
            width: "20%",
          }}
        />

        <MenuButton
          onClick={() => setIsOpenNav(true)}
          sx={{
            color: "#FFFFFF",
            display: ["inline", "none"],
          }}
        />
        <Flex
          sx={{
            display: ["none", "inline"],
            // justifyContent: "space-around",
          }}
        >
          <NavLink>
            <Heading
              variant="navLinks"
              sx={{ mr: 20, display: ["none", "inline"] }}
            >
              About
            </Heading>
          </NavLink>

          <NavLink>
            <Heading
              variant="navLinks"
              sx={{ mr: 20, display: ["none", "inline"] }}
            >
              Discover
            </Heading>
          </NavLink>
          <NavLink>
            <Heading
              variant="navLinks"
              sx={{ mr: 20, display: ["none", "inline"] }}
            >
              Get Started
            </Heading>
          </NavLink>
        </Flex>
      </Flex>

      <Box
        as="picture"
        sx={{
          height: '100%',
          maxWidth: 'auto',
          marginTop: -50,
          objectFit: 'cover',
          overflow: 'hidden'
        }}
      >
        <source media="(min-width:400px)" srcset={HeaderImgDesktop} />
        <source media="(min-width:375px)" srcset={HeaderImgMobile} />
        <img src={HeaderImgMobile} alt="monitor stand" style={{ width: '100%'}} />
      </Box>
      <NavMobile isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
    </>
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
        <Flex sx={{ flexDirection: "column" }}>
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
