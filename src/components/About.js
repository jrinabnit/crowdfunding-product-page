import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Card, Box, Heading, Paragraph, Image } from "@theme-ui/components";
import Header from "./Header";
import Intro from "./Intro";
import ProductCard from "./ProductCard";
import Statistics from "./Statistics";
import CloseMenuIcon from "../assets/svgs/icon-close-modal.svg";
import ProductCardModal from "./ProductCardModal";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allProductsJson {
        nodes {
          quantity
          text
          title
          pledge
        }
      }
    }
  `);

  const productData = data.allProductsJson.nodes;

  return (
    <>
      <Header />
      <Intro />
      <Statistics />
      <Card sx={{ p: 20 }}>
        <Heading variant="heading3" sx={{ mb: 10 }}>
          About this project
        </Heading>
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
        {productData.map((product) => (
          <ProductCard
            quantity={product.quantity}
            text={product.text}
            title={product.title}
            pledge={product.pledge}
          />
        ))}
      </Card>
      <ModalStart productData={productData} />
    </>
  );
};

export default About;

const ModalStart = ({ productData }) => {
  return (
    <Card
      sx={{
        width: ["95vw", "50vw",],
        margin: "0 auto",
        
      }}
    >
      <Box sx={{ m: 20 }}>
        <Image
          src={CloseMenuIcon}
          sx={{ marginLeft: '100%'}}
        />
        <Heading variant="heading2" sx={{ mb: 10 }}>
          Back this Project
        </Heading>
        <Paragraph>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </Paragraph>
      </Box>
      {productData.map((product) => (
        <ProductCardModal
          quantity={product.quantity}
          text={product.text}
          title={product.title}
          pledge={product.pledge}
        />
      ))}
    </Card>
  );
};
