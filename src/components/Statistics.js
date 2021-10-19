import { Card, Heading, Paragraph } from "@theme-ui/components";
import React from "react";

const Statistics = () => {
  return (
    <Card sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        textAlign: 'center',
    }}>
      <Heading variant="heading1">$89,914</Heading>
      <Paragraph>of $100,000 backed</Paragraph>
      <Heading variant="heading1">5,007</Heading>
      <Paragraph>total backers</Paragraph>
      <Heading variant="heading1">56</Heading>
      <Paragraph>days left</Paragraph>
    </Card>
  );
};

export default Statistics;
