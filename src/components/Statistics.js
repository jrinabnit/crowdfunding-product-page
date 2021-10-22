import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Card,
  Flex,
  Box,
  Heading,
  Paragraph,
  Progress,
  Divider,
} from "@theme-ui/components";

const Statistics = () => {
  const data = useStaticQuery(graphql`
    {
      statisticsJson {
        daysLeft
        fundsRaised
        numberOfBackers
      }
    }
  `);

  const { daysLeft, fundsRaised, numberOfBackers } = data.statisticsJson;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        textAlign: "center",
        width: ["95vw", "650px"],
        margin: "0 auto",
        my: 30,
        pt: [0, 30],
        pb: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            textAlign: ["center", "left"],
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ p: [5, 20] }}>
            <Heading variant="heading1" sx={{ mb: 10 }}>
              ${fundsRaised}
            </Heading>
            <Paragraph>of $100,000 backed</Paragraph>
          </Box>
          <Divider variant="divider" />
          <Box sx={{ p: [5, 20] }}>
            <Heading variant="heading1" sx={{ mb: 10 }}>
              {numberOfBackers}
            </Heading>
            <Paragraph>total backers</Paragraph>
          </Box>
          <Divider variant="divider" />
          <Box sx={{ p: [5, 20] }}>
            <Heading variant="heading1" sx={{ mb: 10 }}>
              {daysLeft}
            </Heading>
            <Paragraph>days left</Paragraph>
          </Box>
        </Flex>

        <Progress
          variant="progress"
          max={100000}
          value={fundsRaised}
        ></Progress>
      </Flex>
    </Card>
  );
};

export default Statistics;
