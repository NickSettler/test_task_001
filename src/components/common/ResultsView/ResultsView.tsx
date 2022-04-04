import { Stack } from "@mui/material";
import { connect } from "react-redux";
import SearchBar from "../../search/SearchBar";
import WeatherData from "../WeatherData";

const ResultsView = (): JSX.Element => {
  return (
    <Stack>
      <SearchBar />
      <WeatherData />
    </Stack>
  );
};

export default connect(null, null)(ResultsView);
