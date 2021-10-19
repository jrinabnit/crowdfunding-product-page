import React from "react";
import { Card, Box, Heading, Paragraph, Button } from "theme-ui";

const ProductCard = () => {
  return (
    <Card
      sx={{
        border: "1px solid darkGray",
        p: 20,
        m: 20,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: ["center", "space-between"],
          mb: 20,
        }}
      >
        <Heading variant="heading3" sx={{ mb: 10 }}>
          Bamboo Stand
        </Heading>
        <Heading variant="heading3Alt">Pledge $25 or more</Heading>
      </Box>
      <Paragraph sx={{ mb: 20 }}>
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list.
      </Paragraph>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: ["center", "space-between"],
        }}
      >
        <Heading variant="heading1" sx={{ marginBottom: 20 }}>
          101{"  "}
          <Paragraph as="paragraph">left</Paragraph>
        </Heading>

        <Button
          sx={{
            alignSelf: ["left", 'right'],
          }}
        >
          Select Reward
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
