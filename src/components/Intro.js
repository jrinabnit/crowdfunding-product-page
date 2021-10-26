import React from "react";
import {
  Card,
  Box,
  Heading,
  Paragraph,
  Button,
  Image,
  Flex,
  IconButton,
} from "@theme-ui/components";
import Logo from "../assets/svgs/logo-mastercraft.svg";
import Bookmark from "../assets/svgs/icon-bookmark.svg";
import CheckedBookmark from "../assets/svgs/icon-bookmark-checked.svg";

const Intro = ({ openModalOne }) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  return (
    <Card
      sx={{
        textAlign: "center",
        width: ["95vw", "650px"],
        margin: "-100px auto 0 auto",
        position: "relative",
      }}
    >
      <IconButton
        src={Logo}
        alt="logo"
        sx={{
          marginTop: "-30px",
        }}
      />
      <Heading variant="heading1">Mastercraft Bamboo Monitor Riser</Heading>
      <Paragraph>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Paragraph>
      <Flex
        sx={{
          justifyContent: ["center", "space-between"],
          alignItems: "center",
        }}
      >
        <Button onClick={() => openModalOne()}>Back this project</Button>

        <Box onClick={() => setIsBookmarked(!isBookmarked)}>
          <Image
            src={isBookmarked ? CheckedBookmark : Bookmark}
            alt="bookmark"
            sx={{
              height: "50%",
              display: ["inline", "none"],
            }}
          />
          <Button
            sx={{
              py: 0,
              pl: 0,
          
              display: ["none", "flex"],
              bg: 'lightGray',
            }}
          >
            <Image
              src={isBookmarked ? CheckedBookmark : Bookmark}
              alt="bookmark"
              sx={{
                pr: "1em",
                height: "100%",



              }}
            />{" "}
            <Paragraph sx={{
              alignSelf: 'center',
              color: isBookmarked ? 'darkCyan' : 'darkGray',
              fontWeight: 500,

            }}>
            {isBookmarked ? "Bookmarked" : "Bookmark"}</Paragraph>
          </Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default Intro;
