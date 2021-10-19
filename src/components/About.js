import React from "react";
import { Box, Heading, Paragraph } from "@theme-ui/components";
import ProductCard from "./ProductCard";

const About = () => {



  return (
    <>
      <Box sx={{ p: 20 }}>
        <Heading variant="heading3" sx={{ mb: 10 }}>About this project</Heading>
        <Paragraph>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.{" "}
        </Paragraph>
        <Paragraph>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </Paragraph>
      </Box>
      <ProductCard />
      
    </>
  );
};

export default About;
