import React from "react";
import { Footer as GrommetFooter, Text, Anchor } from "grommet";

export const Footer = () => {
  return (
    <GrommetFooter background="brand" pad="medium">
      <Text>Copyright</Text>
      <Anchor label="About" />
    </GrommetFooter>
  );
};
