import {
  Button,
  ClickAwayListener,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import { connect } from "react-redux";
import { SearchBarProps } from "./SearchBar.types";
import useSearchBar from "./useSearchBar";
import { historyItemsSelector } from "../../../modules/history";
import HistoryDropdown from "../HistoryDropdown/HistoryDropdown";
import { SearchBarForm } from "./SearchBar.styled";

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const {
    textFieldRef,
    searchTerm,
    clearSearch,
    handleInput,
    handleSubmit,
    dropdownOpen,
    handleDropdownToggle,
    handleDropdownClose,
    filteredHistoryItems,
    placesItems,
  } = useSearchBar(props);

  return (
    <ClickAwayListener onClickAway={handleDropdownClose}>
      <Stack direction={"row"}>
        <SearchBarForm onSubmit={handleSubmit}>
          <TextField
            ref={textFieldRef}
            variant={"outlined"}
            label={"City"}
            placeholder={"Prague"}
            value={searchTerm}
            onInput={handleInput}
            InputProps={{
              endAdornment:
                searchTerm === "" ? (
                  <IconButton onClick={handleDropdownToggle}>
                    <HistoryIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={clearSearch}>
                    <ClearIcon />
                  </IconButton>
                ),
            }}
          />
          <Button type={"submit"} variant={"contained"} color={"primary"}>
            Search
          </Button>
        </SearchBarForm>
        <HistoryDropdown
          open={dropdownOpen}
          anchorRef={textFieldRef}
          historyItems={filteredHistoryItems}
          placeItems={placesItems}
        />
      </Stack>
    </ClickAwayListener>
  );
};

const mapStateToProps = (state: any) => ({
  historyItems: historyItemsSelector(state),
});

export default connect(mapStateToProps, {})(SearchBar);
