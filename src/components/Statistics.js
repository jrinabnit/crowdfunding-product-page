import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Card, Heading, Paragraph, Progress } from "@theme-ui/components";

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
        width: ["95vw", "650px",],
        margin: "0 auto",
      }}
    >
      <Heading variant="heading1">${fundsRaised}</Heading>
      <Paragraph>of $100,000 backed</Paragraph>
      <Heading variant="heading1">{numberOfBackers}</Heading>
      <Paragraph>total backers</Paragraph>
      <Heading variant="heading1">{daysLeft}</Heading>
      <Paragraph>days left</Paragraph>
      <Progress variant="progress" max={100000} value={fundsRaised}></Progress>
    </Card>
  );
};

export default Statistics;
