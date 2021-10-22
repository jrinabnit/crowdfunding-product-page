import React from "react";
import { Card, Flex, Heading, Paragraph, Button } from "theme-ui";

const ProductCard = ({ quantity, text, title, pledge }) => {
  return (
    <Card
      sx={{
        border: "1px solid darkGray",
        p: 20,
        m: 20,
        opacity: `${quantity > 0 ? 1 : .5}`,
      }}
    >
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          justifyContent: ["center", "space-between"],
          mb: 20,
        }}
      >
        <Heading variant="heading3" sx={{ mb: 10 }}>
          {title}
        </Heading>
        <Heading variant="heading3Alt">Pledge ${pledge} or more</Heading>
      </Flex>
      <Paragraph sx={{ mb: 20 }}>{text}</Paragraph>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          justifyContent: ["center", "space-between"],
        }}
      >
        <Heading variant="heading1" sx={{ marginBottom: 20 }}>
          {quantity}
          {"  "}
          <Paragraph as="paragraph">left</Paragraph>
        </Heading>

        <Button
          sx={{
            alignSelf: ["left", "right"],
          }}
        >
          Select Reward
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductCard;
