import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import ThemeSwitcher from "../ThemeSwitcher";
import { headerStyles } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <AppBar sx={headerStyles.appBar}>
      <Container>
        <Toolbar sx={headerStyles.toolbar}>
          <Typography variant="h6" sx={headerStyles.title}>
            My App
          </Typography>
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
