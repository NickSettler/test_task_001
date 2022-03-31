import {
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import { HistoryDropdownProps } from "./HistoryDropdown.types";
import useHistoryDropdown from "./useHistoryDropdown";

const HistoryDropdown = (props: HistoryDropdownProps): JSX.Element => {
  const { anchorRef, historyItems, placeItems } = props;

  const { open } = useHistoryDropdown(props);

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      transition
      placement={"bottom-start"}
    >
      {historyItems.length || placeItems.length ? (
        ({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                width: anchorRef.current?.offsetWidth,
                maxWidth: anchorRef.current?.offsetWidth,
              }}
            >
              <List dense>
                {placeItems.length === 0 ? (
                  <>
                    <ListItem>
                      <ListItemText secondary={"History"} />
                    </ListItem>
                    {historyItems.map((item) => (
                      <ListItemButton onClick={() => {}} key={item.uuid}>
                        <Typography variant={"body1"}>{item.name}</Typography>
                      </ListItemButton>
                    ))}
                  </>
                ) : (
                  <>
                    <ListItem>
                      <ListItemText secondary={"Search Results"} />
                    </ListItem>
                    {placeItems.map((item) => (
                      <ListItemButton onClick={() => {}} key={item.woeid}>
                        <Typography variant={"body1"}>{item.title}</Typography>
                      </ListItemButton>
                    ))}
                  </>
                )}
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
