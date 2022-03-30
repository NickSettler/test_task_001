import { ClickAwayListener, IconButton, Stack, TextField } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import { connect } from "react-redux";
import { SearchBarProps } from "./SearchBar.types";
import useSearchBar from "./useSearchBar";
import { historyItemsSelector } from "../../../modules/history";
import HistoryDropdown from "../HistoryDropdown/HistoryDropdown";
import WeatherApi from "../../../helpers/api/WeatherApi";

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const {
    textFieldRef,
    searchTerm,
    clearSearch,
    handleInput,
    dropdownOpen,
    handleDropdownToggle,
    handleDropdownClose,
    filteredItems,
  } = useSearchBar(props);

  WeatherApi.getInstance();

  return (
    <ClickAwayListener onClickAway={handleDropdownClose}>
      <Stack direction={"row"}>
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
        {`${dropdownOpen}`}
        <HistoryDropdown
          open={dropdownOpen}
          anchorRef={textFieldRef}
          items={filteredItems}
        />
      </Stack>
    </ClickAwayListener>
  );
};

const mapStateToProps = (state: any) => ({
  historyItems: historyItemsSelector(state),
});

export default connect(mapStateToProps, {})(SearchBar);
