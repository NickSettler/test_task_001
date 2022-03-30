import { connect } from "react-redux";
import ResultsView from "../../components/common/ResultsView/ResultsView";
import { Stack } from "@mui/material";

const MainPage = (): JSX.Element => {
  return (
    <Stack direction={"column"}>
      <ResultsView />
    </Stack>
  );
};

export default connect(null, null)(MainPage);
