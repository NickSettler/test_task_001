import {
  Fade,
  List,
  ListItemButton,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import { HistoryDropdownProps } from "./HistoryDropdown.types";
import useHistoryDropdown from "./useHistoryDropdown";

const HistoryDropdown = (props: HistoryDropdownProps): JSX.Element => {
  const { anchorRef, items } = props;

  const { open } = useHistoryDropdown(props);

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      transition
      placement={"bottom-start"}
    >
      {items.length ? (
        ({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                width: anchorRef.current?.offsetWidth,
                maxWidth: anchorRef.current?.offsetWidth,
              }}
            >
              <List dense>
                {items.map((item) => (
                  <ListItemButton onClick={() => {}} key={item.uuid}>
                    <Typography variant={"body1"}>{item.name}</Typography>
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          </Fade>
        )
      ) : (
        <></>
      )}
    </Popper>
  );
};

export default connect(null, null)(HistoryDropdown);
