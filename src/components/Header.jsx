import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src="https://icanhazdadjoke.com/static/smile.svg"
          alt="icanhazdadjoke.com"
          style={{ width: "3rem", marginRight: "1rem" }}
        />
        <Typography variant="h6">DAD-JOKE</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
