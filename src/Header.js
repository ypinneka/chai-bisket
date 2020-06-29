import React from "react";
import { Header as GrommetHeader, Button, Menu } from "grommet";
import { Home } from "grommet-icons";

export const Header = () => {
  return (
    <GrommetHeader background="brand">
      <Button icon={<Home />} hoverIndicator />
      <Menu label="account" items={[{ label: "logout" }]} />
    </GrommetHeader>
  );
};
