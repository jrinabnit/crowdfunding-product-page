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
  Label,
} from "theme-ui";

const ProductCardModal = ({
  quantity,
  text,
  title,
  pledge,
  openModalTwo,
  selected,
  setSelected,
}) => {
  return (
    <Card
      variant={title === selected ? "activeModal" : "modal"}
      sx={{
        m: 20,
        opacity: `${quantity > 0 ? 1 : 0.5}`,
      }}
    >
      <Flex
        sx={{
          justifyContent: ["start"],
          alignItems: ["center"],
          m: 20,
        }}
      >
        <Label
             sx={{ width: 30 }} >
          <Radio
            name="product"
            type="radio"
            value={title}
            defaultChecked={title === selected ? true : false}
            onClick={(e) => setSelected(e.target.value)}
          />
        </Label>
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: ["center"],
            // alignItems: "center",
          }}
        >
          <Heading
            variant="heading3"
            sx={{
              mb: [10, 0],
              mr: [0, 20],
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

      <Paragraph
        sx={{
          m: 20,
          ml: 20,
        }}
      >
        {text}
      </Paragraph>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          justifyContent: ["center", "space-between"],
        }}
      >
        <Heading variant="heading2" sx={{ m: 20 }}>
          {quantity}
          {"  "}
          <Paragraph as="paragraph">left</Paragraph>
        </Heading>
      </Flex>

      {/* Selected product shows this box and gets highlighted */}
      {title === selected && (
        <Box
          sx={{
            textAlign: "center",
            borderTop: "1px solid darkGray",
            display: `${quantity > 0 ? "show" : "none"}`,
          }}
        >
          <Flex
            sx={{
              flexDirection: ["column", "row"],
              justifyContent: ["space-between"],
              alignItems: "center",
              m: 20,
            }}
          >
            <Paragraph>Enter your pledge</Paragraph>
            <Flex>
              <Input defaultValue={`$${pledge}`} />

              <Button
                sx={{
                  alignSelf: ["left", "right"],
                }}
                onClick={() => openModalTwo()}
              >
                Continue
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </Card>
  );
};

export default ProductCardModal;

// If product count = 0, the modal option must be disabled.

//When the product is selected:
//border color is cyan
//
