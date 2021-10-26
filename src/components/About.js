import React from 'react'
import ProductCard from "./ProductCard";
import {
    Card,
    Box,
    Heading,
    Paragraph,

  } from "@theme-ui/components";

const About = ({productData, openModalOne}) => {
    return (
        <Card sx={{ p: [10, 20], width: ["98vw", "650px"], margin: "0 auto" }}>
        <Box sx={{ p: 20 }}>
          <Heading variant="heading2" sx={{ mb: 20 }}>
            About this project
          </Heading>
          <Paragraph>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.{" "}
          </Paragraph>
          <br />
          <Paragraph>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </Paragraph>
        </Box>
        {productData.map((product) => (
          <ProductCard
            quantity={product.quantity}
            text={product.text}
            title={product.title}
            pledge={product.pledge}
            openModalOne={openModalOne}
          />
        ))}
      </Card>
    )
}

export default About
