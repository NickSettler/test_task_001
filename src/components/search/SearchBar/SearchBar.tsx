import {
  Button,
  IconButton,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { connect } from "react-redux";
import { SearchBarProps } from "./SearchBar.types";
import useSearchBar from "./useSearchBar";
import { addPlaceItem } from "../../../modules/history";
import { SearchBarForm } from "./SearchBar.styled";
import ResultHints from "../ResultHints";
import { Dispatch } from "@reduxjs/toolkit";
import { PlaceItem } from "../../../helpers/api";
import { selectedPlaceSelector } from "../../../modules/weather";

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const {
    textFieldRef,
    searchTerm,
    clearSearch,
    handleInput,
    handleSubmit,
    placesItems,
    error,
  } = useSearchBar(props);

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack direction={"column"}>
      <SearchBarForm onSubmit={handleSubmit}>
        <TextField
          fullWidth={xs}
          color={error ? "error" : "primary"}
          ref={textFieldRef}
          variant={"outlined"}
          label={"City"}
          placeholder={"Prague"}
          value={searchTerm}
          onInput={handleInput}
          helperText={error}
          InputProps={{
            endAdornment:
              searchTerm !== "" ? (
                <IconButton onClick={clearSearch}>
                  <ClearIcon />
                </IconButton>
              ) : (
                <IconButton disabled>
                  <ClearIcon sx={{ color: "transparent" }} />
                </IconButton>
              ),
          }}
        />
        <Button type={"submit"} variant={"contained"} color={"primary"}>
          Search
        </Button>
      </SearchBarForm>
      <ResultHints items={placesItems} />
    </Stack>
  );
};

const mapStateToProps = (state: any) => ({
  selectedPlace: selectedPlaceSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addPlaceItem: (item: PlaceItem | PlaceItem[]) => addPlaceItem(item),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
