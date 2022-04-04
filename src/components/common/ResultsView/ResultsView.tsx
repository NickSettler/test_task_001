import { Card, CardContent, CardHeader } from "@mui/material";
import { connect } from "react-redux";
import SearchBar from "../../search/SearchBar";
import WeatherData from "../WeatherData";

const ResultsView = (): JSX.Element => {
  return (
    <Card>
      <CardHeader title={"Weather lookup"} />
      <CardContent>
        <SearchBar />
        <WeatherData />
      </CardContent>
    </Card>
  );
};

export default connect(null, null)(ResultsView);
