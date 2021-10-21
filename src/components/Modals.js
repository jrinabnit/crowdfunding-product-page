import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Heading, Paragraph, Image, Button, Card } from "@theme-ui/components";
import CheckIcon from '../assets/svgs/icon-check.svg'

const ModalCompleted = () => {
    return (
        <Card sx={{ textAlign: 'center' }}>
        <Image src={CheckIcon} />
            <Heading>Thanks for your support!</Heading>
            <Paragraph>  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.</Paragraph>
            <Button>Got it!</Button>
        </Card>
    )
}

export default ModalCompleted

