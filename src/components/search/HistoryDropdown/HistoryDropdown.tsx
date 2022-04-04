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
import {
  selectedPlaceSelector,
  setSelectedPlace,
} from "../../../modules/weather";
import { Dispatch } from "@reduxjs/toolkit";
import { PlaceItem } from "../../../helpers/api/WeatherApi";

const HistoryDropdown = (props: HistoryDropdownProps): JSX.Element => {
  const { anchorRef, placeItems } = props;

  const { open, handleItemClick } = useHistoryDropdown(props);

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      transition
      placement={"bottom-start"}
    >
      {placeItems.length ? (
        ({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                width: anchorRef.current?.offsetWidth,
                maxWidth: anchorRef.current?.offsetWidth,
              }}
            >
              <List dense>
                <ListItem>
                  <ListItemText secondary={"Search Results"} />
                </ListItem>
                {placeItems.map((item) => (
                  <ListItemButton
                    onClick={() => handleItemClick(item)}
                    key={item.woeid}
                  >
                    <Typography variant={"body1"}>{item.title}</Typography>
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

const mapStateToProps = (state: any) => ({
  selectedPlace: selectedPlaceSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedPlace: (place: PlaceItem) => dispatch(setSelectedPlace(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDropdown);
