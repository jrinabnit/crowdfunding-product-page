import React from "react";
import HeaderImgDesktop from "../assets/jpgs/image-hero-desktop.jpg";
import HeaderImgMobile from "../assets/jpgs/image-hero-mobile.jpg";
import { Image } from "theme-ui";

const Header = () => {
  return (
    <div>
      <Image src={HeaderImgMobile} alt="monitor stand" />
    </div>
  );
};

export default Header;
