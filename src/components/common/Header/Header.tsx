import { AppBar, Toolbar, Typography } from "@mui/material";
import { connect } from "react-redux";
import { StyledHeaderBox } from "./Header.styled";

const Header = (): JSX.Element => {
  return (
    <StyledHeaderBox flexGrow={1}>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography variant={"h6"} sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </StyledHeaderBox>
  );
};

export default connect(null, {})(Header);
