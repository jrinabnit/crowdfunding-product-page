import React from "react";
import {
  Card,
  Box,
  Heading,
  Paragraph,
  Button,
  Radio,
  Input,
  Flex,
} from "theme-ui";

const ProductCardModal = ({ quantity, text, title, pledge }) => {
  return (
    <Card
      variant="modal"
      sx={{
        p: 20,
        m: 20,
      }}
    >
      <Flex
        sx={{
          justifyContent: ["start"],
          alignItems: ["center"],
          mb: 20,
        }}
      >
        <Radio name="product" checked="true" />
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: ["center"],
            alignItems: "center",
          }}
        >
          <Heading
            variant="heading3"
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "moderateCyan",
              },
            }}
          >
            {title}
          </Heading>
          <Heading variant="heading3Alt">Pledge ${pledge} or more</Heading>
        </Flex>
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
      </Flex>




      {/* Selected product shows this box and gets highlighted */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid darkGray",
        }}
      >
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: ["space-between"],
            alignItems: "center",
          }}
        >
          <Paragraph>Enter your pledge</Paragraph>
          <Flex>
            <Input defaultValue={`$${pledge}`} />

            <Button
              sx={{
                alignSelf: ["left", "right"],
              }}
            >
              Continue
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
};

export default ProductCardModal;

// If product count = 0, the modal option must be disabled.

//When the product is selected:
//border color is cyan
//
